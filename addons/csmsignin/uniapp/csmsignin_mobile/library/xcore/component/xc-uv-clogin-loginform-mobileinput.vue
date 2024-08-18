<template>
	<uv-form labelPosition="left" :model="control.form" :rules="control.rules" ref="form" labelWidth="80px">
		<uv-form-item :label="$t('xclogin._model_.mobile')" prop="mobile">
			<uv-input type="number" v-model="control.form.mobile" :placeholder="$t('xclogin.login.msg_input_mobile')" />
		</uv-form-item>
		<uv-form-item :label="$t('xclogin._model_.captcha')" prop="captcha">
			<uv-input type="number" v-model="control.form.captcha" :placeholder="$t('xclogin.login.msg_input_ccode')">
				<template v-slot:suffix>
					<uv-toast ref="toast"></uv-toast>
					<uv-code :start-text="$t('xclogin.login.msg_get_ccode')"
						:end-text="$t('xclogin.login.msg_reget_ccode')"
						:changeText="$t('xclogin.login.msg_countdown_ccode')" keep-running
						:seconds="controlcode.seconds" ref="code" @change="controlcode_codeChange"></uv-code>
					<uv-button @click="controlcode_getCode" :text="control.tips" type="success"
						size="mini">{{controlcode.tips}}</uv-button>
				</template>
			</uv-input>
		</uv-form-item>
		<uv-button type="primary" :text="$t('xclogin.login.btn_login')" customStyle="margin-top: 10px"
			@click="control_submit"></uv-button>
	</uv-form>

</template>
<script>
	import config from "@/config/config.js";
	import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
	import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
	import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
	import xcLangUtils from '@/library/xcore/js/XcLangUtils.js';
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
				xcLangUtils: xcLangUtils,
				sp: {},
				sr: {},
				control: {
					form: {
						mobile: "",
						captcha: "",
					},
					rules: {
						mobile: {
							type: 'string',
							required: true,
							len: 11,
							message: xcLangUtils.t('xclogin.login.msg_mobile_error_format'),
							trigger: ['blur']
						},
						captcha: {
							type: 'string',
							required: true,
							len: 4,
							message: xcLangUtils.t('xclogin.login.msg_input_ccode'),
							trigger: ['blur']
						},
					}
				},
				controlcode: {
					tips: '',
					seconds: 60
				},
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
				// #ifdef APP-PLUS
				console.log("app#get that.sp.push_clientid");
				plus.push.getClientInfoAsync((info) => {
					that.sp.push_clientid = info["clientid"];
				});
				// #endif
			},
			public_show() {
				let that = this;
			},
			public_reset() {
				let that = this;
				that.public_show();
			},
			control_submit() {
				let that = this;
				that.$emit("onCheckAgreePolicy", that._submit);
			},
			_submit() {
				console.log('-submit');
				let that = this;

				that.$refs.form.validate().then(res => {
					xcHttpUtils.post("/" + config.addons + '/xc_clogin_api/mobilelogin', {
						"mobile": that.control.form.mobile,
						"captcha": that.control.form.captcha,
					}, function(res) {

						let token = res.userinfo.token;
						xcCloginUtils.setSessionToken(token);

						// 在APP中有推送消息的clientid，保存在clogininfo表中
						if (that.sp.push_clientid != null || that.sp.push_clientid != '') {
							xcHttpUtils.my_post_xtype('xc', 'clogininfo', 'save', {
								'setting_key': "app_push_clientid",
								'setting_value': that.sp.push_clientid,
							}, function(res2) {
								that.$emit("onLoginSuccess", res.userinfo);
							});
						} else {
							that.$emit("onLoginSuccess", res.userinfo);
						}
					}, function(errmsg) {
						that.control.errmsg = errmsg;
						that.control.form.captcha = "";
						return false;
					});
				});




			},
			controlcode_codeChange(text) {
				this.controlcode.tips = text;
			},
			controlcode_getCode() {
				let that = this;
				console.log(that.$refs.code);
				if (that.$refs.code.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: that.$t('xclogin.login.msg_getting_ccode')
					});
					xcHttpUtils.post("sms/send", {
						mobile: that.control.form.mobile,
						event: "mobilelogin"
					}, function(res) {
						xcViewUtils.message_success(that.$t('xclogin.login.msg_already_send_ccode'));
						that.$refs.code.start();
					}, function(e) {
						xcViewUtils.message_error(e);
					});
				} else {
					xcViewUtils.message_success(that.$t('xclogin.login.msg_send_after_ccode'));
				}
			},
		}
	}
</script>

<style lang="scss">

</style>