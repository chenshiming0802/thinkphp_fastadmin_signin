<template>
	<swiper v-if="control.list.length>1" :autoplay="true" @change="control_changeSwiper" :current="control.currentIndex"
		:style="{ height: control.swiperHeight + 'px' }">
		<swiper-item v-for="(item ,index) in control.list" :key="index">
			<view class="swiper-item">
				<image :id="'xp-item-' + index"  class="image" :src="item" mode="widthFix" />
			</view>
		</swiper-item>
	</swiper>
	<image v-if="control.list.length==1" class="image" :src="control.list[0]" mode="widthFix" />
</template>
<script>
	import mixin from "@climblee/uv-ui/libs/mixin/mixin";
import config from "@/config/config.js";
	import xcHttpUtils from '@/library/xcore/js/XcHttpUtils.js';
	import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
	import {
		xsStringUtils,
		xsDateUtils,
		xsArrayUtils
	} from 'xstack-for-javascript';

	export default {
		props: {
			files: {
				type: String,
				default: null
			},
		},
		watch: {
			'files': {
				handler(newVal, oldVal) {
					let that = this;
					
					if(that.list.length>1){
						this.$nextTick(() => {
							that.setSwiperHeight();
						});
					}
				},
			},
		},
		data() {
			return {
				config: config,
				xsStringUtils: xsStringUtils,
				xsDateUtils: xsDateUtils,
				sp: {},
				sr: {},
				control: {
					list:[],
					swiperHeight: 0,
					currentIndex: 0,
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
				
				that.control.list = xsStringUtils.split(that.files,',');
				
				if(that.control.list.length>1){
					setTimeout(function(){
						that.setSwiperHeight();
					},100);
				}
			},
			public_reset() {
				let that = this;
				that.public_show();
			},
			control_changeSwiper(e) {	
				this.$nextTick(() => {
					this.setSwiperHeight();
				});
			},
			setSwiperHeight() {
				let that = this;
				let element = "#xp-item-0";// + this.currentIndex;
				let query = uni.createSelectorQuery().in(that);
				query.select(element).boundingClientRect();
				query.exec((res) => {
					if (res && res[0]) {
						that.control.swiperHeight = res[0].height;
					}
				});
			},
			
		}
	}
</script>

<style lang="scss">
.swiper-item,.image{
	width: 100%;
}
</style>