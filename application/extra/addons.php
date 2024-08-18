<?php

return [
    'autoload' => false,
    'hooks' => [
        'app_init' => [
            'csmsignin',
        ],
        'config_init' => [
            'csmsignin',
        ],
        'xp_merge_user' => [
            'csmsignin',
        ],
    ],
    'route' => [],
    'priority' => [],
    'domain' => '',
];
