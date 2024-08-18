import uvUI from '@climblee/uv-ui'
import App from './App'
import {
	xsDateUtils,
	xsDatetimeUtils
} from 'xstack-for-javascript';
import {
	createSSRApp
} from 'vue'
import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
import xcHttpUtils from "@/library/xcore/js/XcHttpUtils";
import xcLangUtils from '@/library/xcore/js/XcLangUtils';

export function createApp() {
	const app = createSSRApp(App)
	app.use(uvUI)
	app.use(xcLangUtils.createI18n());
	uni.$uv.config.unit = 'px';

	return {
		app
	}
}