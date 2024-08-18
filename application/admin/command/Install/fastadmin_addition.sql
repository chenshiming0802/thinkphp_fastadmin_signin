insert  into `fa_auth_rule`(`id`,`type`,`pid`,`name`,`title`,`icon`,`url`,`condition`,`remark`,`ismenu`,`menutype`,`extend`,`py`,`pinyin`,`createtime`,`updatetime`,`weigh`,`status`) values 
	(85,'file',0,'csmsignin','CSM签到和活动','fa fa-list','','','',1,NULL,'','Cqdhhd','CSMqiandaohehuodong',1722954928,1723034749,0,'normal'),
	(86,'file',85,'csmsignin/conf','活动管理','fa fa-meetup','','','',1,NULL,'','hdgl','huodongguanli',1722954928,1723034761,0,'normal'),
	(87,'file',86,'csmsignin/conf/index','查看','fa fa-circle-o','','','',0,NULL,'','zk','zhakan',1722954928,1723034597,0,'normal'),
	(88,'file',86,'csmsignin/conf/add','添加','fa fa-circle-o','','','',0,NULL,'','tj','tianjia',1722954928,1723034597,0,'normal'),
	(89,'file',86,'csmsignin/conf/edit','编辑','fa fa-circle-o','','','',0,NULL,'','bj','bianji',1722954928,1723034597,0,'normal'),
	(90,'file',86,'csmsignin/conf/del','删除','fa fa-circle-o','','','',0,NULL,'','sc','shanchu',1722954928,1723034597,0,'normal'),
	(91,'file',85,'csmsignin/cloginthird','微信帐号查询','fa fa-file-text-o','','','',1,'addtabs','','wxzhcx','weixinzhanghaochaxun',1722954928,1723560230,0,'normal'),
	(92,'file',91,'csmsignin/cloginthird/index','查看','fa fa-circle-o','','','',0,'addtabs','','zk','zhakan',1722954928,1723560273,0,'normal'),
	(116,'file',86,'csmsignin/conf/multi','批量更新','fa fa-circle-o','','','',0,NULL,'','plgx','pilianggengxin',1723034597,1723034597,0,'normal'),
	(117,'file',85,'csmsignin/confinfo','活动内容信息','fa fa-circle-o','','','',0,NULL,'','hdnrxx','huodongneirongxinxi',1723035385,1723035385,0,'normal'),
	(118,'file',117,'csmsignin/confinfo/index','查看','fa fa-circle-o','','','',0,NULL,'','zk','zhakan',1723035385,1723035385,0,'normal'),
	(119,'file',117,'csmsignin/confinfo/add','添加','fa fa-circle-o','','','',0,NULL,'','tj','tianjia',1723035385,1723035385,0,'normal'),
	(120,'file',117,'csmsignin/confinfo/edit','编辑','fa fa-circle-o','','','',0,NULL,'','bj','bianji',1723035385,1723035385,0,'normal'),
	(121,'file',117,'csmsignin/confinfo/del','删除','fa fa-circle-o','','','',0,NULL,'','sc','shanchu',1723035385,1723035385,0,'normal'),
	(122,'file',117,'csmsignin/confinfo/multi','批量更新','fa fa-circle-o','','','',0,NULL,'','plgx','pilianggengxin',1723035385,1723035385,0,'normal'),
	(123,'file',85,'csmsignin/confuser','活动信息','fa fa-circle-o','','','',0,NULL,'','hdxx','huodongxinxi',1723035392,1723035392,0,'normal'),
	(124,'file',123,'csmsignin/confuser/index','查看','fa fa-circle-o','','','',0,NULL,'','zk','zhakan',1723035393,1723035393,0,'normal'),
	(125,'file',123,'csmsignin/confuser/add','添加','fa fa-circle-o','','','',0,NULL,'','tj','tianjia',1723035393,1723035393,0,'normal'),
	(126,'file',123,'csmsignin/confuser/edit','编辑','fa fa-circle-o','','','',0,NULL,'','bj','bianji',1723035393,1723035393,0,'normal'),
	(127,'file',123,'csmsignin/confuser/del','删除','fa fa-circle-o','','','',0,NULL,'','sc','shanchu',1723035393,1723035393,0,'normal'),
	(128,'file',123,'csmsignin/confuser/multi','批量更新','fa fa-circle-o','','','',0,NULL,'','plgx','pilianggengxin',1723035393,1723035393,0,'normal');

# Dump of table fa_csmsignin_clogininfo
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_clogininfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `settingjson` text COLLATE utf8mb4_unicode_ci COMMENT '配置',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal',
  PRIMARY KEY (`id`),
  KEY `ix_csmsignin_clogininfo_user_id` (`user_id`),
  KEY `ix_csmsignin_clogininfo_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户配置';



# Dump of table fa_csmsignin_cloginlog
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_cloginlog` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='操作日志';



# Dump of table fa_csmsignin_cloginmessage
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_cloginmessage` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户消息';



# Dump of table fa_csmsignin_cloginthird
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_cloginthird` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='第三方登录表';



# Dump of table fa_csmsignin_cloginwxscan
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_cloginwxscan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `login_scene_id` varchar(50) NOT NULL COMMENT 'SCENE',
  `user_id` int(11) DEFAULT NULL COMMENT '用户',
  `openid` varchar(100) DEFAULT NULL COMMENT 'OpenID',
  `username` varchar(100) DEFAULT NULL COMMENT '用户名',
  `event` varchar(100) DEFAULT NULL COMMENT '事件：subscribe,scan',
  `createtime` int(10) DEFAULT '0' COMMENT '创建时间',
  `updatetime` int(10) DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信扫码记录表';



# Dump of table fa_csmsignin_commoninterfacelog
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_commoninterfacelog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `methodtype` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Method方法',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'URl',
  `request_post` text COLLATE utf8mb4_unicode_ci COMMENT 'sp',
  `request_result` text COLLATE utf8mb4_unicode_ci COMMENT 'sr',
  `costsecond` int(11) DEFAULT NULL COMMENT '花费时间',
  `issuccess` enum('Y','N') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '是否成功:Y=是,N=否',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='接口日志';



# Dump of table fa_csmsignin_conf
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_conf` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='活动信息';

LOCK TABLES `fa_csmsignin_conf` WRITE;
/*!40000 ALTER TABLE `fa_csmsignin_conf` DISABLE KEYS */;

INSERT INTO `fa_csmsignin_conf` (`id`, `name`, `images`, `requiredsiginin`, `canoutusersignin`, `unsignedcontentq`, `siginedcontent`, `meetdate`, `meetaddress`, `begintime`, `endtime`, `status`, `createtime`, `updatetime`, `admin_id`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`)
VALUES
	(1,'2020年CSM软件分享会','/uploads/20240807/03c1167d3e4e8ac7193b665e01be1dcf.webp,/uploads/20240807/03c1167d3e4e8ac7193b665e01be1dcf.webp','N','Y','欢迎光临来前往参加此会议','我好我','xxxx年xx月xx日9:30开始','上海XXXXXX酒店XX楼',1579105800,1767108600,'normal',1582716223,1723343112,0,'','','','','','','','','');

/*!40000 ALTER TABLE `fa_csmsignin_conf` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table fa_csmsignin_confinfo
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_confinfo` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='活动内容信息';

LOCK TABLES `fa_csmsignin_confinfo` WRITE;
/*!40000 ALTER TABLE `fa_csmsignin_confinfo` DISABLE KEYS */;

INSERT INTO `fa_csmsignin_confinfo` (`id`, `csmsignin_conf_id`, `title`, `content`, `weigh`, `createtime`, `updatetime`, `isneedsigined`, `admin_id`, `status`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`)
VALUES
	(5,1,'简介','<p>这个是测试数据，</p><p>请到<b>后台管理-CSM签到和活动-活动管理</b>配置活动信息，</p><p></p>并活动管理页面中的<b style=\"color:red\">小程序二维码</b>进入签到会议系统。<p></p><p><br></p>',5,1582726807,1723295885,'N',0,'normal','','','','','','','','',''),
	(6,1,'联系人','这个是测试数据，请到后台维护',1,1582726819,1723295891,'N',0,'normal','','','','','','','','',''),
	(7,1,'内容','这个是测试数据，请到后台维护',4,1582726832,1723295877,'Y',0,'normal','','','','','','','','',''),
	(8,2,'交通','这个是测试数据，请到后台维护',2,1582726842,1582726926,NULL,0,'normal','','','','','','','','',''),
	(9,7,'','这个是栏目，请在后台维护',9,1723561551,1723561551,NULL,0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(10,8,'联系人','这个是联系人栏目，请在后台维护',10,1723561666,1723561666,NULL,0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(11,8,'交通','这个是交通栏目，请在后台维护',11,1723561666,1723561666,NULL,0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(12,8,'议程','这个是议程栏目，请在后台维护',12,1723561666,1723561666,NULL,0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(13,8,'简介','这个是简介栏目，请在后台维护',13,1723561666,1723561749,'Y',0,'normal','','','','','','','','',''),
	(14,9,'联系人','这个是联系人栏目，请在后台维护',14,1723561885,1723561885,'N',0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(15,9,'交通','这个是交通栏目，请在后台维护',15,1723561885,1723561885,'N',0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(16,9,'议程','这个是议程栏目，请在后台维护',16,1723561885,1723561885,'N',0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(17,9,'简介','这个是简介栏目，请在后台维护',17,1723561885,1723561885,'N',0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(18,9,'测试栏目','测试栏目测试栏目',18,1723561995,1723561995,'Y',0,'normal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `fa_csmsignin_confinfo` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table fa_csmsignin_confuser
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_confuser` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='活动信息';



# Dump of table fa_csmsignin_dmo
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_dmo` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DMO';



# Dump of table fa_csmsignin_dmo2category
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_dmo2category` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DMO所属分类';



# Dump of table fa_csmsignin_dmoapply
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_dmoapply` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DMO申请';



# Dump of table fa_csmsignin_dmocategory
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_dmocategory` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `user_id` int(10) DEFAULT '0' COMMENT '会员ID',
  `admin_id` int(10) DEFAULT '0' COMMENT '管理员ID',
  `createtime` bigint(16) DEFAULT NULL COMMENT '创建时间',
  `updatetime` bigint(16) DEFAULT NULL COMMENT '更新时间',
  `weigh` int(10) DEFAULT '0' COMMENT '权重',
  `status` enum('normal','hidden') COLLATE utf8mb4_unicode_ci DEFAULT 'normal' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DEMO分类';



# Dump of table fa_csmsignin_dmoitem
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_dmoitem` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='DEMO明细';



# Dump of table fa_csmsignin_weixinuser
# ------------------------------------------------------------

CREATE TABLE `fa_csmsignin_weixinuser` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `wxappid` varchar(100) DEFAULT NULL COMMENT '微信appid',
  `currentsessionkey` varchar(100) NOT NULL COMMENT '当前微信sessionkey',
  `openid` varchar(200) NOT NULL COMMENT 'Openid',
  `avatarUrl` varchar(200) NOT NULL COMMENT '头像',
  `city` varchar(200) NOT NULL COMMENT '城市',
  `country` varchar(200) NOT NULL COMMENT '国家',
  `gender` varchar(200) NOT NULL COMMENT '性别',
  `language` varchar(200) NOT NULL COMMENT '语言',
  `nickName` varchar(200) NOT NULL COMMENT '昵称',
  `province` varchar(200) NOT NULL COMMENT '地区',
  `phoneNumber` varchar(200) NOT NULL COMMENT '用户绑定的手机号（国外手机号会有区号）',
  `purePhoneNumber` varchar(200) NOT NULL COMMENT '没有区号的手机号',
  `countryCode` varchar(200) NOT NULL COMMENT '区号',
  `status` enum('normal','hidden') NOT NULL DEFAULT 'normal' COMMENT '状态',
  `createtime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `updatetime` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='微信用户信息';
