<?php
// +----------------------------------------------------------------------
// Csmmeet [ CSMSignin签到和活动 ]
// Author: chensm <chenshiming0802@163.com>
// Create by chensm at 2020-02-29
// +----------------------------------------------------------------------
namespace app\admin\controller\csmsignin;

use addons\csmsignin\library\CsmBackend;

/**
 * 活动内容信息
 *
 * @icon fa fa-circle-o
 */
class Confinfo extends CsmBackend
{

    /**
     * Confinfo模型对象
     *
     * @var \app\admin\model\csmsignin\Confinfo
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\csmsignin\Confinfo();
        $this->view->assign("isneedsiginedList", $this->model->getIsneedsiginedList());
        $this->view->assign("statusList", $this->model->getStatusList());
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */

    /**
     * 查看（从活动列表页面跳转过来）
     */
    public function index()
    {
        // 当前页面必须从活动页面跳转过来
        $parentid = $this->csmreq("parentid", true);
        $parent = $this->csmGetDbRowByReqest(new \app\admin\model\csmsignin\Conf(), "parentid");
        $this->assign('parent', $parent);

        // 设置过滤方法
        $this->request->filter([
            'strip_tags'
        ]);
        if ($this->request->isAjax()) {
            // 如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField')) {
                return $this->selectpage();
            }
            list ($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model->where($where)
                ->where("csmsignin_conf_id", "=", $parentid)
                ->order($sort, $order)
                ->count();

            $list = $this->model->where($where)
                ->where("csmsignin_conf_id", "=", $parentid)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $list = collection($list)->toArray();
            $result = array(
                "total" => $total,
                "rows" => $list
            );

            return json($result);
        }
        return $this->view->fetch();
    }
}
