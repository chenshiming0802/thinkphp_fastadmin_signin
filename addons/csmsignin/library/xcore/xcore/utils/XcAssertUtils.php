<?php

namespace addons\csmsignin\library\xcore\xcore\utils;

/**
 * Assert的工具封装类
 */
class XcAssertUtils
{
    public static function assertNotNull($value,$msg='null error')
    {
        if (empty($value)) {
            throw Exception($msg);
        }
    }
}
