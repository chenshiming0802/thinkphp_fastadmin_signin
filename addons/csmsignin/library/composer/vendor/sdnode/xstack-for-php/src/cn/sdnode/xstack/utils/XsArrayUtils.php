<?php

/**
 * @author chenshiming & gpt
 * @license MIT
 * @since 2024-05-11
 */

namespace cn\sdnode\xstack\utils;

use InvalidArgumentException;

class XsArrayUtils
{
    /**
     * @group 基本操作
     * 数组长度
     * 
     * @param array $array 数组 如:['a', 'b', 'c']
     * @return int 返回比较结果 如:3
     */
    public static function length($array)
    {
        return count($array);
    }

    /**
     * @group 比较和检查
     * 比较两个数组是否相等。
     * 
     * @param array $a 第一个数组 如:['a', 'b', 'c']
     * @param array $b 第二个数组 如:['a', 'b', 'c']
     * @return bool 返回比较结果 如:true
     */
    public static function isEquals($a, $b)
    {
        return $a === $b;
    }

    /**
     * @group 比较和检查
     * 检查数组是否包含特定的元素。
     * 
     * @param array $array 需要检查的数组 如:['a', 'b', 'c']
     * @param object $element 需要检查的元素 如:'b'
     * @return bool 是否包含元素 如:true
     */
    public static function contains($array, $element)
    {
        return in_array($element, $array);
    }

    /**
     * @group 比较和检查
     * 检查数组是否为空。
     * 
     * @param array $array 需要检查的数组 如[]
     * @return bool 是否为空 如:true
     */
    public static function isEmpty($array)
    {
        return empty($array);
    }



    /**
     * @group 索引查找
     * 查找特定元素在数组中第一次出现的索引。
     * 
     * @param array $array 需要查找的数组 如:['a', 'b', 'c']
     * @param object $element 需要查找的元素 如:b
     * @return int 元素的索引,找不到则返回-1 如:true
     */
    public static function indexOf($array, $element)
    {
        $sr = array_search($element, $array);
        return $sr === false ? -1 : $sr;
    }

    /**
     * @group 索引查找
     * 查找特定元素在数组中最后一次出现的索引。
     * 
     * @param array $array 需要查找的数组 如:['a', 'b', 'c', 'b']
     * @param object $element 需要查找的元素 如:b
     * @return int 元素的索引,找不到则返回-1 如:0
     */
    public static function lastIndexOf($array, $element)
    {
        $array = array_reverse($array);
        $sr = array_search($element, $array);
        return $sr === false ? -1 : $sr;
    }




    /**
     * @group 数组修改和添加
     * 从数组中提取一个子数组。
     * 
     * @param array $array 原始数组 如:['a', 'b', 'c', 'd', 'e']
     * @param int $startIndex 开始索引 如:1
     * @param int|null $endIndex 结束索引 如:3
     * @return array 提取的子数组 如:['b', 'c']
     */
    public static function subarray($array, $startIndex, $endIndex = null)
    {
        return array_slice($array, $startIndex, $endIndex === null ? count($array) - $startIndex : $endIndex - $startIndex);
    }


    /**
     * @group 数组修改和添加
     * 数组的末尾添加一个元素，并返回新的数组。
     * 
     * @param array $array 原始数组 如:['a', 'b', 'c']
     * @param object $element 要添加的元素 如:d
     * @return array 添加元素后的数组 如:['a', 'b', 'c', 'd']
     */
    public static function addObject($array, $element)
    {
        $array[] = $element;
        return $array;
    }

    /**
     * @group 数组修改和添加
     * 合并两个数组，并将结果返回。
     *
     * 该函数将两个数组中的元素合并到一起，返回一个新的数组。
     * 如果数组中的元素是对象，它们将通过引用合并。
     *
     * @param array $array1 第一个要合并的数组。如:['a', 'b', 'c']
     * @param array $array2 第二个要合并的数组。如:['d', 'e']
     * @return array 返回合并后的数组。如:['a', 'b', 'c', 'd', 'e']
     */
    public static function addObjects(array $array1, array $array2)
    {
        return array_merge($array1, $array2);
    }


    /**
     * @group 数组修改和添加
     * 在数组中的指定位置插入一个或多个元素。
     * 
     * @param array $array 原始数组 如:['a', 'c', 'd']
     * @param object $element 要插入的元素 如:b
     * @param int $index 插入位置的索引 如:1
     * @return array 插入元素后的数组 如:['a', 'b', 'c', 'd']
     */
    public static function insertObject($array, $element, $index)
    {
        array_splice($array, $index, 0, $element);
        return $array;
    }

    /**
     * @group 数组修改和添加
     * 从数组中移除一个元素，并返回新的数组。
     * 
     * @param array $array 原始数组 如:['a', 'b', 'c']
     * @param object $elementToRemove 要移除的元素 如:b
     * @return array 移除元素后的数组 如:['a', 'c']
     */
    public static function removeObject($array, $elementToRemove)
    {
        $array = array_filter($array, function ($element) use ($elementToRemove) {
            return $element !== $elementToRemove;
        });
        return array_values($array); // 重新索引数组
    }

    /**
     * @group 数组修改和添加
     * 从数组中移除指定长度的元素段。
     *
     * 该函数通过指定的开始索引和长度来移除数组中的元素段。如果未指定长度，则默认移除从开始索引到数组末尾的所有元素。
     *
     * @param array $array 要修改的数组引用。
     * @param int $start 开始移除的索引位置（基于0的索引）。
     * @param int|null $length 要移除的元素数量。如果为null，则默认移除从start索引到数组末尾的所有元素。
     * @return void 该函数不返回任何值，而是直接修改输入的数组。
     * @throws InvalidArgumentException 如果开始索引不在有效范围内，或者长度为负数。
     */
    public static function remove($array, $start, $length = null)
    {
        // 检查开始索引是否在数组的有效范围内
        if ($start < 0 || $start >= count($array)) {
            throw new InvalidArgumentException("Start index is out of bounds.");
        }

        // 如果未指定长度，则默认删除从开始索引到数组末尾的所有元素
        if ($length === null) {
            $length = count($array) - $start;
        }

        // 检查长度是否为正数
        if ($length < 0) {
            throw new InvalidArgumentException("Length must be a non-negative integer.");
        }

        // 计算结束索引
        $end = $start + $length;

        // 使用array_splice来移除指定范围内的元素
        array_splice($array, $start, $length);
        return $array;
    }


    /**
     * @group 数组变换
     * 反转数组。
     * 
     * @param array $array 需要反转的数组 如:['a', 'b', 'c']
     * @return array 反转后的数组 如:['c', 'b', 'a']
     */
    public static function reverse($array)
    {
        return array_reverse($array);
    }

    /**
     * @group 数组变换
     * 将数组中的所有元素向前移动一个位置。
     * 
     * @param array $array 需要移动的数组 如:['a', 'b', 'c']
     * @return array 移动后的数组 如:['b', 'c', 'a']
     */
    public static function shift(&$array)
    {
        if (!empty($array)) {
            $shifted = array_shift($array);
            array_push($array, $shifted);
        }
        return $array;
    }




    /**
     * @group 类型转换
     * 克隆数组。
     * 
     * @param array $array 需要克隆的数组 如:['a', 'b', 'c']
     * @return array 克隆后的数组 如:['a', 'b', 'c']
     */
    public static function clone($array)
    {
        return unserialize(serialize($array));
    }

    /**
     * @group 类型转换
     * 返回数组的字符串表示形式。
     * 
     * @param array $array 需要转换的数组 如:['Hello', 'World']
     * @return string 数组的字符串表示 如:Hello, World
     */
    public static function toString($array)
    {
        return implode(', ', $array);
    }


    /** @group 堆栈操作
     * 将一个或多个元素添加到数组的末尾
     * @param array $array 要操作的数组 如:['b','c']
     * @param object $value 要添加的元素 如:a
     * @return int 返回数组中元素的数量 则:3
     */
    public static function push(&$array, $value)
    {
        return array_unshift($array, $value);
    }

    /**
     * @group 堆栈操作
     * 移除数组的最后一个元素（出栈）
     * @param array $array 要操作的数组 如:['a','b','c']
     * @return object 返回被移除的元素 如:c
     */
    public static function pop(&$array)
    {
        return array_pop($array);
    }
}
