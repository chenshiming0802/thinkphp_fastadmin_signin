## 如何使用
### compose安装
* 安装依赖
```
composer config -g repo.packagist composer https://packagist.org
composer init
composer require sdnode/xstack-for-php
```
* 调用示例
```php
use cn\sdnode\xstack\utils\XsStringUtils;
require_once "./vendor/autoload.php";
echo XsStringUtils::lowerCase('Hello World');
```


## TestCase
```
composer dump-autoload
phpunit


生成文档
composer require phpoffice/phpword
```

## 其他命令


## prompts 
### 生成常用方法和代码
Apache Commons Lang 的Http中有哪些常用的方法,并用php实现,编写phpunit测试方法
请上面的方法分组

### 生成类
请用php编写XsHttpUtils类和所有方法的实现,其中有静态方法:get,post,setCookie,getCookie

### 生成具体方法格式
请用php实现这些方法,格式如下:
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

### 生成文档
[命令]请用markdown格式，严格参照如下文档格式编写文档，几个注意点：
1. @group信息为代码中的@group后的文字信息
2. 参数需要显示类型, 参数名不显示$
如果你明白就回答：请提供代码，用户提供代码后，就根据提供的代码编写文档

```
## [@group信息]
### getYear<BR>
获取年份
- 参数: String dateStr 日期字符串
- 返回: int 年份

```
 