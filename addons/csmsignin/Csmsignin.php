<?php

namespace addons\csmsignin;

use think\Addons;
use app\common\library\Menu;
use addons\csmsignin\library\xcore\xcore\utils\XcConfigUtils;

/**
 * 插件
 */
class Csmsignin extends Addons
{

    /**
     * 插件安装方法
     * @return bool
     */
    public function install()
    {
        $menu = [
            [
                'name' => 'csmsignin',
                'title' => 'CSM签到和活动',
                'icon' => 'fa fa-list',
                'ismenu' => 1,
                'py' => 'Cqdhhd',
                'pinyin' => 'CSMqiandaohehuodong',
                'sublist' =>
                [
                    [
                        'name' => 'csmsignin/conf',
                        'title' => '活动管理',
                        'icon' => 'fa fa-meetup',
                        'ismenu' => 1,
                        'py' => 'hdgl',
                        'pinyin' => 'huodongguanli',
                        'weigh' => 0,
                        'sublist' =>
                        [
                            [
                                'name' => 'csmsignin/conf/index',
                                'title' => '查看',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'zk',
                                'pinyin' => 'zhakan',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/conf/add',
                                'title' => '添加',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'tj',
                                'pinyin' => 'tianjia',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/conf/edit',
                                'title' => '编辑',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'bj',
                                'pinyin' => 'bianji',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/conf/del',
                                'title' => '删除',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'sc',
                                'pinyin' => 'shanchu',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/conf/multi',
                                'title' => '批量更新',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'plgx',
                                'pinyin' => 'pilianggengxin',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/conf/port',
                                'title' => '访问端口',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'fwdk',
                                'pinyin' => 'fangwenduankou',
                                'weigh' => 0,
                            ],
                        ],
                    ],
                    [
                        'name' => 'csmsignin/cloginthird',
                        'title' => '微信帐号查询',
                        'icon' => 'fa fa-file-text-o',
                        'ismenu' => 1,
                        'py' => 'wxzhcx',
                        'pinyin' => 'weixinzhanghaochaxun',
                        'weigh' => 0,
                        'sublist' =>
                        [
                            [
                                'name' => 'csmsignin/cloginthird/index',
                                'title' => '查看',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'zk',
                                'pinyin' => 'zhakan',
                                'weigh' => 0,
                            ],
                        ],
                    ],
                    [
                        'name' => 'csmsignin/confinfo',
                        'title' => '活动内容信息',
                        'icon' => 'fa fa-circle-o',
                        'ismenu' => 0,
                        'py' => 'hdnrxx',
                        'pinyin' => 'huodongneirongxinxi',
                        'weigh' => 0,
                        'sublist' =>
                        [
                            [
                                'name' => 'csmsignin/confinfo/index',
                                'title' => '查看',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'zk',
                                'pinyin' => 'zhakan',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confinfo/add',
                                'title' => '添加',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'tj',
                                'pinyin' => 'tianjia',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confinfo/edit',
                                'title' => '编辑',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'bj',
                                'pinyin' => 'bianji',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confinfo/del',
                                'title' => '删除',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'sc',
                                'pinyin' => 'shanchu',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confinfo/multi',
                                'title' => '批量更新',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'plgx',
                                'pinyin' => 'pilianggengxin',
                                'weigh' => 0,
                            ],
                        ],
                    ],
                    [
                        'name' => 'csmsignin/confuser',
                        'title' => '活动信息',
                        'icon' => 'fa fa-circle-o',
                        'ismenu' => 0,
                        'py' => 'hdxx',
                        'pinyin' => 'huodongxinxi',
                        'weigh' => 0,
                        'sublist' =>
                        [
                            [
                                'name' => 'csmsignin/confuser/index',
                                'title' => '查看',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'zk',
                                'pinyin' => 'zhakan',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confuser/add',
                                'title' => '添加',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'tj',
                                'pinyin' => 'tianjia',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confuser/edit',
                                'title' => '编辑',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'bj',
                                'pinyin' => 'bianji',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confuser/del',
                                'title' => '删除',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'sc',
                                'pinyin' => 'shanchu',
                                'weigh' => 0,
                            ],
                            [
                                'name' => 'csmsignin/confuser/multi',
                                'title' => '批量更新',
                                'icon' => 'fa fa-circle-o',
                                'ismenu' => 0,
                                'py' => 'plgx',
                                'pinyin' => 'pilianggengxin',
                                'weigh' => 0,
                            ],
                        ],
                    ],
                ],
            ],
        ];
        Menu::create($menu);
        return true;
    }

    /**
     * 插件卸载方法
     * @return bool
     */
    public function uninstall()
    {
        Menu::delete(XcConfigUtils::xpconfig('addons_code'));
        return true;
    }

    /**
     * 插件启用方法
     * @return bool
     */
    public function enable()
    {
        Menu::enable(XcConfigUtils::xpconfig('addons_code'));
        return true;
    }

    /**
     * 插件禁用方法
     * @return bool
     */
    public function disable()
    {
        Menu::disable(XcConfigUtils::xpconfig('addons_code'));
        return true;
    }

    // Hook文档: https://doc.fastadmin.net/developer/87.html
    public function appInit()
    {
        $path = APP_PATH . '..' . \DIRECTORY_SEPARATOR . 'addons' . \DIRECTORY_SEPARATOR . 'csmsignin' . \DIRECTORY_SEPARATOR . 'library' . \DIRECTORY_SEPARATOR . 'composer' . \DIRECTORY_SEPARATOR . 'vendor' . \DIRECTORY_SEPARATOR . 'autoload.php';
        require_once $path;
    }

    /**
     * JS 获取配置的方式 Config.csmsignin.cloginwxmp
     */
    public function configInit(&$params)
    {
        $config = $this->getConfig();
        $addons = XcConfigUtils::xpconfig('addons_code');
        $params[$addons] = [
            'cloginwxmp' => $config['cloginwxmp'],
            'cloginwxoa' => $config['cloginwxoa'], 
        ];
    }

    public function xpMergeUser($src_user_id, $target_user_id)
    {
        return;
    }
}
