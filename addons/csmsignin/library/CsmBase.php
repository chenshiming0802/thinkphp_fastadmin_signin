<?php
// +----------------------------------------------------------------------
// Csmmeet [ CSM系列公共源码 ]
// Author: chensm <chenshiming0802@163.com>
// Create by chensm at 2020-02-26
// +----------------------------------------------------------------------
namespace addons\csmsignin\library;

/**
 * CSM控制器基类
 */
class CsmBase extends \think\addons\Controller
{

    // 初始化
    public function __construct()
    {
        parent::__construct();
        $config = get_addon_config('Csmmeett');
        $this->view->engine->config('view_path', $this->view->engine->config('view_path') . DS);
        \think\Config::set('csmmeet', $config);
    }

    public function _initialize()
    {
        parent::_initialize();
        // 如果请求参数action的值为一个方法名,则直接调用
        $action = $this->request->post("action");
        if ($action && $this->request->isPost()) {
            return $this->$action();
        }
    }
}

