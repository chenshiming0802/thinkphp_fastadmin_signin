<template>
	<view>
		<uv-cell-group>
			<uv-cell title="XcDemo" isLink url="/pages/xcdemo/index"></uv-cell>
		</uv-cell-group>	
		<view @click="control_click"></view>
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
			}
		}
	}
</script>

<style lang="scss">

</style>