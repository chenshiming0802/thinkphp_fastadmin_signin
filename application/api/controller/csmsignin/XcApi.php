<?php

namespace app\api\controller\csmsignin;

use addons\csmsignin\library\xcore\xcore\base\XcAApi;
use addons\csmsignin\library\xcore\xcore\utils\lib\QRcode;
use addons\csmsignin\library\xcore\xcore\utils\XcRequestUtils;

/**
 * APP首页的请求数据
 * http://csmsignin.local/api/csmsignin/xc_api/test
 */
class XcApi extends XcAApi
{
    protected $model = null;

    public function xinit()
    {
    }

    public function qcode_url()
    {
        $url = XcRequestUtils::get('url');
        QRcode::png($url,false,QR_ECLEVEL_L,6,2);
    }
}
