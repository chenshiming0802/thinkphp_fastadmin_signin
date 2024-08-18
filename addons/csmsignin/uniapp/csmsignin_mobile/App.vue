<script>
	import XcHttpUtils from "@/library/xcore/js/XcHttpUtils.js";
	import xcUniappUtils from '@/library/xcore/js/XcUniappUtils.js';
	import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
	import xcLangUtils from '@/library/xcore/js/XcLangUtils.js';

	export default {
		onLaunch: function() {
			console.log('App Launch');
			XcHttpUtils.appInit(this);
			xcUniappUtils.appInit(this);
			xcLangUtils.appInit(this);
			xcCloginUtils.appInit(this);

			xcCloginUtils.login();
		},
		onShow: function() {
			console.log('App Show');
			// xcCloginUtils.filterPage();
		},
		onHide: function() {
			console.log('App Hide');
		},
	}
</script>

<style lang="scss">
	@import "@/uni_uv.scss";
	@import "@/uni_xc.scss";
	@import "@/uni_xa.scss";
</style>