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


class Conf extends Model
{

    

    

    // 表名
    protected $name = 'csmsignin_conf';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'requiredsiginin_text',
        'canoutusersignin_text',
        'begintime_text',
        'endtime_text',
        'status_text'
    ];
    

    
    public function getRequiredsigininList()
    {
        return ['Y' => __('Requiredsiginin y'), 'N' => __('Requiredsiginin n')];
    }

    public function getCanoutusersigninList()
    {
        return ['Y' => __('Canoutusersignin y'), 'N' => __('Canoutusersignin n')];
    }

    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }


    public function getRequiredsigininTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['requiredsiginin']) ? $data['requiredsiginin'] : '');
        $list = $this->getRequiredsigininList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getCanoutusersigninTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['canoutusersignin']) ? $data['canoutusersignin'] : '');
        $list = $this->getCanoutusersigninList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getBegintimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['begintime']) ? $data['begintime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getEndtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['endtime']) ? $data['endtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    public function setBegintimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }

    public function setEndtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}