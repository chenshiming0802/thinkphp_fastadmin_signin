<?php

namespace app\api\controller\csmsignin;

use addons\csmsignin\library\xcore\xcore\base\XcAApi;
use addons\csmsignin\library\xcore\xcore\utils\XcDaoUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcRequestUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcUserSessionUtils;

/**
 * APP首页的请求数据
 */
class XpConf extends XcAApi
{
    public function xinit()
    {
        $this->model = new \app\admin\model\csmsignin\Conf();
    }

    public function getById()
    {
        $id = XcRequestUtils::get("id", true);
        $userid = XcUserSessionUtils::getUserId(false);
        //$conf = $this->_getById($id);
        $conf = XcDaoUtils::getRowById($this->model,$id,true,false);
        if(!$conf){
            $this->success();
            return;
        }

        $conf["images"] = XcRequestUtils::cdnurl($conf->images);

        $confuser = null;
        if ($userid) {
            $confuser = $this->_getConfuser($id, $userid);
        }

        $confinfos = [];
        if (true) {
            $confinfos = XcDaoUtils::getListBySql(new \app\admin\model\csmsignin\Confinfo(), [
                ["csmsignin_conf_id", "=", $id]
            ], null, 'weigh desc');
            if ($confuser == null) {
                foreach ($confinfos as &$item) {
                    if ($conf->requiredsiginin == 'Y' || $item->isneedsigined == 'Y')
                        $item['content'] = "请您先签到！";
                }
            }
        }

        // $confuser = $this->_getConfuser($id, $userid);

        $this->success(null, ['conf' => $conf, 'confinfos' => $confinfos, "confuser" => $confuser]);
    }

    public function submitSignin()
    {
        $confid = XcRequestUtils::post("confid");

        $confuserdao = new \app\admin\model\csmsignin\Confuser();
        $conf = $this->_getById($confid);
        $userinfo = XcUserSessionUtils::getUserinfo();

        // pd($userinfo);
        if (true) {
            $now = time();
            if ($now < $conf->begintime) {
                return $this->error("签到从" . date('Y-m-s h:i', $conf->begintime) . "开始，目前无法签到!");
            }
            if ($now > $conf->endtime) {
                return $this->error("签到时间已过，无法签到!");
            }
        }

        $confuser = $this->_getConfuser($confid, $userinfo->id);
        if (true) {
            if ($conf->canoutusersignin == "N" && $confuser == null) {
                return $this->error("您不在参会名单中，无法签到!");
            }
        }

        $signordernum = 0;
        if (true) {
            $cnt = XcDaoUtils::getCountBySql($confuserdao, [
                ["csmsignin_conf_id", "=", $confid],
                ["signinstatus", "=", "Y"],
                ["usermobile", "<>", $userinfo->mobile]
            ]);
            $signordernum = $cnt + 1;
        }

        if ($confuser) {
            $confuser->save([
                "signinstatus" => "Y",
                "signintime" => time(),
                "signordernum" => $signordernum,
                "user_id" => $userinfo->id,
                "updatetime" => time()
            ]);
        } else {
            $confuser = $confuserdao->create([
                "csmsignin_conf_id" => $confid,
                "username" => $userinfo->nickname,
                "usermobile" => $userinfo->mobile,
                "signinstatus" => "Y",
                "signintime" => time(),
                "signordernum" => $signordernum,
                "user_id" => $userinfo->id,
                "createtime" => time()
            ]);
        }

        return $this->success('', [
            "confuser" => $confuser,
            "signordernum" => $signordernum
        ]);
    }

    /**
     * 获取当前用户的签到信息，如果手机号码匹配则也认为是已签到，并补充user_id
     */
    private function _getConfuser($confid, $userid)
    {
        $dao = new \app\admin\model\csmsignin\Confuser();

        $confuser =  XcDaoUtils::getRowBySql($dao, [
            ["csmsignin_conf_id", "=", $confid],
            ["user_id", "=", $userid]
        ]);

        if ($confuser == null) {
            $user = XcDaoUtils::getRowById(new \app\admin\model\User(), $userid);
            if ($user->mobile != null && $user->mobile != '') {
                $confuser =  XcDaoUtils::getRowBySql($dao, [
                    ["csmsignin_conf_id", "=", $confid],
                    ["usermobile", "=", $user->mobile]
                ]);
                if ($confuser != null) {
                    $confuser->save([
                        'user_id' => $userid
                    ]);
                }
            }
        }
        return $confuser;
    }
}
