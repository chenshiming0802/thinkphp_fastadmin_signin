<?php

namespace app\api\controller\csmsignin;

use addons\csmsignin\library\xcore\xcore\base\XcAApi;
use addons\csmsignin\library\xcore\xcore\utils\XcDaoUtils;




/**
 * APP首页的请求数据
 */
class XpDmo extends XcAApi
{
    public function xinit()
    {
        $this->model = new \app\admin\model\csmsignin\Dmo();
    }

    public function queryList()
    {

        $buildparams = $this->buildparams();
        [$list, $total] = $this->_queryList($buildparams);
        XcDaoUtils::bindDbListColumn($list,"csmsignin_dmocategory_id",new \app\admin\model\csmsignin\Dmocategory(),'dmocategory',["name"]);
        XcDaoUtils::bindDbListMultiColumn($list,"csmsignin_dmocategory_ids",new \app\admin\model\csmsignin\Dmocategory(),'dmocategorys','name');

        foreach($list as $key=>$value){
            $list[$key] = '';
        }
        $this->success(null, ['list' => $list]);
    }
}
