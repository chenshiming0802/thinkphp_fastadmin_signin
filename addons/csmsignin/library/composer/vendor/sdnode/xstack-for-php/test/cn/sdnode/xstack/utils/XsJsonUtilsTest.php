<?php

namespace cn\sdnode\xstack\utils;

use PHPUnit\Framework\TestCase;
use cn\sdnode\xstack\utils\XsJsonUtils;

class XsJsonUtilsTest extends TestCase
{
    public function testJsonToString()
    {
        $json = ['key' => 'value'];
        $expected = json_encode($json);
        $this->assertEquals('{"key":"value"}', XsJsonUtils::jsonToString($json));
    }

    public function testStringToJson()
    {
        $jsonString = '{"key":"value"}';
        $expected = json_decode($jsonString);
        $this->assertEquals($expected, XsJsonUtils::stringToJson($jsonString));
    }
 

    public function testStringToObject()
    {
        $jsonString = '{"key":"value"}';
        $expected = json_decode($jsonString);
        $this->assertEquals($expected, XsJsonUtils::stringToObject($jsonString));
    }

    public function testObjectToJson()
    {
        $object = (object) ['key' => 'value'];
        $expected = json_encode($object);
        $this->assertEquals($expected, XsJsonUtils::objectToJson($object));
    }

 

    public function testMergeJson()
    {
        $json1 = ['key1' => 'value1'];
        $json2 = ['key2' => 'value2'];
        $expected = ['key1' => 'value1', 'key2' => 'value2'];
        $this->assertEquals($expected, XsJsonUtils::mergeJson($json1, $json2));
    }

    public function testMergeString()
    {
        $string1 = '{"key1":"value1"}';
        $string2 = '{"key2":"value2"}';
        $expected = json_encode(['key1' => 'value1', 'key2' => 'value2']);
        $this->assertEquals($expected, XsJsonUtils::mergeString($string1, $string2));
    }

    public function testGetValueByKeybars()
    {
        $json = ['key1' => ['key2' => ['key3' => 'value']]];
        $keybars = 'key1.key2.key3';
        $expected = 'value';
        $this->assertEquals($expected, XsJsonUtils::getValueByKeybars($json, $keybars));
    }
}