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


class Confinfo extends Model
{

    

    

    // 表名
    protected $name = 'csmsignin_confinfo';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'isneedsigined_text',
        'status_text'
    ];
    

    protected static function init()
    {
        self::afterInsert(function ($row) {
            $pk = $row->getPk();
            $row->getQuery()->where($pk, $row[$pk])->update(['weigh' => $row[$pk]]);
        });
    }

    
    public function getIsneedsiginedList()
    {
        return ['Y' => __('Isneedsigined y'), 'N' => __('Isneedsigined n')];
    }

    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }


    public function getIsneedsiginedTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['isneedsigined']) ? $data['isneedsigined'] : '');
        $list = $this->getIsneedsiginedList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}