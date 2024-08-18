/**
 * @usage
 * import xcCWeixinMpLoginUtils from '@/library/xcore/js/XcCWeixinMpLoginUtils.js';
 */
import config from "@/config/config.js";
import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
import xcLangUtils from '@/library/xcore/js/XcLangUtils.js';

export default {
	test: function() {
		console.log('hi');
	},
	
	login:function(func){
		let that = this;
		uni.login({
			provider: 'weixin',
			success: function(loginRes) {
				xcHttpUtils.post("/" + config.addons + "/xc_cweixin_mp_login/loginOpenid", {
					code: loginRes.code
				}, function(res) {
					xcCloginUtils.setSessionToken(res.token);
					func(res.user);
				});
			}
		});
	},
 
	getPhoneNumber: function(e, func) {
		let that = this;
		console.log(e);
		if (e.detail.errMsg == "getPhoneNumber:ok") {
			xcHttpUtils.post("/" + config.addons + "/xc_cweixin_mp_login/loginMobile", {
				code: e.detail.code
			}, function(res) {
				xcCloginUtils.setSessionToken(res.token);
				func(res.user);
			});
		} else {
			xcViewUtils.message_error(xcLangUtils.t('xc.msg_error_authorize')+""+e.detail.errMsg);
		}
	},
}