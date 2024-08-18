<?php
// +----------------------------------------------------------------------
// Csmmeet [ CSM系列公共源码 ]
// Author: chensm <chenshiming0802@163.com>
// Create by chensm at 2020-02-28
// +----------------------------------------------------------------------
namespace addons\csmsignin\library;

use app\common\controller\Frontend;
use think\Exception;

/**
 * 前台控制器基类
 */
class CsmFrontend extends Frontend
{

    public function tracedao($dao)
    {
        echo $dao->getLastSql();
        die();
    }

    /**
     * 断言是否为空
     */
    public function assertNotNull($obj, $msg)
    {
        if ($obj == null) {
            $this->error($msg);
        }
    }

    /**
     * 封装了从header获取token，完成登录，如果没有登录则报错
     */
    public function csmassertlogin()
    {
        $token = $this->request->header("csmlogintoken");
        $ff = $this->auth->init($token);
        if ($ff === false) {
            $this->error('请重新登录！', 'pages/csmmeet/login', true);
        }
    }

    /**
     * request封装了必填项校验
     *
     * @throws Exception
     * @return string
     */
    public function csmreq($paramname, $isRequired)
    {
        $paramvalue = $this->request->request($paramname);
        if ($paramvalue == "" || trim($paramvalue) == "") {
            $this->error("缺少参数 : " . $paramname);
        }
        return trim($paramvalue);
    }

    /**
     * 返回json处理，封装了默认code和msn字段
     */
    public function csmjson($result)
    {
        $result2 = [
            "code" => "1",
            "msg" => "",
            "data" => $result
        ];
        $json = json($result2);
        return $json;
    }

    public function csmerrorjson($result, $msg = "")
    {
        $result2 = [
            "code" => "0",
            "msg" => $msg,
            "data" => $result
        ];
        $json = json($result2);
        return $json;
    }

    public function csmGetDbRowByReqest($dao, $reqkey)
    {
        $id = $this->csmreq($reqkey, true);
        $sr = $this->csmGetDbRowById($dao, $id, $reqkey);
        return $sr;
    }

    public function csmGetDbRowById($dao, $id, $iddesc)
    {
        $dbrow = $dao->where("id", "=", $id)->find();
        $this->assertNotNull($dbrow, $iddesc);
        return $dbrow;
    }
}