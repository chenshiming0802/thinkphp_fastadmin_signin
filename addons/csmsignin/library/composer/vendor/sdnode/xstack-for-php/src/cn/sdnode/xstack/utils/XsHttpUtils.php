<?php

/**
 * @author chenshiming & gpt
 * @license MIT
 * @since 2024-05-11
 */

namespace cn\sdnode\xstack\utils;

use Exception;

class XsHttpUtils
{
    /**
     * @group http请求
     * 发送GET请求
     *
     * @param string $url 请求的URL
     * @param array $headers 请求头信息
     * @param array $options CURL选项
     * @return string
     */
    public static function get($url, $headers = [], $options = [])
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt_array($curl, $options);

        $response = curl_exec($curl);
        if (curl_errno($curl)) {
            throw new Exception(curl_error($curl));
        }
        curl_close($curl);

        return $response;
    }

    /**
     * @group  http请求
     * 发送POST请求
     *
     * @param string $url 请求的URL
     * @param mixed $data 发送的数据
     * @param array $headers 请求头信息
     * @param array $options CURL选项
     * @return mixed
     */
    public static function post($url, $data, $headers = [], $options = [])
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt_array($curl, $options);

        $response = curl_exec($curl);
        if (curl_errno($curl)) {
            throw new Exception(curl_error($curl));
        }
        curl_close($curl);

        return $response;
    }

     /**
     * @group http请求
     * 发送JSON格式的POST请求
     *
     * @param string $url 请求的URL
     * @param array $jsonArray JSON数据数组
     * @param array $headers 请求头信息
     * @param array $options CURL选项
     * @return mixed
     */
    public static function postJson($url, $jsonArray, $headers = [], $options = [])
    {
        // 设置JSON格式的请求头
        $headers = array_merge([
            'Content-Type: application/json',
            'Accept: application/json'
        ], $headers);

        // 将数组转换为JSON字符串
        $jsonData = json_encode($jsonArray);

        // 初始化cURL会话
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt_array($curl, $options);

        // 执行cURL请求并获取响应
        $response = curl_exec($curl);
        if (curl_errno($curl)) {
            // 发生错误时抛出异常
            throw new Exception(curl_error($curl));
        }

        // 关闭cURL会话
        curl_close($curl);

        // 返回响应内容
        return $response;
    }

    /**
     * @cookie操作
     * 设置Cookie
     *
     * @param string $name Cookie名称
     * @param string $value Cookie值
     * @param int $expire Cookie过期时间（时间戳）
     * @param string $path Cookie路径
     * @param string $domain Cookie域名
     * @param bool $secure 是否仅在HTTPS上发送Cookie
     * @param bool $httponly 是否HTTP only
     */
    public static function setCookie($name, $value, $expire, $path = '/', $domain = '', $secure = false, $httponly = false)
    {
        setcookie($name, $value, $expire, $path, $domain, $secure, $httponly);
    }

    /**
     * @cookie操作
     * 获取Cookie
     *
     * @param string $name Cookie名称
     * @return mixed Cookie值或null
     */
    public static function getCookie($name)
    {
        return isset($_COOKIE[$name]) ? $_COOKIE[$name] : null;
    }
}
