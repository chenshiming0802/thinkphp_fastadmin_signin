<template>
	<view class="xc-wrap">
		<view class="xc-block">
			<view class="xc-title">{{$t('xclogin.me_delete.msg_delete_risk_tips')}}</view>
			<view class="xc-content">{{$t('xclogin.me_delete.msg_delete_risk_1')}}</view>
			<view class="xc-content">{{$t('xclogin.me_delete.msg_delete_risk_2')}}</view>
			<uv-button type="primary" :text="$t('xclogin.me_delete.btn_delete')" @click="control_submit"></uv-button>
		</view>
	</view>
</template>

<script>
	import config from "@/config/config.js";
	import xcUniappUtils from '@/library/xcore/js/XcUniappUtils.js';
	import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
	import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
	import xcCloginUtils from '@/library/xcore/js/XcCloginUtils.js';
	
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
			public_reset() {
				let that = this;
				that.public_show();
			},
			public_show() {
				let that = this;
			},
			control_submit: function() {
				let that = this;
				xcViewUtils.confirm(null, that.$t('xclogin.me_delete.msg_confirm_delete'), function() {
					xcHttpUtils.my_get_xtype("xc", 'cloginApi', "deleteUserinfo", [], function() {
						xcViewUtils.message_success(that.$t('xclogin.me_delete.msg_delete_success'), function() {
							xcCloginUtils.clearSession();
							uni.reLaunch({
								url: "/pages/index/index"
							});
						});
					})
				})

			}
		}
	}
</script>

<style lang="scss">

</style>