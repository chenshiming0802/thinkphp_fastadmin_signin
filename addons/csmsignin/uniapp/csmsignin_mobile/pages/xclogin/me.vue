<template>
	<view class="xc-wrap-grey">
		<view class="xp-view-profile">
			<section>
				<uv-avatar v-if="sr.userinfo==null" :text="$t('xclogin.me.label_anony_nickname')" shape="circle"
					size="100" hairline></uv-avatar>
				<uv-avatar v-if="sr.userinfo!=null" :src="sr.userinfo.avatar" shape="circle" size="100"
					hairline></uv-avatar>
				<uv-gap height="20"></uv-gap>

				<uv-button v-if="sr.userinfo==null|| sr.userinfo.mobile==null||sr.userinfo.mobile==''" text="立即登录"
					size="normal" @click="control_clickLogin"></uv-button>
				<text v-if="sr.userinfo!=null && sr.userinfo.mobile!=null && sr.userinfo.mobile!=''"
					class="xp-nickname">{{sr.userinfo.nickname}}</text>
				<xc-uv-clogin-loginform ref="xc-uv-clogin-loginform"
					@onLoginSuccess="onLoginSuccess"></xc-uv-clogin-loginform>
			</section>
		</view>
		<uv-gap height="20" v-if="sr.userinfo!=null"></uv-gap>
		<uv-cell-group v-if="sr.userinfo!=null">
			<uv-cell :title="$t('xclogin.me.label_linkme')" isLink url="/pages/xclogin/me_profile"></uv-cell>
		</uv-cell-group>
		<uv-gap height="20"></uv-gap>
		<uv-cell-group>
			<uv-cell :title="$t('xclogin.me.label_linkme')" isLink url="/pages/xclogin/policy?type=contactme"></uv-cell>
			<uv-cell :title="$t('xclogin.me.label_servicepolicy')" isLink
				url="/pages/xclogin/policy?type=service"></uv-cell>
			<uv-cell :title="$t('xclogin.me.label_privatepolicy')" isLink
				url="/pages/xclogin/policy?type=private"></uv-cell>
		</uv-cell-group>
		<!-- #ifndef MP-WEIXIN -->
		<view class="xp-view-logout" v-if="sr.userinfo!=null">
			<uv-button type="primary" :text="$t('xclogin.me.btn_logout')" @click="control_logout"></uv-button>
		</view>
		<!-- #endif -->
		<xa-uv-bottom-tabbar />
	</view>
</template>

<script>
	import config from "@/config/config.js";
	import xcUniappUtils from '@/library/xcore/js/XcUniappUtils.js';
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
		data() {
			return {
				config: config,
				xsStringUtils: xsStringUtils,
				xsDateUtils: xsDateUtils,
				sp: {
					id: null
				},
				sr: {
					userinfo: null
				},
				control: {},
			}
		},
		onLoad(options) {
			let that = this;
			that.sp.id = options.id;
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
				xcCloginUtils.getUserinfo(function(userinfo) {
					that.sr.userinfo = userinfo;
				});
			},
			onLoginSuccess(userinfo) {
				let that = this;
				that.sr.userinfo = userinfo;
			},
			control_clickLogin() {
				let that = this;
				that.$refs["xc-uv-clogin-loginform"].public_open();
			},
			control_logout() {
				let that = this;
				that.sr.userinfo = null;
				xcCloginUtils.clearSession();
				// #ifdef H5 || APP-PLUS 
				// xcCloginUtils.toLoginPage();
				// #endif
			},
		}
	}
</script>


<style lang="scss">
	.xp-view-profile {
		background-color: #374486;
		height: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 40px;
	}

	.xp-view-logout {
		padding: $uni-spacing-row-lg $uni-spacing-row-base;
	}

	.xp-nickname {
		color: white;
	}
</style>