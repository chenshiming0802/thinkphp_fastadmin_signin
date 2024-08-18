<?php

return [
    "addons_code" => "csmsignin",
    "addons_name" => "XP框架",

    "XcAdminTabUtils.tabgroup" => [
        "dmo" => [
            ["code" => "Dmo#edit", "name" => "DMO", "url" => "csmsignin/dmo/edit/ids/{id}?dialog=1"],
            ["code" => "Dmoitem#index", "name" => "DMO明细", "url" => "csmsignin/dmoitem/index?xc_tabid={id}&dialog=1"],
        ],
        "conf" => [
            ["code" => "Conf#edit", "name" => "基本信息", "url" => "csmsignin/conf/edit/ids/{id}?dialog=1"],
            ["code" => "Confinfo#index", "name" => "栏目维护", "url" => "csmsignin/confinfo/index?xc_tabid={id}&dialog=1"],
            ["code" => "Confuser#index", "name" => "参会人员", "url" => "csmsignin/confuser/index?xc_tabid={id}&dialog=1"],
            ["code" => "Conf#port", "name" => "入会链接", "url" => "csmsignin/conf/port/ids/{id}?dialog=1"],
        ],
    ],
    "XcUserSettingUtils.defaultsetting" => [
        "stringsetting" => "",
        "arraysetting" => [],
    ],
    "XcGetuiUtils.config" => [
        'appID' => "Yy5Y44m54b9bL4hPUBEm36",
        'appKey' => "UUdu3WW6Zt84tf08UOcYh7",
        'appSecret' => "WmwzEShx3L7W1ahldkyNy",
        'masterSecret' => "ixh4jEnSZ3AnXd2NNpLVp1",
    ]

];
