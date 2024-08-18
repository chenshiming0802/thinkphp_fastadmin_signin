/**
 * @usage
 * import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
 */
import config from "@/config/config.js";
import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
import userStore from '@/store/userStore.js';
import xcCWeixinMpLoginUtils from '@/library/xcore/js/XcCWeixinMpLoginUtils.js';
import xcCWeixinOaLoginUtils from '@/library/xcore/js/XcCWeixinOaLoginUtils.js';
import xcLangUtils from '@/library/xcore/js/XcLangUtils.js';
import {
	xsStringUtils,
	xsDateUtils,
	xsArrayUtils
} from 'xstack-for-javascript';
import pages from '@/pages.json';

let xcCloginUtils_vm = null;
export default {
	test: function() {
		console.log('hi');
	},
	appInit: function(vm) {
		let that = this;
		xcCloginUtils_vm = vm;

		let storage_token = uni.getStorageSync('uni_id_token');//clogintoken
		if (storage_token) {
			that.setSessionToken(storage_token);
		}

		// #ifdef WEB
		let url_token = xcHttpUtils.getUrlParam(null,"clogintoken");
		if (url_token) {
			that.setSessionToken(url_token);
		}
		// #endif
	},
	login: function() {
		let that = this;
		if (!that.isLogin()) {
			// #ifdef MP-WEIXIN
			xcCWeixinMpLoginUtils.login(function(user) {});
			// #endif
			// #ifdef WEB
			if (xcCWeixinOaLoginUtils.isWeixinOa()) {
				xcCWeixinOaLoginUtils.login(function(user) {});
			}
			// #endif
		}
	},
	filterPage(){
		let that = this;
		// #ifdef WEB
		let currentUrl = xcCloginUtils_vm.$route.path;
		let currentHref = xcCloginUtils_vm.$route.href;
		if (!that.isLogin()) {
			for(let i=0,j=pages["pages"].length;i<j;i++){
				let page = pages["pages"][i];
				
				if(("/"+page["path"])==currentUrl && page["needLogin"]==true){
					uni.setStorageSync('xcCloginUtils_beforelogin_url', currentHref);
					xcViewUtils.message_error(xcLangUtils.t('xclogin.login.msg_please_login'));
					setTimeout(function(){
						that.toLoginPage();
					},800);
					return false;
				}
			}
		}
		// #endif
		return true;
	},
	isLogin() {
		let that = this;
		let token = that.getSessionToken();
		if (token != null && token != "") {
			return true;
		} else {
			return false;
		}
	},
	getUserinfo(func) {
		let that = this;
		xcHttpUtils.my_get_xtype("xc", "clogin_api", "getSessionUserinfo", [], function(res) {
			func(res.userinfo);
		}, function(err) {
			return false;
		})
	},
	toLoginPage() {
		let that = this;
		that.clearSession();
		xcViewUtils.router_gotoPage("/pages/xclogin/login");
	},
	setSessionToken(code) {
		let that = this;
		userStore.dispatch('login', code);
	},
	getSessionToken(code) {
		let that = this;
		return userStore.state.token;
	},
	clearSession() {
		let that = this;
		userStore.dispatch('logout');
	},

}