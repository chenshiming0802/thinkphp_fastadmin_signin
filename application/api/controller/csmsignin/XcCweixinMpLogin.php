<?php

namespace app\api\controller\csmsignin;

use EasyWeChat\Factory;
use addons\csmsignin\library\xcore\xcore\base\XcAApi;
use addons\csmsignin\library\xcore\xcore\utils\XcConfigUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcDaoUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcRequestUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcUserCloginThirdUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcUserSessionUtils;

/**
 * 微信登录支持
 * mp：微信小程序
 * oa：微信公众号
 */
class XcCweixinMpLogin extends XcAApi
{
    protected $model = null;
    protected $config = null;
    protected $user_fields = "id,username,nickname,email,mobile,avatar,jointime";

    public function xinit()
    {
        $this->model = new \app\admin\model\csmsignin\Cloginthird();

        $this->config = [
            'app_id' => XcConfigUtils::config('cloginwxmpappid'),
            'secret' => XcConfigUtils::config('cloginwxmpappsecret'),
            'response_type' => 'array',
        ];
    }

    public function loginOpenid()
    {
        $code = XcRequestUtils::post("code");

        $app = Factory::miniProgram($this->config);
        $wx_sessions = $app->auth->session($code);

        $openid = $wx_sessions['openid'];
        $unionid = isset($wx_sessions['unionid']) ? $wx_sessions['unionid'] : "";
        $user_id = XcUserCloginThirdUtils::registerIFNotExist('weixin_mp', $this->config['app_id'], $openid, $unionid, null, '微信用户');
        $token = null;
        if (true) {
            $this->auth->direct($user_id);
            $token = $this->auth->getToken();
        }
        $user['mp_unionid'] = $unionid;
        $user['mp_openid'] = $openid;
        $this->success(null, ['user' => $user, "openid" => $openid, "token" => $token]);
    }


    public function loginMobile()
    {
        $code = XcRequestUtils::post("code");
        $app = Factory::miniProgram($this->config);
        $result = $app->phone_number->getUserPhoneNumber($code);

        if ($result['errcode'] != 0) {
            $this->error($result['errmsg']);
        } else {
            $user_id = XcUserSessionUtils::getUserId(false);
            $purePhoneNumber = $result['phone_info']['purePhoneNumber'];

            $cloginthird = XcDaoUtils::getRowBySql(new \app\admin\model\csmsignin\Cloginthird(), [
                ['user_id', '=', $user_id]
            ]);
            if ($cloginthird) {
                $cloginthird->save(['purephonenumber' => $purePhoneNumber]);
            }

            $user = XcUserCloginThirdUtils::updateMobile($user_id, $purePhoneNumber);

            $token = null;
            if (true) {
                $this->auth->direct($user->id);
                $token = $this->auth->getToken();
            }

            $this->success(null, [
                'token' => $token,
                'user' => $user,
            ]);
        }
    }


    // http://fastadmin_addons_csmsignin.local/api/csmsignin/xc_cweixin_oa_login/qcode_url
    public function qcode_url()
    {
        $page = XcRequestUtils::get('page');
        $scene = XcRequestUtils::get('scene');
        $width = XcRequestUtils::get('width');
        // pd($scene);

        $app = Factory::miniProgram($this->config);
        $response = $app->app_code->getUnlimit($scene, [
            'page'  => $page,
            'width' => $width,
        ]);

        if ($response instanceof \EasyWeChat\Kernel\Http\StreamResponse) {
            $contents = $response->getBodyContents();
            return $contents;
        } else {
            var_dump($response);
        }
    }
}
