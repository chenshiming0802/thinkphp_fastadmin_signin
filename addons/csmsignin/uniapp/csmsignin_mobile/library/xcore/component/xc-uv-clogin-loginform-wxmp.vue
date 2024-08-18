<template>
	<button class="uv-reset-button" open-type="getPhoneNumber" @getphonenumber="control_getPhoneNumber">{{$t('xclogin.login.btn_login')}}</button>
</template>
<script>
	import config from "@/config/config.js";
	import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
	import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
	import xcCloginUtils from '@/library/xcore/js/XcCloginUtils.js';
	import xcCWeixinMpLoginUtils from '@/library/xcore/js/XcCWeixinMpLoginUtils.js';
	import {
		xsStringUtils,
		xsDateUtils,
		xsArrayUtils
	} from 'xstack-for-javascript';

	export default {
		props: {
			modelValue: {
				type: Object,
				default: []
			},
			data: {
				type: Object,
				default: []
			},
		},
		watch: {
			'data': {
				handler(newVal, oldVal) {
					let that = this;
				},
			},
		},
		emits: ["onLoginSuccess", "onCheckAgreePolicy"],
		data() {
			return {
				config: config,
				xsStringUtils: xsStringUtils,
				xsDateUtils: xsDateUtils,
				sp: {},
				sr: {},
				control: {
					e:null
				}
			}
		},
		created() {
			let that = this;
			that.xinit();
			that.public_show();
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
			control_getPhoneNumber(e) {
				let that = this;
				that.control.e = e;
				that.$emit("onCheckAgreePolicy", that._submit);
			},
			_submit() {
				let that = this;
				xcCWeixinMpLoginUtils.getPhoneNumber(that.control.e, function(userinfo) {
					that.$emit("onLoginSuccess", userinfo);
				});
			}
		}
	}
</script>

<style lang="scss">

</style>