<?php

/**
 * @author chenshiming & gpt
 * @license MIT
 * @since 2024-05-11
 */

namespace cn\sdnode\xstack\utils;

class XsJsonUtils
{
    /**
     * @group json、object和string 互转
     * 将JSON对象转换为字符串
     * 
     * @param mixed $json JSON对象 
     * @return string JSON字符串
     */
    public static function jsonToString($json)
    {
        return json_encode($json);
    }

    /**
     * @group json、object和string 互转
     * 将JSON字符串转换为对象
     * 
     * @param string $string JSON字符串
     * @return mixed JSON对象
     */
    public static function stringToJson($string)
    {
        return json_decode($string);
    }

 
    /**
     * @group json、object和string 互转
     * 将字符串转换为对象
     * 
     * @param string $string 字符串
     * @return object 对象
     */
    public static function stringToObject($string)
    {
        return json_decode($string);
    }

    /**
     * @group json、object和string 互转
     * 将对象转换为JSON字符串
     * 
     * @param object $object 对象
     * @return json JSON字符
     */
    public static function objectToJson($object)
    {
        return json_encode($object);
    }

 

    /**
     * @json操作
     * 合并两个JSON对象
     * 
     * @param mixed $json1 第一个JSON对象
     * @param mixed $json2 第二个JSON对象
     * @return mixed 合并后的JSON对象
     */
    public static function mergeJson($json1, $json2)
    {
        return array_merge_recursive($json1, $json2);
    }

    /**
     * @json操作
     * 合并两个JSON字符串
     * 
     * @param string $string1 第一个JSON字符串 如：{"key1":"value1"}
     * @param string $string2 第二个JSON字符串 如：{"key2":"value2"}
     * @return string 合并后的JSON字符串 如：{"key1":"value1", "key2":"value2"}
     */
    public static function mergeString($string1, $string2)
    {
        $json1 = json_decode($string1, true);
        $json2 = json_decode($string2, true);
        return self::jsonToString(array_merge_recursive($json1, $json2));
    }

    /**
     * @json操作
     * 通过键值获取json对象值,比如{"a":{"b":{"c":"value"}}}中通过 a.b.c 获取到value
     * @param array $json 如:{"a":{"b":{"c":"value"}}}
     * @param string $keybars 嵌套key的string格式,如:a.b.c
     * @return mixed json中对象值, 如:value
     */
    public static function getValueByKeybars($json, $keybars)
    {
        if ($json == null) {
            return null;
        }
        $keys = explode('.', $keybars);
        $value = $json;
        foreach ($keys as $key) {
            if (array_key_exists($key, $value)) {
                $value = $value[$key];
            } else {
                return null;
            }
        }
        return $value;
    }
}
