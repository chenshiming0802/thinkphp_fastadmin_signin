<template>
	<section>
		<view class="xc-wrap" v-if="!sr.conf">
			<uv-empty mode="data" marginTop="100px" text="没有会议,请联系管理员"></uv-empty>
		</view>
		<view class="xc-wrap" v-if="sr.conf">
			<xc-uniapp-swiper :files="sr.conf.images"></xc-uniapp-swiper>

			<view class="xc-block">
				<view class="xc-title">{{sr.conf.name}}</view>
				<view class="xc-content" v-if="sr.conf.meetdate!=null">会议时间: {{sr.conf.meetdate}}</view>
				<view class="xc-content" v-if="sr.conf.meetdate!=null">会议地点: {{sr.conf.meetaddress}}</view>
				<view class="xc-content" v-if="sr.conf.unsignedcontentq!=null">{{sr.conf.unsignedcontentq}}</view>

				<xc-uv-clogin-loginform ref="xc-uv-clogin-loginform"
					@onLoginSuccess="onLoginSuccess"></xc-uv-clogin-loginform>
				<uv-button v-if="!sr.confuser" class="xc-pt" type="primary" text="立即签到"
					@click="control_signin"></uv-button>

				<view class="xp-title-tag Y" v-if="sr.confuser">已签到</view>
				<view class="xp-title-tag N" v-if="!sr.confuser">未签到</view>
			</view>

			<section v-if="sr.confuser==null && sr.conf.unsignedcontentq!=null">
				<view class="xc-sep">&nbsp;</view>
				<view class="xc-block">
					<uv-parse :content="sr.conf.unsignedcontentq" />
				</view>
			</section>

			<section v-if="sr.confuser!=null && sr.conf.siginedcontent!=null">
				<view class="xc-sep">&nbsp;</view>
				<view class="xc-block">
					<uv-parse :content="sr.conf.siginedcontent" />
				</view>
			</section>

			<view class="xc-sep">&nbsp;</view>
			<view class="xc-block">
				<uv-tabs :list="sr.confinfos" @click="control_clickTab" keyName="title" :scrollable="true"></uv-tabs>
				<view class="xc-content"><uv-parse :content="control.info_content" /></view>
			</view>
			
		</view>
	</section>
</template>

<script>
	import config from "@/config/config.js";
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
					id: null
				},
				sr: {
					userinfo: null,
					conf: null, //会议信息
					confinfos: [], //会议item list
					confuser: null, //当前用户的签到信息
					signordernum: null, //签到名次
				},
				control: {
					info_content: "",
					loginStyle: {
						height: '80rpx',
						background: 'blue',
						color: '#fff',
					}
				},
				skeleton: [{
					type: 'line',
					num: 3,
					gap: '10px',
					style: ['width: 150px;', 'width: 200px;', 'width: 250px;'],
				}]
			}
		},
		onLoad(options) {
			let that = this;
			//let sp_id = options.id ? options.id : xcHttpUtils.getUrlParam("id");
			let sp_id = xcHttpUtils.getUrlParam(options,"id");
			that.sp.id = parseInt(sp_id);
			that.xinit();

		},
		onShow() {
			let that = this;
			that.$nextTick(function(res) {
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
				xcCloginUtils.getUserinfo(function(userinfo) {
					that.sr.userinfo = userinfo;
				});
			},
			public_show() {
				let that = this;
				xcHttpUtils.getById("conf", that.sp.id, function(res) {
					// xcHttpUtils.processRowImages(res.conf, ["images"]);
					// console.log('##',res.conf.images);

					that.sr.conf = res.conf;
					that.sr.confinfos = res.confinfos;
					that.sr.confuser = res.confuser;
					if (xsArrayUtils.length(that.sr.confinfos) > 0) {
						that.control.info_content = that.sr.confinfos[0].content;
					}
				})
			},
			public_reset() {
				let that = this;
				that.public_show();
			},
			onLoginSuccess(userinfo) {
				let that = this;
				that.sr.userinfo = userinfo;
				that._signin();
			},
			control_clickTab(item) {
				let that = this;
				that.control.info_content = item.content;
			},
			control_signin() {
				let that = this;
				if (that.sr.userinfo != null && that.sr.userinfo['mobile'] != null && that.sr.userinfo['mobile'] != "") {
					that._signin();
				} else {
					that.$refs["xc-uv-clogin-loginform"].public_open();
				}
			},
			_signin() {
				let that = this;
				xcHttpUtils.post("csmsignin/xp_conf/submitSignin", {
					confid: that.sp.id
				}, function(res) {

					that.sr.signordernum = res.signordernum;
					that.sr.confuser = res.confuser;
					xcViewUtils.toast("签到成功，您是第" + res.signordernum + "个签到人！");
					that.public_reset();
				});
			},

		}
	}
</script>

<style lang="scss">
	.xp-title-tag {
		position: absolute;
		top: 25px;
		right: 10px;
		border-radius: 10px;
		padding: 5px 10px;
	}

	.xp-title-tag.Y {
		background-color: $uni-color-warning;
		color: $uni-text-color;
	}

	.xp-title-tag.N {
		background-color: $uni-color-error;
		color: $uni-text-color-inverse;
	}
</style>