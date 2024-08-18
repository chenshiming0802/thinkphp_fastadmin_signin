// import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
import xcLangUtils from '@/library/xcore/js/XcLangUtils.js';
export default {
	test: function() {
		alert('hi');
	},
	confirm: function(title, content, success, failure) {
		title = (title == null) ? xcLangUtils.t('xc.msg_systemtips') : title;
		uni.showModal({
			title: title,
			content: content,
			success: function(res) {
				if (res.confirm) {
					if (success) {
						success(res);
					}
				} else {
					if (failure) {
						failure(res);
					}
				}
			}
		});
	},
	message_error: function(msg, after_func) {
		let that = this;
		that.toast(msg);
		that._toast_after_call(after_func);
	},
	message_success: function(msg, after_func) {
		let that = this;
		msg = msg ? msg : xcLangUtils.t('xc.xc.msg_success_operate');
		that.toast(msg);
		that._toast_after_call(after_func);
	},
	router_navigateBack: function() {
		uni.navigateBack();
	},
	router_gotoPage: function(url, param) {
		console.log("router_gotoPage", url, param);
		// uni.$uv.route(url, param);
		if(param!=null){
			let sep = '?';
			for(let key in param){
				url += sep + key + "=" + param[key];
				sep = "&";
			}
		}
		uni.navigateTo({
			url: url
		});
		
	},
	showLoading: function(msg) {
		msg = (msg == null) ? xcLangUtils.t('xc.msg_loading') : msg;
		uni.showLoading({
			title: msg,
			mask: true
		});
	},
	hideLoading: function() {
		uni.hideLoading();
	},
	showModal: function(title, content, confirmText, cancelText, success) {
		uni.showModal({
			title: title,
			content: content,
			cancelText: cancelText == null ? xcLangUtils.t('xc.btn_cancel') : cancelText,
			confirmText: confirmText == null ? xcLangUtils.t('xc.btn_confirm') : confirmText,
			showCancel: true,
			success: (res) => {
				success(res);
			}
		})
	},
	toast: function(msg, after_func) {
		let that = this;
		uni.showToast({
			title: msg,
			icon: "none",
			duration: 2000
		});
		that._toast_after_call(after_func);
	},
	_toast_after_call(after_func) {
		if (after_func != null) {
			setTimeout(
				after_func, 1000);
		}
	},
}