<?php

namespace cn\sdnode\xstack\utils;

use Exception;
use PHPUnit\Framework\TestCase;
use cn\sdnode\xstack\utils\XsHttpUtils;

class XsHttpUtilsTest extends TestCase
{
    public function test()
    {
        $this->assertTrue(true);
    }
    // /**
    //  * 测试get方法
    //  */
    // public function testGet()
    // {
    //     // 由于实际HTTP请求无法在测试中执行，我们通常使用模拟或存根来代替
    //     // 这里我们假设有一个模拟的URL可以返回预期的响应
    //     $response = XsHttpUtils::get('https://gitee.com/sdnode');

    //     var_dump($response);die();
    // }

    // /**
    //  * 测试post方法
    //  */
    // public function testPost()
    // {
    //     // 同上，使用模拟的URL和数据
    //     $response = XsHttpUtils::post('https://example.com/test', ['key' => 'value']);

    //     // 断言响应不是false
    //     $this->assertFalse($response === false);

    //     // 断言响应包含某些预期的内容
    //     $this->assertContains('expected content', $response);
    // }

    // /**
    //  * 测试setCookie方法
    //  */
    // public function testSetCookie()
    // {
    //     // 清除之前的Cookie，确保测试的准确性
    //     if (isset($_COOKIE['test_cookie'])) {
    //         unset($_COOKIE['test_cookie']);
    //     }

    //     // 设置Cookie
    //     XsHttpUtils::setCookie('test_cookie', 'test_value', time() + 3600);

    //     // 断言全局$_COOKIE数组中存在我们设置的Cookie
    //     $this->assertArrayHasKey('test_cookie', $_COOKIE);
    //     $this->assertSame('test_value', $_COOKIE['test_cookie']);
    // }

    // /**
    //  * 测试getCookie方法
    //  */
    // public function testGetCookie()
    // {
    //     // 模拟已经设置的Cookie
    //     $_COOKIE['test_cookie'] = 'test_value';

    //     // 获取Cookie
    //     $value = XsHttpUtils::getCookie('test_cookie');

    //     // 断言获取到的Cookie值是正确的
    //     $this->assertSame('test_value', $value);

    //     // 断言未设置的Cookie返回null
    //     $this->assertNull(XsHttpUtils::getCookie('non_existent_cookie'));
    // }

    // public function testPostJson()
    // {
    //     // 要发送的JSON数据数组
    //     $data = [
    //         'key1' => 'value1',
    //         'key2' => 'value2'
    //     ];

    //     // 发送POST请求到指定URL
    //     try {
    //         $response = XsHttpUtils::postJson('https://example.com/api/endpoint', $data);
    //         // 处理响应
    //         echo $response;
    //     } catch (Exception $e) {
    //         // 错误处理
    //         echo 'Error: ' . $e->getMessage();
    //     }
    // }
}
