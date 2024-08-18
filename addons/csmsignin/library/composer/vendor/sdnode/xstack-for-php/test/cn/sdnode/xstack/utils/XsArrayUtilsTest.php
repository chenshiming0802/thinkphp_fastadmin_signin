<?php
namespace cn\sdnode\xstack\utils;
use PHPUnit\Framework\TestCase;
use cn\sdnode\xstack\utils\XsArrayUtils;

class XsArrayUtilsTest extends TestCase
{
    public function testLength()
    {
        $this->assertEquals(3, XsArrayUtils::length(['a', 'b', 'c']));
    }

    // 比较和检查
    public function testIsEquals()
    {
        $this->assertTrue(XsArrayUtils::isEquals(['a', 'b', 'c'], ['a', 'b', 'c']));
        $this->assertFalse(XsArrayUtils::isEquals(['a', 'b'], ['a', 'b', 'c']));
    }

    public function testContains()
    {
        $this->assertTrue(XsArrayUtils::contains(['a', 'b', 'c'], 'b'));
        $this->assertFalse(XsArrayUtils::contains(['a', 'b', 'c'], 'd'));
    }

    public function testIsEmpty()
    {
        $this->assertTrue(XsArrayUtils::isEmpty([]));
        $this->assertFalse(XsArrayUtils::isEmpty([0]));
    }


    // 索引查找
    public function testIndexOf()
    {
        $this->assertEquals(1, XsArrayUtils::indexOf(['a', 'b', 'c'], 'b'));
        $this->assertEquals(-1, XsArrayUtils::indexOf(['a', 'b', 'c'], 'd'));
    }

    public function testLastIndexOf()
    {
        $this->assertEquals(0, XsArrayUtils::lastIndexOf(['a', 'b', 'c', 'b'], 'b'));
        $this->assertEquals(-1, XsArrayUtils::lastIndexOf(['a', 'b', 'c'], 'd'));
    }


    // 子数组操作
    public function testSubarray()
    {
        $array = ['a', 'b', 'c', 'd', 'e'];
        $this->assertEquals(['b', 'c'], XsArrayUtils::subarray($array, 1, 3));
    }

    // 数组修改和添加
    public function testAddObject()
    {
        $array = ['a', 'b', 'c'];
        $this->assertEquals(['a', 'b', 'c', 'd'], XsArrayUtils::addObject($array, 'd'));
    }

    public function testAddObjects()
    {
        $this->assertEquals(['a', 'b', 'c', 'd', 'e'], XsArrayUtils::addObjects(['a', 'b', 'c'], ['d', 'e']));
    }

    public function testInsertObject()
    {
        $array = ['a', 'c', 'd'];
        $this->assertEquals(['a', 'b', 'c', 'd'], XsArrayUtils::insertObject($array, 'b', 1));
    }

    public function testRemoveObject()
    {
        $array = ['a', 'b', 'c'];
        $this->assertEquals(['a', 'c'], XsArrayUtils::removeObject($array, 'b'));
    }


    public function testRemove()
    {
        // 测试开始删除索引，不指定结束索引，应删除到数组末尾
        $this->assertSame([1, 2], XsArrayUtils::remove([1, 2, 3, 4, 5], 2));
        $this->assertSame([1, 2, 5], XsArrayUtils::remove([1, 2, 3, 4, 5], 2, 2));
        // 测试删除整个数组
        $this->assertSame([], XsArrayUtils::remove([1, 2, 3, 4, 5], 0));
    }

    // 数组变换
    public function testReverse()
    {
        $array = ['a', 'b', 'c'];
        $this->assertEquals(['c', 'b', 'a'], XsArrayUtils::reverse($array));
    }

    public function testShift()
    {
        $array = ['a', 'b', 'c'];
        $this->assertEquals(['b', 'c', 'a'], XsArrayUtils::shift($array));
    }


    // 类型转换
    public function testClone()
    {
        $array = ['a', 'b', 'c'];
        $cloned = XsArrayUtils::clone($array);
        $this->assertEquals($array, $cloned);
    }

    // 字符串表示
    public function testToString()
    {
        $array = ['Hello', 'World'];
        $this->assertEquals('Hello, World', XsArrayUtils::toString($array));
    }


    public function testPop()
    {
        $array = ['a', 'b', 'c'];
        XsArrayUtils::pop($array);
        $this->assertSame(['a', 'b'], $array);
    }

    public function testPush()
    {
        $array = ['b', 'c'];
        XsArrayUtils::push($array, 'a');
        $this->assertSame(['a', 'b', 'c'], $array);
    }
}
