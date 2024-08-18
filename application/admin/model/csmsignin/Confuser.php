<?php
// +----------------------------------------------------------------------
// | CSMSIGNIN  [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2024 https://www.fastadmin.net All rights reserved.
// +----------------------------------------------------------------------
// | Author: yourname
// +----------------------------------------------------------------------

namespace app\admin\model\csmsignin;

use think\Model;


class Confuser extends Model
{

    

    

    // 表名
    protected $name = 'csmsignin_confuser';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'signinstatus_text',
        'signintime_text',
        'status_text'
    ];
    

    
    public function getSigninstatusList()
    {
        return ['Y' => __('Signinstatus y'), 'N' => __('Signinstatus n')];
    }

    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }


    public function getSigninstatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['signinstatus']) ? $data['signinstatus'] : '');
        $list = $this->getSigninstatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getSignintimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['signintime']) ? $data['signintime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    public function setSignintimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}