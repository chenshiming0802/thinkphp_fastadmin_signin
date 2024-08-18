<?php


namespace app\api\controller\csmsignin;

use addons\csmsignin\library\xcore\xcore\base\XcAMyApi;
use addons\csmsignin\library\xcore\xcore\utils\XcDaoUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcRequestUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcUserSessionUtils;


class XcmyCloginApi extends XcAMyApi
{
    protected $noNeedMyRight = ["getSessionUserinfo"];
    public function xinit()
    {
    }

    public function getSessionUserinfo()
    {
        $userinfo = XcUserSessionUtils::getUserinfo(false);
        $this->success(null, ['userinfo' => $userinfo]);
    }

    public function updateUserinfo()
    {
        $userId = XcUserSessionUtils::getUserId();
        $nickname = XcRequestUtils::post("nickname");
        $avatar = XcRequestUtils::post("avatar");
        $user = XcDaoUtils::getRowById(new \app\admin\model\User(), $userId);
        $user->save([
            "nickname" => $nickname,
            "avatar" => $avatar
        ]);
        $this->success();
    }
    
    public function deleteUserinfo(){
        $userId = XcUserSessionUtils::getUserId();
        if(true){
            $row = XcDaoUtils::getRowById(new \app\admin\model\User(),$userId);
            $row->save([
                'status'=>'hidden',
                'mobile'=>'',
                'username'=>$row->username."-DEL"
            ]);
        }
        if(true){
            $row = XcDaoUtils::getRowBySql(new \app\admin\model\csmsignin\Cloginthird(),[
                ['user_id','=',$userId]
            ],null,true,false);
            if($row){
                $row->save([
                    'status'=>'hidden'
                ]);
            }
        }

        $this->success();
    }
}
