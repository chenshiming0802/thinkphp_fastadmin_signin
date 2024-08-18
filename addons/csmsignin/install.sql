
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_clogininfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `settingjson` text COLLATE utf8mb4_unicode_ci COMMENT '配置',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal',
  PRIMARY KEY (`id`),
  KEY `ix_csmsignin_clogininfo_user_id` (`user_id`),
  KEY `ix_csmsignin_clogininfo_status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户配置'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_cloginlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `operate` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '操作类型',
  `port` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '访问端口',
  `object_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '对象ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `cyear` int(11) DEFAULT NULL COMMENT '年',
  `cmonth` int(11) DEFAULT NULL COMMENT '月',
  `cdate` int(11) DEFAULT NULL COMMENT '日',
  `cweek` int(11) DEFAULT NULL COMMENT '周1-7',
  `chour` int(11) DEFAULT NULL COMMENT '小时',
  `cmin` int(11) DEFAULT NULL COMMENT '分钟',
  `content` text COLLATE utf8mb4_unicode_ci,
  `recontent` text COLLATE utf8mb4_unicode_ci,
  `septime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='操作日志'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_cloginmessage` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `cyear` int(11) DEFAULT NULL COMMENT '年',
  `cmonth` int(11) DEFAULT NULL COMMENT '月',
  `cdate` int(11) DEFAULT NULL COMMENT '日',
  `cweek` int(11) DEFAULT NULL COMMENT '周1-7',
  `chour` int(11) DEFAULT NULL COMMENT '小时',
  `cmin` int(11) DEFAULT NULL COMMENT '分钟',
  `title` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `content` text COLLATE utf8mb4_unicode_ci COMMENT '内容',
  `objectcode` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '对象名称',
  `objectid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '对象ID',
  `isread` enum('Y','N') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '是佛已读:Y=已读,N=未读',
  `readtime` bigint(20) DEFAULT NULL COMMENT '阅读时间',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal' COMMENT '状态',
  `weigh` int(11) DEFAULT NULL COMMENT '权重',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户消息'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_cloginthird` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(10) unsigned DEFAULT '0' COMMENT '会员ID',
  `platform` varchar(30) DEFAULT '' COMMENT '第三方应用',
  `platformid` varchar(30) DEFAULT NULL COMMENT '第三方接入账套，比如微信号appid',
  `apptype` varchar(50) DEFAULT '' COMMENT '应用类型',
  `unionid` varchar(100) DEFAULT '' COMMENT '第三方UNIONID',
  `openid` varchar(100) DEFAULT '' COMMENT '第三方OPENID',
  `openname` varchar(100) DEFAULT '' COMMENT '第三方会员昵称',
  `access_token` varchar(255) DEFAULT '' COMMENT 'AccessToken',
  `refresh_token` varchar(255) DEFAULT 'RefreshToken',
  `expires_in` int(10) unsigned DEFAULT '0' COMMENT '有效期',
  `createtime` int(10) unsigned DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(10) unsigned DEFAULT NULL COMMENT '更新时间',
  `logintime` int(10) unsigned DEFAULT NULL COMMENT '登录时间',
  `expiretime` int(10) unsigned DEFAULT NULL COMMENT '过期时间',
  `avatarurl` varchar(200) DEFAULT NULL COMMENT '头像',
  `city` varchar(100) DEFAULT NULL COMMENT '城市',
  `country` varchar(100) DEFAULT NULL COMMENT '国家',
  `gender` varchar(100) DEFAULT NULL COMMENT '性别',
  `language` varchar(100) DEFAULT NULL COMMENT '语言',
  `name` varchar(100) DEFAULT NULL COMMENT '称呼',
  `nickname` varchar(100) DEFAULT NULL COMMENT '昵称',
  `province` varchar(100) DEFAULT NULL COMMENT '地区',
  `phonenumber` varchar(100) DEFAULT NULL COMMENT '用户绑定的手机号（国外手机号会有区号）',
  `purephonenumber` varchar(100) DEFAULT NULL COMMENT '没有区号的手机号',
  `countrycode` varchar(100) DEFAULT NULL COMMENT '区号',
  `status` enum('normal','hidden') DEFAULT 'normal',
  PRIMARY KEY (`id`),
  UNIQUE KEY `platform` (`platform`,`openid`),
  KEY `user_id` (`user_id`,`platform`),
  KEY `unionid` (`platform`,`unionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='第三方登录表'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_cloginwxscan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `login_scene_id` varchar(50) NOT NULL COMMENT 'SCENE',
  `user_id` int(11) DEFAULT NULL COMMENT '用户',
  `openid` varchar(100) DEFAULT NULL COMMENT 'OpenID',
  `username` varchar(100) DEFAULT NULL COMMENT '用户名',
  `event` varchar(100) DEFAULT NULL COMMENT '事件：subscribe,scan',
  `createtime` int(10) DEFAULT '0' COMMENT '创建时间',
  `updatetime` int(10) DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信扫码记录表'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_commoninterfacelog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `methodtype` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Method方法',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'URl',
  `request_post` text COLLATE utf8mb4_unicode_ci COMMENT 'sp',
  `request_result` text COLLATE utf8mb4_unicode_ci COMMENT 'sr',
  `costsecond` int(11) DEFAULT NULL COMMENT '花费时间',
  `issuccess` enum('Y','N') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '是否成功:Y=是,N=否',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='接口日志'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_dmo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `csmsignin_dmoapply_id` int(11) DEFAULT NULL COMMENT 'DMO申请',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `csmsignin_dmocategory_id` int(11) DEFAULT NULL COMMENT '分类',
  `csmsignin_dmocategory_ids` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '分类（多选）',
  `type` enum('T1','T2') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型:T1=类型1,T2=类型2',
  `types` set('T1','T2') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型(多选):T1=类型1,T2=类型2',
  `isread` enum('Y','N') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '是否已读:Y=是,N=否',
  `content` text COLLATE utf8mb4_unicode_ci COMMENT '正文',
  `bannerimage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附件（单个）',
  `images` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附件（多个）',
  `user_id` int(10) DEFAULT '0' COMMENT '会员ID',
  `admin_id` int(10) DEFAULT '0' COMMENT '管理员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `updatetime` bigint(16) DEFAULT NULL COMMENT '更新时间',
  `weigh` int(10) DEFAULT '0' COMMENT '权重',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DMO'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_dmo2category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `csmsignin_dmo_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'DMO',
  `csmsignin_dmocategory_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'DMO分类',
  `user_id` int(10) DEFAULT '0' COMMENT '会员ID',
  `admin_id` int(10) DEFAULT '0' COMMENT '管理员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `updatetime` bigint(16) DEFAULT NULL COMMENT '更新时间',
  `weigh` int(10) DEFAULT '0' COMMENT '权重',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DMO所属分类'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_dmoapply` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `csmsignin_dmocategory_id` int(11) DEFAULT NULL COMMENT '分类',
  `csmsignin_dmocategory_ids` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '分类（多选）',
  `type` enum('T1','T2') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型:T1=类型1,T2=类型2',
  `types` set('T1','T2') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型(多选):T1=类型1,T2=类型2',
  `content` text COLLATE utf8mb4_unicode_ci COMMENT '正文',
  `bannerimage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附件（单个）',
  `images` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附件（多个）',
  `auditcontent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '审核意见',
  `user_id` int(10) DEFAULT '0' COMMENT '会员ID',
  `admin_id` int(10) DEFAULT '0' COMMENT '管理员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `updatetime` bigint(16) DEFAULT NULL COMMENT '更新时间',
  `weigh` int(10) DEFAULT '0' COMMENT '权重',
  `status` enum('normal','hidden','draft','toaudit','reject') COLLATE utf8mb4_unicode_ci DEFAULT 'draft' COMMENT '状态:toaudit=待审,reject=审核退回,normal=发布,draft=草稿,hidden=已删除,',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DMO申请'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_dmocategory` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `user_id` int(10) DEFAULT '0' COMMENT '会员ID',
  `admin_id` int(10) DEFAULT '0' COMMENT '管理员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `updatetime` bigint(16) DEFAULT NULL COMMENT '更新时间',
  `weigh` int(10) DEFAULT '0' COMMENT '权重',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DEMO分类'
;

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_dmoitem` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `csmsignin_dmo_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'DMO',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `type` enum('type1','type2') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型:type1=类型1,type2=类型2',
  `type1_val` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型1值',
  `type2_val` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型2值',
  `user_id` int(10) DEFAULT '0' COMMENT '会员ID',
  `admin_id` int(10) DEFAULT '0' COMMENT '管理员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `updatetime` bigint(16) DEFAULT NULL COMMENT '更新时间',
  `weigh` int(10) DEFAULT '0' COMMENT '权重',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DEMO明细'
;
 
CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_conf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(200) NOT NULL COMMENT '活动名称',
  `images` varchar(1000) DEFAULT NULL COMMENT '活动图片,图片比例2.5:1',
  `requiredsiginin` enum('Y','N') NOT NULL DEFAULT 'Y' COMMENT '是否需要签到才可看会议信息:Y=需要签到,N=无需签到',
  `canoutusersignin` enum('Y','N') NOT NULL DEFAULT 'Y' COMMENT '是否限定参会人员:Y=不限定,N=限定',
  `unsignedcontentq` text COMMENT '签到前信息',
  `siginedcontent` varchar(200) DEFAULT NULL COMMENT '签到后提示信息',
  `meetdate` varchar(100) NOT NULL COMMENT '会议时间',
  `meetaddress` varchar(200) NOT NULL COMMENT '会议地点',
  `begintime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '签到开始时间',
  `endtime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '签到截止时间',
  `status` enum('normal','hidden') NOT NULL DEFAULT 'normal' COMMENT '状态',
  `createtime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `updatetime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `admin_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '管理员',
  `b1` varchar(100) DEFAULT NULL COMMENT '备用字段1',
  `b2` varchar(100) DEFAULT NULL COMMENT '备用字段2',
  `b3` varchar(100) DEFAULT NULL COMMENT '备用字段3',
  `b4` varchar(100) DEFAULT NULL COMMENT '备用字段4',
  `b5` varchar(100) DEFAULT NULL COMMENT '备用字段5',
  `b6` varchar(100) DEFAULT NULL COMMENT '备用字段6',
  `b7` varchar(100) DEFAULT NULL COMMENT '备用字段7',
  `b8` varchar(100) DEFAULT NULL COMMENT '备用字段8',
  `b9` varchar(100) DEFAULT NULL COMMENT '备用字段9',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='活动信息';

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_confinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `csmsignin_conf_id` int(10) unsigned NOT NULL COMMENT '活动',
  `title` varchar(200) NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `weigh` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  `createtime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `updatetime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `isneedsigined` enum('N','Y') DEFAULT 'N' COMMENT '是否签到后可查看:Y=需要签到,N=不需要签到',
  `admin_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `status` enum('normal','hidden') DEFAULT 'normal' COMMENT '状态',
  `b1` varchar(100) DEFAULT NULL COMMENT '备用字段1',
  `b2` varchar(100) DEFAULT NULL COMMENT '备用字段2',
  `b3` varchar(100) DEFAULT NULL COMMENT '备用字段3',
  `b4` varchar(100) DEFAULT NULL COMMENT '备用字段4',
  `b5` varchar(100) DEFAULT NULL COMMENT '备用字段5',
  `b6` varchar(100) DEFAULT NULL COMMENT '备用字段6',
  `b7` varchar(100) DEFAULT NULL COMMENT '备用字段7',
  `b8` varchar(100) DEFAULT NULL COMMENT '备用字段8',
  `b9` varchar(100) DEFAULT NULL COMMENT '备用字段9',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='活动内容信息';

CREATE TABLE IF NOT EXISTS `__PREFIX__csmsignin_confuser` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `csmsignin_conf_id` int(10) unsigned NOT NULL COMMENT '活动',
  `username` varchar(200) NOT NULL COMMENT '参会人姓名',
  `usermobile` varchar(200) NOT NULL COMMENT '参会人手机',
  `signinstatus` enum('N','Y') NOT NULL DEFAULT 'N' COMMENT '状态:Y=已签到,N=未签到',
  `signintime` int(10) unsigned DEFAULT '0' COMMENT '签到时间',
  `signordernum` int(10) DEFAULT NULL COMMENT '签到名次',
  `weixinuser_id` int(10) DEFAULT NULL COMMENT '签到用户',
  `status` enum('normal','hidden') NOT NULL DEFAULT 'normal' COMMENT '状态',
  `createtime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `updatetime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `admin_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `b1` varchar(100) DEFAULT NULL COMMENT '备用字段1',
  `b2` varchar(100) DEFAULT NULL COMMENT '备用字段2',
  `b3` varchar(100) DEFAULT NULL COMMENT '备用字段3',
  `b4` varchar(100) DEFAULT NULL COMMENT '备用字段4',
  `b5` varchar(100) DEFAULT NULL COMMENT '备用字段5',
  `b6` varchar(100) DEFAULT NULL COMMENT '备用字段6',
  `b7` varchar(100) DEFAULT NULL COMMENT '备用字段7',
  `b8` varchar(100) DEFAULT NULL COMMENT '备用字段8',
  `b9` varchar(100) DEFAULT NULL COMMENT '备用字段9',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='活动信息';


COMMIT;