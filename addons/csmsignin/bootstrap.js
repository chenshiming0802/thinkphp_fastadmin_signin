require.config({
    paths: {
    	'csmsignin_xcore': '../addons/csmsignin/library/xcore/js/xcore',
        'csmsignin_csminputstyle': '../addons/csmsignin/library/xcore/js/csminputstyle',
        'jquery.simple-color': '../addons/csmsignin/library/xcore/js/jquery.simple-color',
    },
    shim: {
        'csmsignin_xcore': {
            deps: ["css!../addons/csmsignin/library/xcore/css/xcore.css"]
        },
        'csmsignin_csminputstyle': {
            deps: ["css!../addons/csmsignin/library/xcore/css/csminputstyle.css"]
        },
    }
});