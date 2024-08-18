<?php
// +----------------------------------------------------------------------
// Csmmeet [ CSM系列公共源码 ]
// Author: chensm <chenshiming0802@163.com>
// Create by chensm at 2020-02-26
// +----------------------------------------------------------------------
namespace addons\csmsignin\library;

class CsmWeixinUtils
{

    /**
     * 消息推送http
     *
     * @param
     *            $url
     * @param
     *            $post_data
     * @return bool|string
     */
    public static function send_post($url, $post_data)
    {
        $options = array(
            'http' => array(
                'method' => 'POST',
                'header' => 'Content-type:application/json',
                // header 需要设置为 JSON
                'content' => $post_data,
                'timeout' => 60
                // 超时时间
            )
        );
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return $result;
    }

    // 二进制转图片image/png
    public static function data_uri($contents, $mime)
    {
        $base64 = base64_encode($contents);
        return ('data:' . $mime . ';base64,' . $base64);
    }

    public static function invokeWxcode($ACCESS_TOKEN, $post_data)
    {
        $url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" . $ACCESS_TOKEN;
        // var_dump($post_data);
        // echo($url."<BR>");
        $post_data = json_encode($post_data);
        $data = CsmWeixinUtils::send_post($url, $post_data);

        $result = CsmWeixinUtils::data_uri($data, 'image/png');
        return $result;
    }

    // 发送access_token
    public static function getAccessToken($appid, $secret, $grant_type)
    {
        if (empty($appid) || empty($secret) || empty($grant_type)) {
            return '参数错误';
        }
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type={$grant_type}&appid={$appid}&secret={$secret}";
        $json = CsmWeixinUtils::send_post($url, array());
        $data = json_decode($json, true);
        return $data;
    }

    public static function testGetQrcode()
    {
        $config = get_addon_config('csmsignin');
        $appid = $config['wxAppID'];
        $appSecret = $config['wxAppSecret'];

        $post_data = array(
            'scene' => '123' // 34%2CS853EE4QRP
        );
        $res = CsmWeixinUtils::getAccessToken($appid, $appSecret, 'client_credential');

        $access_token = $res['access_token'];

        $imgdata = CsmWeixinUtils::invokeWxcode($access_token, $post_data);
        echo '<img src=' . $imgdata . '></img>';
    }
}




