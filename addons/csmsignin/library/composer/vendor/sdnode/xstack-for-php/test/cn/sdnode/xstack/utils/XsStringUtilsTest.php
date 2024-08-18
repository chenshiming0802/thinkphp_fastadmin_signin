<?php
namespace cn\sdnode\xstack\utils;
use PHPUnit\Framework\TestCase;
use cn\sdnode\xstack\utils\XsStringUtils;

class XsStringUtilsTest extends TestCase
{
    public function testSplit()
    {
        $this->assertEquals(['foo', 'bar', 'baz'], XsStringUtils::split('foo,bar,baz', ','));
        $this->assertEquals([''], XsStringUtils::split('', ','));
        $this->assertEquals([], XsStringUtils::split(null, ','));
    }

    public function testJoin()
    {
        $this->assertEquals('foo,bar,baz', XsStringUtils::join(['foo', 'bar', 'baz'], ','));
        $this->assertEquals('', XsStringUtils::join([], ','));
        $this->assertFalse(XsStringUtils::join(null, ','));
    }

    public function testLowerCase()
    {
        $this->assertEquals('hello world', XsStringUtils::lowerCase('Hello World'));
        $this->assertEquals('', XsStringUtils::lowerCase(''));
    }

    public function testUpperCase()
    {
        $this->assertEquals('HELLO WORLD', XsStringUtils::upperCase('hello world'));
        $this->assertEquals('', XsStringUtils::upperCase(''));
    }

    public function testCapitalize()
    {
        $this->assertEquals('Hello world', XsStringUtils::capitalize('hello world'));
        $this->assertEquals('', XsStringUtils::capitalize(''));
    }

    public function testUncapitalize()
    {
        $this->assertEquals('hello world', XsStringUtils::uncapitalize('Hello World'));
        $this->assertEquals('', XsStringUtils::uncapitalize(''));
    }

    public function testSubstring()
    {
        $this->assertEquals('barbaz', XsStringUtils::substring('foobarbaz', 3));
        $this->assertEquals('foobarbaz', XsStringUtils::substring('foobarbaz', 0, 10));
        $this->assertEquals('', XsStringUtils::substring('foobarbaz', 10));
    }

    public function testRight()
    {
        $this->assertEquals('baz', XsStringUtils::right('foobarbaz', 3));
        $this->assertEquals('foobarbaz', XsStringUtils::right('foobarbaz', 20));
    }




    public function testReplace()
    {
        $this->assertEquals(
            "Hello Moon, Moon!",
            XsStringUtils::replace("Hello World, World!", "World", "Moon")
        );
    }

    public function testReplaceOnce()
    {
        $this->assertEquals(
            "Hello Moon, World!",
            XsStringUtils::replaceOnce("Hello World, World!", "World", "Moon")
        );
        $this->assertEquals(
            "Hello World, World!",
            XsStringUtils::replaceOnce("Hello World, World!", "Moon", "Universe")
        );
    }

    public function testContains()
    {
        $this->assertTrue(
            XsStringUtils::contains("Hello World", "World")
        );
        $this->assertFalse(
            XsStringUtils::contains("Hello World", "Universe")
        );
    }

    public function testContainsIgnoreCase()
    {
        $this->assertTrue(
            XsStringUtils::containsIgnoreCase("Hello World", "hello")
        );
        $this->assertFalse(
            XsStringUtils::containsIgnoreCase("Hello World", "Universe")
        );
    }

    public function testIsEmpty()
    {
        $this->assertTrue(XsStringUtils::isEmpty(null));
        $this->assertTrue(XsStringUtils::isEmpty(''));
        $this->assertTrue(XsStringUtils::isEmpty('   '));
        $this->assertFalse(XsStringUtils::isEmpty('Hello'));
    }

    public function testIsBlank()
    {
        $this->assertFalse(XsStringUtils::isBlank(null));
        $this->assertTrue(XsStringUtils::isBlank(''));
        $this->assertTrue(XsStringUtils::isBlank('   '));
        $this->assertFalse(XsStringUtils::isBlank('Hello'));
    }

    public function testLengthWithNull()
    {
        $this->assertSame(0, XsStringUtils::length(null));
    }

    public function testLengthWithNonNull()
    {
        $this->assertSame(5, XsStringUtils::length("hello"));
    }

    public function testCountChineseCharacters()
    {
        $this->assertSame(4, XsStringUtils::countChineseCharacters("你好世界"));
        $this->assertSame(9, XsStringUtils::countChineseCharacters("你好世界hello"));
    }

    public function testIndexOf()
    {
        $this->assertSame(0, XsStringUtils::indexOf("hello", "h"));
        $this->assertSame(2, XsStringUtils::indexOf("hello", "l"));
        $this->assertSame(-1, XsStringUtils::indexOf("hello", "x"));
    }

    public function testIndexOfWithFromIndex()
    {
        $this->assertSame(2, XsStringUtils::indexOf("hello", "l", 1));
        $this->assertSame(-1, XsStringUtils::indexOf("hello", "x", 1));
    }

    public function testLastIndexOf()
    {
        $this->assertSame(4, XsStringUtils::lastIndexOf("hello", "o"));
        $this->assertSame(-1, XsStringUtils::lastIndexOf("hello", "x"));
    }

    public function testStartsWith()
    {
        $this->assertTrue(XsStringUtils::startsWith("hello", "he"));
        $this->assertFalse(XsStringUtils::startsWith("hello", "x"));
    }

    public function testEndsWith()
    {
        $this->assertTrue(XsStringUtils::endsWith("hello", "lo"));
        $this->assertFalse(XsStringUtils::endsWith("hello", "he"));
    }


    public function testDeleteWhitespace()
    {
        $this->assertEquals("HelloWorld!", XsStringUtils::deleteWhitespace("Hello World!"));
        $this->assertEquals("", XsStringUtils::deleteWhitespace("   "));
    }

    public function testRepeat()
    {
        $this->assertEquals("Hello World!Hello World!Hello World!", XsStringUtils::repeat("Hello World!", 3));
        $this->assertEquals("", XsStringUtils::repeat("test", 0));
    }

    public function testReverse()
    {
        $this->assertEquals("!dlroW olleH", XsStringUtils::reverse("Hello World!"));
        $this->assertEquals("", XsStringUtils::reverse(""));
    }

    public function testSwapCase()
    {
        $this->assertEquals("hELLO wORLD!", XsStringUtils::swapCase("Hello World!"));
    }

    public function testCountMatches()
    {
        $this->assertEquals(2, XsStringUtils::countMatches("Hello World!", "o"));
        $this->assertEquals(0, XsStringUtils::countMatches("Hello World!", "z"));
    }
}
