<?php

namespace app\api\controller\csmsignin;

use ReflectionClass;
use addons\csmsignin\library\xcore\xcore\base\XcAMyAppyApi;
use addons\csmsignin\library\xcore\xcore\utils\XcDaoUtils;

/**
 * APP首页的请求数据
 */
class XpmyDmoapply extends XcAMyAppyApi //XcMyApi
{
    protected $fields = ["id", "name", "csmsignin_dmocategory_id", "csmsignin_dmocategory_ids", "type", "types", "content", "bannerimage", "images", "status", "user_id", "createtime", "updatetime"];
    protected $dictfields = ["status", "type", "types"];

    public function xinit()
    {
        $this->model = new \app\admin\model\csmsignin\Dmoapply();

        
    }



    public function queryList()
    {

        $buildparams = $this->buildparams();
        [$list, $total] = $this->_queryList($buildparams);
        XcDaoUtils::bindDbListColumn($list, "csmsignin_dmocategory_id", new \app\admin\model\csmsignin\Dmocategory(), 'dmocategory', ["name"]);
        XcDaoUtils::bindDbListMultiColumn($list, "csmsignin_dmocategory_ids", new \app\admin\model\csmsignin\Dmocategory(), 'dmocategorys', 'name');
        $this->success(null, ['list' => $list]);
    }

}
