<?php
// +----------------------------------------------------------------------
// | CSMSIGNIN  [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2024 https://www.fastadmin.net All rights reserved.
// +----------------------------------------------------------------------
// | Author: yourname
// +----------------------------------------------------------------------

namespace app\admin\controller\csmsignin;

use app\common\controller\Backend;
use addons\csmsignin\library\xcore\xcore\utils\XcRequestUtils;
use addons\csmsignin\library\xcore\xcore\utils\XcAdminTabUtils;

/**
 * 活动信息
 *
 * @icon fa fa-circle-o
 */
class Confuser extends Backend
{

    /**
     * Confuser模型对象
     * @var \app\admin\model\csmsignin\Confuser
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\csmsignin\Confuser;
        $this->assign("signinstatusList", $this->model->getSigninstatusList());
        $this->assign("statusList", $this->model->getStatusList());

        // csmsignin:设置页面tabs
        $xc_tabid = XcRequestUtils::param("xc_tabid");
        XcAdminTabUtils::append_control_initialize('conf', $xc_tabid, __CLASS__, $this->view);
    }



    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */

    public function index()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if (false === $this->request->isAjax()) {
            return $this->view->fetch();
        }
        //如果发送的来源是 Selectpage，则转发到 Selectpage
        if ($this->request->request('keyField')) {
            return $this->selectpage();
        }
        [$where, $sort, $order, $offset, $limit] = $this->buildparams();

        $list = $this->model
            ->where($where)
            ->where('csmsignin_conf_id', '=', $this->request->request("xc_tabid")) //xpframwork
            ->where('status', '=', 'normal')
            ->order($sort, $order)
            ->paginate($limit);
        $result = ['total' => $list->total(), 'rows' => $list->items()];
        return json($result);
    }
}
