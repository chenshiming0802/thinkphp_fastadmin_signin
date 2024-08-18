<?php
// +----------------------------------------------------------------------
// | CSMSIGNIN  [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2024 https://www.fastadmin.net All rights reserved.
// +----------------------------------------------------------------------
// | Author: yourname
// +----------------------------------------------------------------------

namespace app\admin\controller\csmsignin;

use think\Db;
use Exception;
use think\exception\PDOException;
use think\exception\ValidateException;
use addons\csmsignin\library\xcore\xcore\base\XcABackend;
use addons\csmsignin\library\xcore\xcore\utils\XcConfigUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcRequestUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcAdminTabUtils;

/**
 * 活动信息
 *
 * @icon fa fa-circle-o
 */
class Conf extends XcABackend
{

    /**
     * Conf模型对象
     * @var \app\admin\model\csmsignin\Conf
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\csmsignin\Conf;
        $this->assign("requiredsigininList", $this->model->getRequiredsigininList());
        $this->assign("canoutusersigninList", $this->model->getCanoutusersigninList());
        $this->assign("statusList", $this->model->getStatusList());

        // csmsignin:设置页面tabs
        $xc_tabid = XcRequestUtils::param("ids");
        XcAdminTabUtils::append_control_initialize('conf', $xc_tabid, __CLASS__, $this->view);
    }



    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


    /**
     * 查看
     */
    public function index()
    {
        //当前是否为关联查询
        $this->relationSearch = false;
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->isAjax()) {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();

            $list = $this->model

                ->where($where)
                ->order($sort, $order)
                ->paginate($limit);

            foreach ($list as $row) {
                $row->visible(['id', 'name', 'images', 'requiredsiginin', 'canoutusersignin', 'begintime', 'endtime', 'status']);
            }

            $result = array("total" => $list->total(), "rows" => $list->items());

            return json($result);
        }
        return $this->view->fetch();
    }

   
    public function add()
    {
        if (false === $this->request->isPost()) {
            return $this->view->fetch();
        }
        $params = $this->request->post('row/a');
        if (empty($params)) {
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $params = $this->preExcludeFields($params);

        if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
            $params[$this->dataLimitField] = $this->auth->id;
        }
        $result = false;
        Db::startTrans();
        try {
            //是否采用模型验证
            if ($this->modelValidate) {
                $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                $this->model->validateFailException()->validate($validate);
            }
            $result = $this->model->allowField(true)->save($params);

            // 添加默认的活动栏目信息
            $confinfocolumns = XcConfigUtils::config('defaultConfInfoLables');

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
                $confinfodao->create($params);
            }

            Db::commit();
        } catch (ValidateException|PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($result === false) {
            $this->error(__('No rows were inserted'));
        }
        $this->success();
    }

    public function port($ids){
        $id = $ids;

        $addons = XcConfigUtils::xpconfig("addons_code");
        $this->view->assign("h5_url",XcConfigUtils::config("xcbaseurl")."/assets/addons/{$addons}/h5/#/pages/{$addons}/conf?id={$id}");
        $this->view->assign("page",urlencode("pages/csmsignin/conf"));
        $this->view->assign("scene",urlencode("id=6"));

        return $this->view->fetch();
    }
}
