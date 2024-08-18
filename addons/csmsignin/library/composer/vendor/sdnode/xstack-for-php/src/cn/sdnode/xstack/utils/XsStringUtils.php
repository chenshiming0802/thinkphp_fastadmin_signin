<?php

/**
 * @author chenshiming & gpt
 * @license MIT
 * @since 2024-05-11
 */

namespace cn\sdnode\xstack\utils;

/**
 * 字符串Utils类
 */
class XsStringUtils
{
    /**
     * @group 字符串截取数组类
     * 使用指定的字符作为分隔符来分割字符串。
     * @param string $str 需要分割的字符串 如:foo,bar,baz
     * @param string $separator 分隔符 如:,
     * @return array 分割后的字符串数组 如:['foo', 'bar', 'baz']
     */
    public static function split($str, $separator)
    {
        if ($str === null) {
            return [];
        }
        if ($str === '') {
            return [''];
        }
        // 检查分隔符是否为空字符串，如果是，则直接返回原始字符串作为数组中的一个元素
        if ($separator === '') {
            return [$str];
        }
        // 使用PHP内置函数explode进行字符串分割
        // 如果$str为null，则explode会返回空数组
        return explode($separator, $str);
    }

    /**
     * @group 字符串截取数组类
     * 用字符串连接数组元素。
     * @param array $arr 需要连接的字符串数组 如:['foo', 'bar', 'baz']
     * @param string $separator 连接符 如:,
     * @return string 连接后的字符串 如:foo,bar,baz
     */
    public static function join($arr, $separator)
    {
        // 确保输入的$arr是一个数组
        if (!is_array($arr)) {
            return null;
        }
        // 使用PHP内置函数implode进行数组连接
        return implode($separator, $arr);
    }


    /**
     * @字符串处理
     * 删除字符串中的所有空白字符。
     *
     * @param string $str 要处理的字符串。如:Hello World!
     * @return string 没有空白字符的字符串。如:HelloWorld!
     */
    public static function deleteWhitespace($str)
    {
        return preg_replace('/\s+/', '', $str);
    }

    /**
     * @字符串处理
     * 将字符串重复指定的次数。
     *
     * @param string $str 要重复的字符串。如:Hello World!
     * @param int $count 重复的次数。如:3
     * @return string 重复后的字符串。如:Hello World!Hello World!Hello World!
     */
    public static function repeat($str, $count)
    {
        return str_repeat($str, $count);
    }

    /**
     * @字符串处理
     * 反转字符串。
     *
     * @param string $str 要反转的字符串。如:Hello World!
     * @return string 反转后的字符串。如:!dlroW olleH
     */
    public static function reverse($str)
    {
        return strrev($str);
    }

    /**
     * @字符串处理
     * 交换字符串中的大小写。
     *
     * @param string $str 要交换大小写的字符串。如:Hello World!
     * @return string 大小写交换后的字符串。如:hELLO wORLD!
     */
    public static function swapCase($str)
    {
        return preg_replace_callback('/./u', function ($match) {
            return ctype_lower($match[0]) ? strtoupper($match[0]) : strtolower($match[0]);
        }, $str);
    }


    /**
     * @group 大小写转换类
     * 将输入的字符串转换为小写形式。
     * @param string $str 需要转换为小写的字符串 如:Hello World
     * @return string 转换后的小写字符串 如:hello world
     */
    public static function lowerCase($str)
    {
        // 使用PHP内置函数strtolower将字符串转换为小写
        return strtolower($str);
    }

    /**
     * @group 大小写转换类
     * 将输入的字符串转换为大写形式。
     * @param string $str 需要转换为大写的字符串 如:Hello World
     * @return string 转换后的大写字符串 如:HELLO WORLD
     */
    public static function upperCase($str)
    {
        // 使用PHP内置函数strtoupper将字符串转换为大写
        return strtoupper($str);
    }

    /**
     * @group 大小写转换类
     * 将字符串的第一个字符转换为大写（如果它是字母），其余字符转换为小写。
     * @param string $str 需要进行首字母大写转换的字符串 如:hello world
     * @return string 转换后的字符串 如:Hello world
     */
    public static function capitalize($str)
    {
        // 使用PHP内置函数ucfirst将字符串的第一个字符转换为大写，其余转换为小写
        return ucfirst($str);
    }

    /**
     * @group 大小写转换类
     * 将字符串的第一个字符转换为小写（如果它是字母），其余字符保持不变。
     * @param string $str 需要进行首字母小写转换的字符串 如:Hello World
     * @return string 转换后的字符串 则:hello world
     */
    public static function uncapitalize($str)
    {
        // 先将字符串转换为小写，然后使用ucfirst将第一个字符转换为大写
        return lcfirst(strtolower($str));
    }

    /**
     * @group 字符串截取类
     * 从指定的起始索引开始到结束索引之前的字符串。
     * 如果结束索引大于字符串长度，截取从起始索引到字符串末尾的子串。
     * @param string $str 需要截取的字符串 如:foobarbaz
     * @param int $start 起始索引（从0开始计数） 如:3
     * @param int $end 结束索引（不包含在截取范围内）如:2
     * @return string 截取后的字符串 如:ba
     */
    public static function substring($str, $start, $end = null)
    {
        if ($end == null) {
            $end = strlen($str);
        }

        // 检查参数是否有效，并且对结束索引进行限制，避免负数索引的情况
        $start = max(0, $start);
        $end = max($start, $end);

        // 使用substr函数截取字符串
        return substr($str, $start, $end - $start);
    }

    /**
     * @group 字符串截取类
     * 截取字符串右侧的 len 个字符。如果 len 大于字符串长度，则返回原字符串。
     * @param string $str 需要截取的字符串 如:foobarbaz
     * @param int $len 需要截取的字符数量 如:3
     * @return string 截取后的字符串 如:baz
     */
    public static function right($str, $len)
    {
        // 计算需要截取的长度
        $lengthToSubtract = min(strlen($str), $len);
        return substr($str, -$lengthToSubtract);
    }

    /**
     * @group 查找和替换类
     * 替换字符串中的所有匹配项。
     * 
     * @param string $str 需要被搜索和替换的原始字符串。如:Hello World, World!
     * @param string $searchStr 需要在 $str 中查找并替换的子字符串。 如:World
     * @param string $replacement 用于替换 $searchStr 的新子字符串。 如:Moon
     * @return string 替换后的字符串。 如:Hello Moon, Moon!
     */
    public static function replace($str, $searchStr, $replacement)
    {
        return str_replace($searchStr, $replacement, $str);
    }

    /**
     * @group 查找和替换类
     * 替换字符串中第一次出现的匹配项。
     * 
     * @param string $str 需要被搜索和替换的原始字符串。如:Hello World, World!
     * @param string $searchStr 需要在 $str 中查找并替换的子字符串。如:World
     * @param string $replacement 用于替换 $searchStr 的新子字符串。如:Moon
     * @return string 替换后的字符串。如:Hello Moon, World!
     */
    public static function replaceOnce($str, $searchStr, $replacement)
    {
        $pos = strpos($str, $searchStr); // 查找 $searchStr 的第一次出现位置
        if ($pos === false) {
            return $str; // 如果找不到，返回原始字符串
        }
        return substr_replace($str, $replacement, $pos, strlen($searchStr)); // 替换第一次出现的字符串
    }

    /**
     * @group 查找和替换类
     * 检查字符串是否包含指定的子字符串。
     * 
     * @param string $str 需要被检查的原始字符串。如:Hello World
     * @param string $searchStr 需要检查是否存在的子字符串。如:World
     * @return bool 如果 $str 包含 $searchStr，返回 true；否则返回 false。如:true
     */
    public static function contains($str, $searchStr)
    {
        return strpos($str, $searchStr) !== false; // 使用 strpos 查找子字符串，如果存在则返回 true
    }

    /**
     * @group 查找和替换类
     * 检查字符串是否不区分大小写地包含指定的子字符串。
     * 
     * @param string $str 需要被检查的原始字符串。如:Hello World
     * @param string $searchStr 需要检查是否存在的子字符串。如:hello
     * @return bool 如果 $str 包含 $searchStr（不区分大小写），返回 true；否则返回 false。如:true
     */
    public static function containsIgnoreCase($str, $searchStr)
    {
        return stripos($str, $searchStr) !== false; // 使用 stripos 查找子字符串，忽略大小写，如果存在则返回 true
    }

    /**
     *  @group 查找和替换类
     * 计算字符串中匹配指定字符的次数。
     *
     * @param string $str 要搜索的字符串。如:Hello World!
     * @param string $char 要匹配的字符。如:o
     * @return int 匹配字符出现的次数。如:2
     */
    public static function countMatches($str, $char)
    {
        return substr_count($str, $char);
    }

    /**
     *  @group 查找和替换类
     * 查找字符串中子字符串首次出现的索引位置。
     * 
     * @param string $str 要搜索的字符串。如:hello
     * @param string $search 要查找的子字符串。如:1
     * @return int 返回子字符串在字符串中首次出现的索引，如果未找到则返回-1。如:2
     */
    public static function indexOf($str, $search)
    {
        // 检查主字符串是否非空
        $sr = static::isNotEmpty($str) ? strpos($str, $search) : -1;
        return $sr === false ? -1 : $sr;
    }

    /**
     *  @group 查找和替换类
     * 查找字符串中子字符串最后一次出现的索引位置。
     * 
     * @param string $str 要搜索的字符串。如:hello
     * @param string $search 要查找的子字符串。如:o
     * @return int 返回子字符串在字符串中最后一次出现的索引，如果未找到则返回-1。如:4
     */
    public static function lastIndexOf($str, $search)
    {
        // 检查主字符串是否非空
        $sr = static::isNotEmpty($str) ? strrpos($str, $search) : -1;
        return $sr === false ? -1 : $sr;
    }

    /**
     *  @group 查找和替换类
     * 检查字符串是否以指定的前缀开始。
     * 
     * @param string $str 要检查的字符串。如:hello
     * @param string $prefix 要检查的前缀字符串。如:he
     * @return bool 如果字符串以指定前缀开始返回true，否则返回false。如:true
     */
    public static function startsWith($str, $prefix)
    {
        // 检查主字符串是否非空，并使用strpos检查是否以指定前缀开始
        return static::isNotEmpty($str) && strpos($str, $prefix) === 0;
    }

    /**
     *  @group 查找和替换类
     * 检查字符串是否以指定的后缀结束。
     * 
     * @param string $str 要检查的字符串。如:hello
     * @param string $suffix 要检查的后缀字符串。如:lo
     * @return bool 如果字符串以指定后缀结束返回true，否则返回false。如:true
     */
    public static function endsWith($str, $suffix)
    {
        // 获取主字符串和后缀字符串的长度
        $strLen = static::length($str);
        $suffixLen = static::length($suffix);

        // 检查主字符串是否至少和后缀字符串一样长，并且主字符串从某个点开始与后缀字符串完全相同
        return $strLen >= $suffixLen && substr($str, $strLen - $suffixLen) === $suffix;
    }

    /**
     * @group 检查是否为空
     * 检查字符串是否为空，包括 null、长度为 0 或只包含空白字符。
     * @param string $cs 需要检查的字符串
     * @return bool 是否为空
     */
    public static function isEmpty($cs)
    {
        // 检查字符串是否为 null，长度为 0，或者只包含空白字符
        return empty($cs) || trim($cs) === '';
    }

    /**
     * @group 检查是否不为空
     * 检查字符串是否为空，包括 null、长度为 0 或只包含空白字符。
     * @param string $cs 需要检查的字符串
     * @return bool 是否为空
     */
    public static function isNotEmpty($str)
    {
        return !static::isEmpty($str);
    }

    /**
     * @group 检查是否为空
     * 检查字符串是否为空，包括 长度为 0 或只包含空白字符。
     * @param string $cs 需要检查的字符串
     * @return bool 是否为空
     */
    public static function isBlank($cs)
    {
        return $cs !== null && trim($cs) === '';
    }

    /**
     * @group 检查是否不为空
     * 检查字符串是否为空，包括长度为 0 或只包含空白字符。
     * @param string $cs 需要检查的字符串
     * @return bool 是否为空
     */
    public static function isNotBlank($str)
    {
        return !static::isBlank($str);
    }

    /**
     * @计算长度
     * 字符串长度
     *
     * @param string $str 如:hello
     * @return int 如:5
     */
    public static function length($str)
    {
        return $str === null ? 0 : strlen($str);
    }

    /**
     *  @计算长度
     * 算字符串中的所有字符，包括中文和英文字符。
     * 
     * @param string $str 需要计算字符长度的字符串。如:你好世界hello
     * @return int 返回字符串中的字符总数。如:9
     */
    public static function countChineseCharacters($str)
    {
        // 确保字符串编码为 UTF-8，以确保mb_strlen能正确计数
        $str = mb_convert_encoding($str, 'UTF-8', 'UTF-8');

        // 使用mb_strlen()获取字符串中的字符数，这里计算的是字符数不是字节数
        $chineseCharCount = mb_strlen($str, 'UTF-8');

        return $chineseCharCount;
    }
}
