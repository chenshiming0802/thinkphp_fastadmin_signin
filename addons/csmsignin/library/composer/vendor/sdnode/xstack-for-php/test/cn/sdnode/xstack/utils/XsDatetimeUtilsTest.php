<?php
namespace cn\sdnode\xstack\utils;
use DateTime;
use PHPUnit\Framework\TestCase;
use cn\sdnode\xstack\utils\XsDatetimeUtils;

class XsDatetimeUtilsTest extends TestCase
{

    public function testGetYear()
    {
        $this->assertEquals(2024, XsDatetimeUtils::getYear('2024-01-01 12:34:56'));
    }

    public function testGetMonth()
    {
        $this->assertEquals(1, XsDatetimeUtils::getMonth('2024-01-01 12:34:56'));
    }

    public function testGetMonthDay()
    {
        $this->assertEquals(1, XsDatetimeUtils::getMonthDay('2024-01-01 12:34:56'));
    }

    public function testGetWeek()
    {
        $this->assertEquals(1, XsDatetimeUtils::getWeek('2024-01-01 12:34:56'));
    }

    public function testGetWeekday()
    {
        $this->assertEquals(1, XsDatetimeUtils::getWeekday('2024-01-01 12:34:56'));
    }

    public function testGetHour()
    {
        $this->assertEquals(12, XsDatetimeUtils::getHour('2024-01-01 12:34:56'));
    }

    public function testGetMinute()
    {
        $this->assertEquals(34, XsDatetimeUtils::getMinute('2024-01-01 12:34:56'));
    }

    public function testGetSecond()
    {
        $this->assertEquals(56, XsDatetimeUtils::getSecond('2024-01-01 12:34:56'));
    }
    public function testGetTimestamp()
    {
        $this->assertEquals(1716811200, XsDatetimeUtils::getTimestamp('2024-05-27 12:00:00'));
    }



    public function testParseDate()
    {
        $this->assertEquals(new DateTime('2024-01-01 00:00:00'), XsDatetimeUtils::parseDate('2024-01-01'));
        $this->assertEquals(new DateTime('2024-01-01 12:34'), XsDatetimeUtils::parseDate('2024-01-01 12:34'));
        $this->assertEquals(new DateTime('2024-01-01 12:34:56'), XsDatetimeUtils::parseDate('2024-01-01 12:34:56'));
        $this->assertEquals(new DateTime('2024-01-01 00:00:00'), XsDatetimeUtils::parseDate('2024/01/01'));
        $this->assertEquals(new DateTime('2024-01-01 00:00'), XsDatetimeUtils::parseDate('2024/01/01 00:00'));
        $this->assertEquals(new DateTime('2024-01-01 00:00:00'), XsDatetimeUtils::parseDate('2024/01/01 00:00:00'));

        $this->assertEquals(new DateTime('2024-01-01 12:34:56'), XsDatetimeUtils::parseDate('2024-01-01 12:34:56', 'yyyy-MM-dd HH:mm:ss'));
        $this->assertEquals(new DateTime('2024-01-01 00:00:00'), XsDatetimeUtils::parseDate('2024/01/01 00:00:00', 'yyyy/MM/dd HH:mm:ss'));
    }

    public function testAddDays()
    {
        $this->assertEquals(
            '2024-03-05 00:00:00',
            XsDatetimeUtils::addDays('2024-03-01', 4)
        );
        $this->assertEquals(
            '2024-03-05 00:00:00',
            XsDatetimeUtils::addDays('2024-03-01 00:00:00', 4)
        );
    }

    public function testAddHours()
    {
        $this->assertEquals(
            '2024-03-01 05:00:00',
            XsDatetimeUtils::addHours('2024-03-01 00:00:00', 5)
        );
    }

    public function testAddWeeks()
    {
        $this->assertEquals(
            '2024-03-22 00:00:00',
            XsDatetimeUtils::addWeeks('2024-03-01', 3)
        );
    }

    public function testAddMonths()
    {
        $this->assertEquals(
            '2024-05-01 00:00:00',
            XsDatetimeUtils::addMonths('2024-03-01', 2)
        );
    }

    public function testAddYears()
    {
        $this->assertEquals(
            '2025-03-01 00:00:00',
            XsDatetimeUtils::addYears('2024-03-01', 1)
        );
    }


    public function testSubDatetimeYears()
    {
        $this->assertSame(2, XsDatetimeUtils::subDatetimeYears('2019-12-31', '2021-12-31'));
        $this->assertSame(0, XsDatetimeUtils::subDatetimeYears('2020-01-01', '2020-12-31'));
    }

    public function testSubDatetimeMonths()
    {
        $this->assertSame(12, XsDatetimeUtils::subDatetimeMonths('2020-01-01', '2021-01-01'));
        $this->assertSame(0, XsDatetimeUtils::subDatetimeMonths('2020-05-15', '2020-05-31'));
    }

    public function testSubDatetimeDays()
    {
        $this->assertSame(366, XsDatetimeUtils::subDatetimeDays('2020-01-01', '2021-01-01'));
        $this->assertSame(30, XsDatetimeUtils::subDatetimeDays('2020-05-01', '2020-05-31'));
    }

    public function testSubDatetimeHours()
    {
        $this->assertSame(24, XsDatetimeUtils::subDatetimeHours('2020-05-31 00:00:00', '2020-06-01 00:00:00'));
        $this->assertSame(0, XsDatetimeUtils::subDatetimeHours('2020-06-01 23:00:00', '2020-06-01 23:59:59'));
    }

    public function testSubDatetimeMinutes()
    {
        $this->assertSame(60, XsDatetimeUtils::subDatetimeMinutes('2020-06-01 00:00:00', '2020-06-01 01:00:00'));
        $this->assertSame(1, XsDatetimeUtils::subDatetimeMinutes('2020-06-01 00:59:00', '2020-06-01 01:00:00'));
    }

    public function testSubDatetimeSeconds()
    {
        $this->assertSame(60, XsDatetimeUtils::subDatetimeSeconds('2020-06-01 00:00:00', '2020-06-01 00:01:00'));
        $this->assertSame(1, XsDatetimeUtils::subDatetimeSeconds('2020-06-01 00:00:59', '2020-06-01 00:01:00'));
    }

    public function testTruncateHour()
    {
        $this->assertSame('2020-01-01 13:00:00', XsDatetimeUtils::truncateHour('2020-01-01 13:45:30'));
        $this->assertSame('2020-01-01 00:00:00', XsDatetimeUtils::truncateHour('2020-01-01 00:01:01'));
        $this->assertSame('2020-01-01 23:00:00', XsDatetimeUtils::truncateHour('2020-01-01 23:59:59'));
    }

    public function testTruncateMinutes()
    {
        $this->assertSame('2020-01-01 13:45:00', XsDatetimeUtils::truncateMinute('2020-01-01 13:45:30'));
        $this->assertSame('2020-01-01 00:00:00', XsDatetimeUtils::truncateMinute('2020-01-01 00:00:01'));
        $this->assertSame('2020-01-01 23:59:00', XsDatetimeUtils::truncateMinute('2020-01-01 23:59:59'));
    }

    public function testGetIntervalDate()
    {
        // 基本测试
        $this->assertSame(['2024-01-01', '2024-01-02', '2024-01-03'], XsDatetimeUtils::getIntervalDates('2024-01-01', '2024-01-03'));
        // 测试包含闰年2月的日期
        $this->assertSame(['2024-02-28', '2024-02-29', '2024-03-01'], XsDatetimeUtils::getIntervalDates('2024-02-28', '2024-03-01'));
        // 测试结束日期等于开始日期
        $this->assertSame(['2024-01-01'], XsDatetimeUtils::getIntervalDates('2024-01-01', '2024-01-01'));
        // 测试开始日期晚于结束日期的情况（期望返回空数组）
        $this->assertSame([], XsDatetimeUtils::getIntervalDates('2024-01-03', '2024-01-01'));
    }

    public function testGetDatesFromSepdate()
    {
        // 测试基本功能
        $this->assertSame(['2024-01-05', '2024-01-04', '2024-01-03', '2024-01-06'], XsDatetimeUtils::getDatesFromSepdate('2024-01-05', 2, 1));
        // 测试没有扩展天数的情况
        $this->assertSame(['2024-01-05'], XsDatetimeUtils::getDatesFromSepdate('2024-01-05', 0, 0));
    }
}
