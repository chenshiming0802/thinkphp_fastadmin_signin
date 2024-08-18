<template>
	<view class="xc-wrap">
		<uv-cell-group>
			<uv-cell :title="$t('xclogin.login.title')" isLink url="/pages/xclogin/login"></uv-cell>
			<uv-cell :title="$t('xclogin.me.title')" isLink url="/pages/xclogin/me"></uv-cell>
			<uv-cell title="DMO 列表数据 (水平选项卡)" isLink url="/pages/xcdemo/dmo/list_tabs"></uv-cell>
			<uv-cell title="DMO 列表数据 (垂直选项卡)" isLink url="/pages/xcdemo/dmo/list_vtabs"></uv-cell>
			<uv-cell title="DMO APPLY 管理" isLink url="/pages/xcdemo/dmoapply/list"></uv-cell>
			<uv-cell v-if="$i18n.locale=='en'" title="切换成中文" @click="control_switchLocale('zh')"></uv-cell>
			<uv-cell v-if="$i18n.locale=='zh'" title="切换成英文" @click="control_switchLocale('en')"></uv-cell>
		</uv-cell-group>
		<xa-uv-bottom-tabbar></xa-uv-bottom-tabbar>
	</view>

</template>
<script>
	import config from "@/config/config.js";
	import xcUniappUtils from '@/library/xcore/js/XcUniappUtils.js';
	import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
	import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
	import {
		xsStringUtils,
		xsDateUtils,
		xsArrayUtils
	} from 'xstack-for-javascript';

	export default {
		data() {
			return {
				config: config,
				xsStringUtils: xsStringUtils,
				xsDateUtils: xsDateUtils,
				sp: {
					id: null
				},
				sr: {
					row: []
				},
				control: {}
			}
		},
		onLoad(options) {
			let that = this;
			that.xinit();
		},
		onShow() {
			let that = this;
			xcUniappUtils.onShow(function() {
				that.public_show();
			});
		},
		onPullDownRefresh() {
			let that = this;
			setTimeout(function() {
				that.public_show();
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			xinit() {
				let that = this;
			},
			public_show() {
				let that = this;
			},
			public_reset() {
				let that = this;
				that.public_show();
			},
			control_switchLocale(locale) {
				let that = this;
				xcLangUtils.switchLocale(locale);
			}
		}
	}
</script>

<style lang="scss">

</style>