<?php
// +----------------------------------------------------------------------
// Csmmeet [ CSMSignin签到和活动 ]
// Author: chensm <chenshiming0802@163.com>
// Create by chensm at 2020-02-29
// +----------------------------------------------------------------------
namespace app\admin\controller\csmsignin;

use addons\csmsignin\library\CsmBackend;
use addons\csmsignin\library\CsmWeixinUtils;
use Exception;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 活动信息
 *
 * @icon fa fa-circle-o
 */
class Conf extends CsmBackend
{

    /**
     * Conf模型对象
     *
     * @var \app\admin\model\csmsignin\Conf
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\csmsignin\Conf();
        $this->view->assign("requiredsigininList", $this->model->getRequiredsigininList());
        $this->view->assign("canoutusersigninList", $this->model->getCanoutusersigninList());
        $this->view->assign("statusList", $this->model->getStatusList());
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */

    /**
     * 添加会议，根据插件默认配置添加confuser
     */
    public function add()
    {
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);

                if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
                    $params[$this->dataLimitField] = $this->auth->id;
                }
                $result = false;
                Db::startTrans();
                try {
                    // 是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                        $this->model->validateFailException(true)->validate($validate);
                    }
                    $result = $this->model->allowField(true)->save($params);

                    // 添加默认的活动栏目信息
                    $config = get_addon_config('csmsignin');
                    $confinfocolumns = $config['defaultConfInfoLables'];

                    $csmsignin_conf_id = $this->model->getLastInsID();
                    $confinfodao = new \app\admin\model\csmsignin\Confinfo();

                    $confinfocolumnsarr = array_reverse(explode(",", $confinfocolumns));
                    foreach ($confinfocolumnsarr as $key => $value) {
                        $params = [
                            "csmsignin_conf_id" => $csmsignin_conf_id,
                            "title" => $value,
                            "content" => "这个是" . $value . "栏目，请在后台维护",
                            "weigh" => $key,
                            "status" => "normal",
                            "createtime" => time()
                        ];
                        // var_dump($params);
                        $confinfodao->create($params);
                    }

                    Db::commit();
                } catch (ValidateException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (PDOException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were inserted'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        return $this->view->fetch();
    }

    /**
     * 获取活动的小程序二维码
     */
    public function getQDcodeImg()
    {
        $confid = $this->request->request("confid");

        $config = get_addon_config('csmsignin');
        $appid = $config['wxAppID'];
        $appSecret = $config['wxAppSecret'];
        if ($appid == null || $appid == "" || $appSecret == null || $appSecret == "") {
            $this->error("微信wxAppID或wxAppSecret配置错误，请前往插件管理配置");
        }
        $conf = $this->model->where("id","=",$confid)->find();
        if($conf==null){
            $this->error("活动不存在");
        }

        // var_dump($appid);var_dump($appSecret);
        $post_data = array(
            'scene' => 'confid=' . $confid
        );
        $res = CsmWeixinUtils::getAccessToken($appid, $appSecret, 'client_credential');
        if ($res == null || $res == "") {
            $this->error("微信wxAppID或wxAppSecret配置错误，请前往插件管理配置");
        }
        $access_token = $res['access_token'];

        $imgdata = CsmWeixinUtils::invokeWxcode($access_token, $post_data);
        echo '<img src=' . $imgdata . '></img><BR><b>'.$conf->name.'</b>';

        // CsmWeixinUtils::testGetQrcode();//TODO
    }
}
