// import xcUniappUtils from '@/library/xcore/js/XcUniappUtils.js';

import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';

let xcUniappUtils_vm = null;
export default {
	appInit:function(vm){
		let that = this;
		xcUniappUtils_vm = vm;
	},
	onShow:function(func){
		let that = this;
		let filterResult = xcCloginUtils.filterPage();
		if(filterResult===true){
			xcUniappUtils_vm.$nextTick(func);
		}
	},
}