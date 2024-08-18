<?php

namespace addons\csmsignin\library\xcore\xcore\base;

use app\common\controller\Backend;

/**
 * Backend的基础类(admin control的基类)
 */
abstract class XcABackend extends Backend
{

    /**
     * 同assign(解决assign为protected的问题)
     *
     * @param string $name
     * @param string $value
     * @return mixed
     */
    public function xcAssign($name, $value = '')
    {
        return $this->assign($name, $value);
    }

    /**
     * 同assign(解决assign为protected的问题)
     *
     * @param string $name
     * @param string $value
     * @return mixed
     */
    public function xcAssignconfig($name, $value = '')
    {
        return $this->assignconfig($name, $value);
    }


    /*
    如果要对象有port页面，则copy如下代码：
{$xp_currentnav_html}
<div class="panel panel-default panel-intro" style="background-color:#f1f4f6;">
    <div class="xc-block">
        <div class="xc-title">微信小程序码</div>
        <div class="xc-content">
            <image src="/api/csmsignin/xc_cweixin_mp_login/qcode_url?page={$page}&scene={$page}&width=600" width="300px" height="300px"></image>
        </div>
    </div>
    <div class="xc-block">
        <div class="xc-title">网页链接地址</div>
        <div class="xc-content"><a href='{$h5_url}' target="_blank">{$h5_url}</a></div>
        <image src="/api/csmsignin/xc_api/qcode_url?url={$h5_url}" width="300px" height="300px"></image>
    </div>
</div>
    */
    // public function port($ids){
    //     $id = $ids;

    //     $addons = XcConfigUtils::xpconfig("addons_code");
    //     $this->view->assign("h5_url",XcConfigUtils::config("xcbaseurl")."/assets/addons/{$addons}/h5/#/pages/{$addons}/conf?id={$id}");
    //     $this->view->assign("page",urlencode("/pages/csmsignin/conf"));
    //     $this->view->assign("scene",urlencode("id=6"));

    //     return $this->view->fetch();
    // }
}
