<?php

namespace app\api\controller\csmsignin;

use addons\csmsignin\library\xcore\xcore\base\XcAApi;
use addons\csmsignin\library\xcore\xcore\utils\XcDaoUtils;

/**
 * APP首页的请求数据
 */
class XpDmocategory extends XcAApi
{
    public function xinit()
    {
        $this->model = new \app\admin\model\csmsignin\Dmocategory();
    }

}
