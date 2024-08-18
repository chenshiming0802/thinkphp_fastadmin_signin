<!--https://doc.dcloud.net.cn/uniCloud/uni-id/summary.html#uni-id-router-->
<template>
	<view class="xc-wrap xp-wrap">
		<xc-uv-clogin-loginform ref="xc-uv-clogin-loginform" @onLoginSuccess="onLoginSuccess"
			:ispage="true"></xc-uv-clogin-loginform>
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
				sp: {},
				sr: {},
				control: {
					uniIdRedirectUrl: ''
				},

			}
		},
		onLoad(options) {
			let that = this;
			that.control.uniIdRedirectUrl = decodeURIComponent(options.uniIdRedirectUrl)
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
			public_reset() {
				let that = this;
				that.public_show();
			},
			public_show() {
				let that = this;
				that.$refs["xc-uv-clogin-loginform"].public_open();
			},
			onLoginSuccess(userinfo) {
				let that = this;
				let url = uni.getStorageSync('xcCloginUtils_beforelogin_url');
				if(url==null || url==""){
					url = "/#/";
				}
				uni.redirectTo({
					url: url
				})

			},
		}
	}
</script>

<style lang="scss">
	.xp-wrap {
		background-color: white !important;
	}
</style>