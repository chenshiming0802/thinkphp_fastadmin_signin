<?php
/**
 * @author chenshiming & gpt
 * @license MIT
 * @since 2024-05-11
 */
namespace cn\sdnode\xstack\utils;

use DateTime;
use Exception;
use DatePeriod;
use DateInterval;
use InvalidArgumentException;

/**
 * 字符串Utils类
 */
class XsDatetimeUtils
{
    /**
     * @group 获取当前日期时间信息
     * 获取当前日期，格式为 YYYY-MM-DD
     *
     * @return string 当前日期 如:2024-01-01
     */
    public static function getCurrentDatestring()
    {
        return date('Y-m-d');
    }

    /**
     * @group 获取当前日期时间信息
     * 获取当前日期和时间，格式为 YYYY-MM-DD HH:MM:SS
     *
     * @return string 当前日期时间 如:2024-01-01 12:00:00
     */
    public static function getCurrentDateTimestring()
    {
        return date('Y-m-d H:i:s');
    }

    /**
     * @group 获取当前日期时间信息
     * 获取时间戳
     *
     * @return int 当前时间戳 如:1716782400
     */
    public static function getCurrenTimestamp()
    {
        $dateTime = new DateTime();
        return $dateTime->getTimestamp();
    }


    /**
     * @group 获取日期时间信息
     * 获取年份
     *
     * @param string $dateStr 日期字符串 如:2024-01-01或2024-01-01 12:34:56
     * @return int 年份 如:2024
     */
    public static function getYear($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('Y');
    }

    /**
     * @group 获取日期时间信息
     * 获取月份
     *
     * @param string $dateStr 日期字符串 如:2024-01-01或2024-01-01 12:34:56
     * @return int 月份 如:1
     */
    public static function getMonth($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('m');
    }

    /**
     * @group 获取日期时间信息
     * 获取月份中的天数
     *
     * @param string $dateStr 日期字符串 如:2024-01-01或2024-01-01 12:34:56
     * @return int 天数 如:1
     */
    public static function getMonthDay($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('d');
    }

    /**
     * @group 获取日期时间信息
     * 获取周数
     *
     * @param string $dateStr 日期字符串 如:2024-01-01或2024-01-01 12:34:56
     * @return int 周数 如:1
     */
    public static function getWeek($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('W');
    }

    /**
     * @group 获取日期时间信息
     * 获取星期（1-7，1=Monday, ..., 7=Sunday）
     *
     * @param string $dateStr 日期字符串 如:2024-01-01或2024-01-01 12:34:56
     * @return int 星期 如:1
     */
    public static function getWeekday($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('N');
    }

    /**
     * @group 获取日期时间信息
     * 获取小时
     *
     * @param string $dateStr 日期字符串 如:2024-01-01 12:34:56
     * @return int 小时 如:12
     */
    public static function getHour($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('H');
    }

    /**
     * @group 获取日期时间信息
     * 获取分钟
     *
     * @param string $dateStr 日期字符串 如:2024-01-01 12:34:56
     * @return int 分钟 如:34
     */
    public static function getMinute($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('i');
    }

    /**
     * @group 获取日期时间信息
     * 获取秒
     *
     * @param string $dateStr 日期字符串 如:2024-01-01 12:34:56
     * @return int 秒 如:56
     */
    public static function getSecond($dateStr)
    {
        $date = new DateTime($dateStr);
        return (int)$date->format('s');
    }
    /**
     * @group 获取日期时间信息
     * 获取时间戳
     *
     * @param string $dateStr 日期字符串 如:2024-05-27 12:00:00
     * @return int 时间戳 如:1716782400
     */
    public static function getTimestamp($dateStr)
    {
        $date = new DateTime($dateStr);
        return $date->getTimestamp();
    }

    /**
     * @group 字符串和日期型转换
     * 字符串转日期型
     * @param string $dateStr 日期字符串 如:2024-01-01 12:34:56
     * @param string $pattern 格式 如:yyyy-MM-dd HH:mm:ss
     * @return Date 日期型 如:new DateTime('2024-01-01 12:34:56')
     */
    public static function parseDate($dateStr, $pattern = null)
    {
        if ($pattern != null) {
            $pattern = static::_parsePattern($pattern);
            $date = DateTime::createFromFormat($pattern, $dateStr);
            if ($date && $date->format($pattern) === $dateStr) {
                return $date;
            }
            throw new Exception("The date string does not match any given pattern.");
        } else {
            $patterns = [
                'yyyy-MM-dd', //2024-01-01
                'yyyy-MM-dd HH:mm:ss', //2024-01-01 00:00:00
                'yyyy-MM-dd HH:mm', //2024-01-01 12:00
                'yyyy/MM/dd', //2024/01/01
                'yyyy/MM/dd HH:mm', //2024/01/01 00:00
                'yyyy/MM/dd HH:mm:ss', //2024/01/01 00:00:00\
            ];
            foreach ($patterns as $pattern) {
                if (strlen($dateStr) <= 10) {
                    $dateStr .= " 00:00:00";
                }
                $pattern = static::_parsePattern($pattern);
                $date = DateTime::createFromFormat($pattern, $dateStr);
                if ($date && $date->format($pattern) === $dateStr) {
                    return $date;
                }
            }
            throw new InvalidArgumentException("Invalid date format: " . $dateStr);
        }
    }

    /**
     * @group 字符串和日期型转换
     * 日期型转字符串
     * @param Date $date 日期型 如:new DateTime('2024-01-01 12:34:56')
     * @param string $pattern 格式 如:yyyy-MM-dd HH:mm:ss
     * @return string 日期字符串 如:2024-01-01 12:34:56
     */
    public static function formatDate($date, $pattern = "yyyy-MM-dd HH:mm:ss")
    {
        $pattern = static::_parsePattern($pattern);
        if ($date instanceof DateTime) {
            return $date->format($pattern);
        } else {
            throw new Exception("The provided object is not a DateTime instance.");
        }
    }


    /**
     * @group 日期计算
     * 在指定的日期上添加指定数量的天数。
     * 
     * @param string $dateStr 日期字符串 如:2024-03-01或2024-03-01 00:00:00
     * @param int $amount 要添加的天数 如：4
     * @return string 修改后的日期字符串 如：2024-03-05 00:00:00
     */
    public static function addDays($dateStr, $amount)
    {

        $date = new DateTime($dateStr);
        $date->modify("$amount days");
        return $date->format('Y-m-d H:i:s');
    }


    /**
     * @group 日期计算
     * 在指定的日期上添加指定数量的小时。
     * 
     * @param string $dateStr 日期字符串 如:2024-03-01或2024-03-01 00:00:00
     * @param int $amount 要添加的小时数
     * @return string 修改后的日期字符串
     */
    public static function addHours($dateStr, $amount)
    {
        $date = new DateTime($dateStr);

        $date->modify("$amount hours");
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * @group 日期计算
     * 在指定的日期上添加指定数量的周。
     * 
     * @param string $dateStr 日期字符串 如:2024-03-01或2024-03-01 00:00:00
     * @param int $amount 要添加的周数 如:3
     * @return string 修改后的日期字符串 如:2024-03-22 00:00:00
     */
    public static function addWeeks($dateStr, $amount)
    {
        $date = new DateTime($dateStr);

        $date->modify("$amount weeks");
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * @group 日期计算
     * 在指定的日期上添加指定数量的月份。
     * 
     * @param string $dateStr 日期字符串 如:2024-03-01或2024-03-01 00:00:00
     * @param int $amount 要添加的月份数 如:2
     * @return string 修改后的日期字符串 如:2024-05-01 00:00:00
     */
    public static function addMonths($dateStr, $amount)
    {
        $date = new DateTime($dateStr);

        $date->modify("$amount months");
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * @group 日期计算
     * 在指定的日期上添加指定数量的年。
     * 
     * @param string $dateStr 日期字符串 如:2024-03-01或2024-03-01 00:00:00
     * @param int $amount 要添加的年数 如:1
     * @return string 修改后的日期字符串 如:2025-03-01 00:00:00
     */
    public static function addYears($dateStr, $amount)
    {
        $date = new DateTime($dateStr);

        $date->modify("$amount years");
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * @group 日期计算
     * 日期相减，获得年数差异
     *
     * @param string $beginDateStr 开始日期字符串 如:2019-12-31
     * @param string $endDateStr 结束日期字符串 如:2021-12-31
     * @return int 年数差异 如:2
     */
    public static function subDatetimeYears($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        $interval = $beginDate->diff($endDate);
        return abs($interval->y);
    }

    /**
     * @group 日期计算
     * 日期相减，获得月份差异
     *
     * @param string $beginDateStr 开始日期字符串 如:2020-01-01
     * @param string $endDateStr 结束日期字符串 如:2021-01-01
     * @return int 月份差异 如:12
     */
    public static function subDatetimeMonths($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        $interval = $beginDate->diff($endDate);
        return abs($interval->y) * 12 + abs($interval->m);
    }

    /**
     * @group 日期计算
     * 日期相减，获得天数差异
     *
     * @param string $beginDateStr 开始日期字符串 如:2020-01-01
     * @param string $endDateStr 结束日期字符串 如:2021-01-01
     * @return int 天数差异 如:366
     */
    public static function subDatetimeDays($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        $interval = $beginDate->diff($endDate);
        return abs($interval->days);
    }

    /**
     * @group 日期计算
     * 日期相减，获得小时数差异
     *
     * @param string $beginDateStr 开始日期字符串 如:2020-05-31 00:00:00
     * @param string $endDateStr 结束日期字符串 如:2020-06-01 00:00:00
     * @return int 小时数差异 如:24
     */
    public static function subDatetimeHours($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        $interval = $beginDate->diff($endDate);
        return abs($interval->days * 24 + $interval->h);
    }

    /**
     * @group 日期计算
     * 日期相减，获得分钟数差异
     *
     * @param string $beginDateStr 开始日期字符串 如:2020-06-01 00:00:00
     * @param string $endDateStr 结束日期字符串 如:2020-06-01 01:00:00
     * @return int 分钟数差异 如:60
     */
    public static function subDatetimeMinutes($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        $interval = $beginDate->diff($endDate);
        return abs($interval->days * 24 * 60 + $interval->h * 60 + $interval->i);
    }

    /**
     * @group 日期计算
     * 日期相减，获得秒数差异
     *
     * @param string $beginDateStr 开始日期字符串 如:2020-06-01 00:00:00
     * @param string $endDateStr 结束日期字符串 如:2020-06-01 00:01:00
     * @return int 秒数差异 如:60
     */
    public static function subDatetimeSeconds($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        $interval = $beginDate->diff($endDate);
        $diff = $interval->days * 24 * 60 * 60 + $interval->h * 60 * 60 + $interval->i * 60 + $interval->s;

        return $diff;
    }


    /**
     * @group 日期处理
     * 截断日期时间到小时。
     *
     * @param string $dateStr 日期时间字符串 如:2020-01-01 13:45:30
     * @return string 截断后的日期时间字符串 如:2020-01-01 13:00:00
     */
    public static function truncateHour($dateStr)
    {
        $date = new DateTime($dateStr);
        $date->setTime($date->format('H'), 0, 0);
        return $date->format('Y-m-d H:i:s');
    }

    /**
     * @group 日期时间处理
     * 截断日期时间到分钟。
     *
     * @param string $dateStr 日期时间字符串 如:2020-01-01 13:45:30
     * @return string 截断后的日期时间字符串 如:2020-01-01 13:45:00
     */
    public static function truncateMinute($dateStr, $field = 'minute')
    {
        $date = new DateTime($dateStr);
        $date->setTime($date->format('H'), $date->format('i'), 0);

        return $date->format('Y-m-d H:i:s');
    }

    /**
     * @group 获取日期相关数组
     * 获取两个日期之间的所有日期，比如获取2024-01-01和2024-01-03中间的所有日期，['2024-01-01', '2024-01-02', '2024-01-03']
     *
     * @param string $beginDateStr 开始日期字符串 如:2024-01-01
     * @param string $endDateStr 结束日期字符串 如:2024-01-03
     * @return array 返回两个日期之间的所有日期数组 如:['2024-01-01', '2024-01-02', '2024-01-03']
     */
    public static function getIntervalDates($beginDateStr, $endDateStr)
    {
        $beginDate = new DateTime($beginDateStr);
        $endDate = new DateTime($endDateStr);

        // 计算日期间隔
        $interval = DateInterval::createFromDateString('1 day'); // 创建一个表示1天的间隔
        $endDate2 = $endDate->modify("1 days");;
        $period = new DatePeriod($beginDate, $interval, $endDate2); // 创建一个日期周期

        $dateArray = [];
        foreach ($period as $date) {
            // 格式化日期并添加到数组中
            $dateArray[] = $date->format('Y-m-d');
        }

        return $dateArray;
    }

    /**
     *  @group 获取日期相关数组
     * 根据分隔天数获取日期范围,比如获取2024-01-05前2天和后1天的所有日期，['2024-01-05', '2024-01-04', '2024-01-03', '2024-01-06']
     *
     * @param string $dateStr 中心日期字符串 如:2024-01-05
     * @param int $beginDateSep 中心日期之前扩展的天数 如:2
     * @param int $endDateSep 中心日期之后扩展的天数 如:1
     * @return array 返回中心日期及其扩展天数的日期数组 如:['2024-01-05', '2024-01-04', '2024-01-03', '2024-01-06']
     */
    public static function getDatesFromSepdate($dateStr, $beginDateSep, $endDateSep)
    {
        $centerDate = new DateTime($dateStr);
        $dates = [$dateStr];

        // 向前扩展天数
        for ($i = 1; $i <= $beginDateSep; $i++) {
            $date = clone $centerDate;
            $date->modify("-$i day");
            $dates[] = $date->format('Y-m-d');
        }

        // 向后扩展天数
        for ($i = 1; $i <= $endDateSep; $i++) {
            $date = clone $centerDate;
            $date->modify("+$i day");
            $dates[] = $date->format('Y-m-d');
        }

        return $dates;
    }

    /**
     * 将PHP的date格式改为Java SimpleDateFormat的格式
     *
     * @param string $javaPattern 如:y-m-d
     * @return string 如:yyyy-MM-dd
     */
    private static function _parsePattern($javaPattern)
    {
        // yyyy-MM-dd HH:mm:ss -> Y-m-d H:i:s
        $patterns = [
            'yyyy' => 'Y', 'yy' => 'y', 'MMMM' => 'F', 'MMM' => 'M',
            'MM' => 'm', 'M' => 'n', 'dd' => 'd', 'd' => 'j',
            'HH' => 'H', 'H' => 'G', 'hh' => 'h', 'h' => 'g',
            'mm' => 'i', 'ss' => 's', 'a' => 'A', 'EEE' => 'D',
            'z' => 'O'
        ];
        // 替换模式
        $phpPattern = strtr($javaPattern, $patterns);
        return $phpPattern;
    }
}
