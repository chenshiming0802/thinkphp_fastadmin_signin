<template>
	<uv-popup ref="modal" round="5" v-if="!ispage">
		<view class="xc-block xp-block">
			<view class="xp-title">{{$t('xclogin.login.label_welcome_login')}} {{config[$i18n.locale+'_projectname']}}
			</view>

			<view class="xp-block-form">
				<!-- #ifndef MP-WEIXIN -->
				<xc-uv-clogin-loginform-mobileinput @onLoginSuccess="onLoginSuccess"
					@onCheckAgreePolicy="onCheckAgreePolicy"></xc-uv-clogin-loginform-mobileinput>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<xc-uv-clogin-loginform-wxmp @onLoginSuccess="onLoginSuccess"
					@onCheckAgreePolicy="onCheckAgreePolicy"></xc-uv-clogin-loginform-wxmp>
				<!-- #endif -->
			</view>

			<view class="xp-agreement">
				<xc-uv-single-checkbox v-model="control.agreementChecked"></xc-uv-single-checkbox>
				{{$t('xclogin.login.msg_please_agree')}}
				《<view class="xp-link-policy" @click="control_clickPolicy('service')">
					{{$t('xclogin.me.label_servicepolicy')}}
				</view>》
				《<view class="xp-link-policy" @click="control_clickPolicy('private')">
					{{$t('xclogin.me.label_privatepolicy')}}
				</view>》
			</view>
		</view>
	</uv-popup>
	<view class="xc-wrap mp-wrap-page" v-if="ispage && control.page_visible">
		<view class="xc-block xp-block">
			<view class="xp-title">{{$t('xclogin.login.label_welcome_login')}} {{config[$i18n.locale+'_projectname']}}
			</view>

			<view class="xp-block-form">
				<!-- #ifndef MP-WEIXIN -->
				<xc-uv-clogin-loginform-mobileinput @onLoginSuccess="onLoginSuccess"
					@onCheckAgreePolicy="onCheckAgreePolicy"></xc-uv-clogin-loginform-mobileinput>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<xc-uv-clogin-loginform-wxmp @onLoginSuccess="onLoginSuccess"
					@onCheckAgreePolicy="onCheckAgreePolicy"></xc-uv-clogin-loginform-wxmp>
				<!-- #endif -->
			</view>
			<view class="xp-agreement">
				<xc-uv-single-checkbox v-model="control.agreementChecked"></xc-uv-single-checkbox>
				{{$t('xclogin.login.msg_please_agree')}}
				《<view class="xp-link-policy" @click="control_clickPolicy('service')">
					{{$t('xclogin.me.label_servicepolicy')}}
				</view>》
				《<view class="xp-link-policy" @click="control_clickPolicy('private')">
					{{$t('xclogin.me.label_privatepolicy')}}
				</view>》
			</view>
		</view>
	</view>


	<uv-modal ref="aggreementModal" @confirm="control_clickModalAgreement" showCancelButton
		:cancelText="$t('xc.btn_cancel')" :confirmText="$t('xclogin.login.msg_please_agree')">
		<view class="xp-slot-content">
			{{$t('xclogin.login.msg_please_read')}}
			《<view class="xp-link-policy" @click="control_clickPolicy('service')">
				{{$t('xclogin.me.label_servicepolicy')}}</view>》
			《<view class="xp-link-policy" @click="control_clickPolicy('private')">
				{{$t('xclogin.me.label_privatepolicy')}}</view>》
		</view>
	</uv-modal>
</template>
<script>
	import config from "@/config/config.js";
	import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
	import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
	import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
	import {
		xsStringUtils,
		xsDateUtils,
		xsArrayUtils
	} from 'xstack-for-javascript';

	export default {
		props: {
			ispage: {
				type: Boolean,
				default: false,
			},
		},
		emits: ["onLoginSuccess"],
		data() {
			return {
				config: config,
				xsStringUtils: xsStringUtils,
				xsDateUtils: xsDateUtils,
				sp: {},
				sr: {},
				control: {
					agreementChecked: "N",
					func: null,
					page_visible: false,
				}
			}
		},
		created() {
			let that = this;
			that.$nextTick(function() {
				that.xinit();
				that.public_show();
			});
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
			public_open() {
				let that = this;
				that._open();
			},
			onLoginSuccess(userinfo) {
				let that = this;
				that.$emit("onLoginSuccess", userinfo);
				that._close();
			},
			onCheckAgreePolicy(func) {
				let that = this;
				that.control.func = func;
				if (that.control.agreementChecked == 'N') {
					that.$refs['aggreementModal'].open();
				} else {
					that.control.func();
				}
			},
			control_clickAgreement() {
				let that = this;
				that.control.agreementChecked = "Y";
				that.$refs['aggreementModal'].close();
			},
			control_clickPolicy(type) {
				let that = this;
				xcViewUtils.router_gotoPage('/pages/xclogin/policy', {
					type: type
				})
			},
			control_clickModalAgreement() {
				let that = this;
				that.control_clickAgreement();
				if (that.control.func) {
					that.control.func();
				}
			},
			_open() {
				let that = this;
				if (that.ispage) {
					that.control.page_visible = true;
				} else {
					that.$refs.modal.open();
				}
			},
			_close() {
				let that = this;
				if (that.ispage) {
					that.control.page_visible = false;
				} else {
					that.$refs.modal.close();
				}
			},
		}
	}
</script>

<style lang="scss">
	.xp-block {
		width: 350px;
		padding: $uni-spacing-row-base;
	}

	.xp-title {
		font-weight: bold;
		font-size: $uni-font-size-lg;
	}

	.xp-agreement {
		padding-top: $uni-spacing-row-base;
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;


	}

	.xp-link-policy {
		display: inline;
		text-decoration: underline;
	}

	.xp-block-form {
		padding: $uni-spacing-row-lg 0px;
	}

	.xp-slot-content {
		width: 350px;
	}

	.mp-wrap-page {
		width: 370px;
		margin: auto;

		.xp-title {
			margin-top: 100px;
		}
	}
</style>