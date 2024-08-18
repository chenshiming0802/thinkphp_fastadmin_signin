// import xcLangUtils from '@/library/xcore/js/XcLangUtils.js';
import {
	createI18n
} from "vue-i18n";
import xc_zh from '@/library/xcore/locales/zh.js';
import xc_en from '@/library/xcore/locales/en.js';
import xa_zh from '@/library/xapp/locales/zh.js';
import xa_en from '@/library/xapp/locales/en.js';

let xcLangUtils_vm = null;
export default {
	appInit:function(vm){
		let that = this;
		xcLangUtils_vm = vm;
	},
	createI18n: function() {
		let locale = 'zh';
		uni.setStorageSync('xclang_locale', locale);
		let i18n = createI18n({
			locale: locale,
			messages: {
				'zh': Object.assign(xc_zh, xa_zh),
				'en': Object.assign(xc_en, xa_en),
			}
		});
		return i18n;
	},
	getLocale: function() {
		return uni.getStorageSync('xclang_locale');
	},
	switchLocale:function(locale){
		xcLangUtils_vm.$i18n.locale = locale;
		uni.setStorageSync('xclang_locale', locale);
	},
	t:function(key){
		return xcLangUtils_vm.$t(key);
	}
}