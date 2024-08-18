/**
 * @usage
 * import xcCWeixinOaLoginUtils from '@/library/xcore/js/XcCWeixinOaLoginUtils.js';
 */
import config from "@/config/config.js";
import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';


export default {
	test: function() {
		console.log('hi');
	},

	login: function(func) {
		let that = this;
		let url = xcHttpUtils.getBaseUrl() + config.addons + "/xc_cweixin_oa_login/login?targetUrl=" +
			encodeURIComponent(window.location);
		
		window.location = url;
	},
	isWeixinOa() {
		let ua = navigator.userAgent.toLowerCase()
		return (/micromessenger/.test(ua))
	},
}