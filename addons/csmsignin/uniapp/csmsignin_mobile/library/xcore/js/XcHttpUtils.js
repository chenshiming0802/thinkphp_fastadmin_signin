/**
 * @usage 分页：
 * 		import XcHttpUtils from "@/library/xcore/js/XcHttpUtils.js";
 */

import config from "@/config/config.js";
import xcViewUtils from '@/library/xcore/js/XcViewUtils.js';
import Request from 'luch-request';
import xcCloginUtils from '@/library/xcore/js/XcCloginUtils';
import xcLangUtils from '@/library/xcore/js/XcLangUtils.js'
import {
	xsStringUtils
} from "xstack-for-javascript";

let XcHttpUtils_vm = null;
let http = null;
export default {
	appInit: function(vm) {
		let that = this;
		XcHttpUtils_vm = vm;

		http = new Request();
		http.setConfig((httpconfig) => {
			httpconfig.baseURL = that.getBaseUrl();
			return httpconfig;
		});
		http.interceptors.request.use((httpconfig) => {
			if (xcCloginUtils.getSessionToken()) {
				httpconfig.header = {
					'X-Requested-With': 'XMLHttpRequest',
					'clogintoken': xcCloginUtils.getSessionToken(),
					'accept-language': xcLangUtils.getLocale()
				}
			}
			return httpconfig
		}, httpconfig => {
			return Promise.reject(httpconfig)
		});
	},
	/**
	 * 默认值是： {loading:true}
	 */
	_getHttpConfig: function(httpconfig) {
		let that = this;
		httpconfig = (httpconfig == null) ? {} : httpconfig;
		httpconfig.loading = (httpconfig.loading == null) ? true : httpconfig.loading;
		return httpconfig;
	},
	// 小程序使用baseurl，本地调试为baseurl，H5强制改为/
	getBaseUrl: function() {
		let that = this;
		let url = config.baseUrl;
		// #ifdef WEB
		let currentUrl = window.location.href;
		if (!xsStringUtils.contains(currentUrl, "http://localhost:")) {
			url = "/api/";
		}
		// #endif
		return url;
	},
	/**
	 * 获取全部参数  把url所有参数存进一个对象
	 * @param {Object} content
	 */
	// _getUrlParam: function(key) {
	// 	let url = window.location.href;
	// 	let regex = new RegExp('[?&]' + key + '=([^&#]*)');
	// 	let match = regex.exec(url);
	// 	return match && decodeURIComponent(match[1].replace(/\+/g, ' ')) || null;
	// },
	_parseParam: function(content) {
		content = decodeURIComponent(content);
		let params = Object.create(null)
		let arrObj = content.split("&");
		if (arrObj.length > 0) {
			arrObj.forEach(item => {
				item = item.split("=");
				params[item[0]] = item[1]
			})
		}
		return params;
	},
	getUrlParam: function(options, key) {
		let that = this;
		if (options != null && options[key] != null) {
			return options[key];
		}
		// #ifdef MP-WEIXIN
		if (options != null && options.scene!=null){
			let param = that._parseParam(options.scene);		
			return param[key];
		}
		// #endif
		// #ifndef MP-WEIXIN
		if(true){
			let url = window.location.href;
			let regex = new RegExp('[?&]' + key + '=([^&#]*)');
			let match = regex.exec(url);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' ')) || null;
		}
		// #endif
	},
	row2form: function(row, formjson) {
		if (row == null) {
			xcViewUtils.message_error(xcLangUtils.t('xc.msg_error_emptydata'));
			return;
		}
		for (let key in formjson) {
			formjson[key] = row[key];
		}
	},
	/**
	 * @param {Object} filter eg:{qgsl_taskgroup_id:control.taskgroupid}
	 * @param {Object} op eg:{qgsl_taskgroup_id:"="}
	 * @param {Object} sort eg:id
	 * @param {Object} order eg:order
	 * @param {Object} offset eg:0
	 * @param {Object} limit eg:20
	 */
	buildparams: function(filter_tmp, op_tmp, sort, order, offset, limit) {
		let filter = {};
		let op = {};
		for (let index in filter_tmp) {
			if (filter_tmp[index] != null) {
				op[index] = op_tmp[index];
				filter[index] = filter_tmp[index];
			}
		}
		filter = JSON.stringify(filter);
		op = JSON.stringify(op);

		sort = sort ? sort : "id";
		order = order ? order : "order";
		offset = offset ? offset : "0";
		limit = limit ? limit : "999";

		return {
			"sort": sort,
			"order": order,
			"offset": offset,
			"limit": limit,
			"filter": filter,
			"op": op,
		}
	},
	_toast_httpmessage(http_res) {
		let that = this;

	},
	_processResult: function(res, success, failure) {
		let that = this;
		console.log(res);
		if (res != null && res.data != null && res.data.code == 0) {
			console.log(res.data.msg);
			if (res.data.msg == 'need_login') {
				xcViewUtils.message_error(xcLangUtils.t('xclogin.login.msg_please_login'));
				xcCloginUtils.clearSession();
				that._processFailureResult(res.data.msg, failure);
				return;
			}

			let isToastErr = true;
			if (failure != null) {
				let sr = failure(res.data.msg);
				isToastErr = (sr === true) ? true : false;
			}
			if (isToastErr === true) {
				xcViewUtils.message_error(res.data.msg);
			}
		} else if (res != null && res.data != null && res.data.code == 1) {
			let sr = success(res.data.data);
			if (sr === true) {
				xcViewUtils.message_success(res.data.msg ? $t('xc.msg_success_operate') : res.data.msg);
			}
		} else {
			if (failure != null) {
				failure("");
			}
		}
	},
	_processFailureResult: function(err, failure) {
		console.log(err);
		if (failure != null) {
			failure(err ? err : xcLangUtils.t('xc.msg_error_network'));
		}
	},
	get: function(url, data, success, failure, httpconfig) {
		let that = this;
		httpconfig = that._getHttpConfig(httpconfig);
		if (httpconfig.loading === true) {
			xcViewUtils.showLoading();
		}
		http.get(url, {
			'params': data
		}).then(res => {
			that._processResult(res, success, failure);
		}).catch(err => {
			that._processFailureResult(err, failure);
		}).finally(() => {
			if (httpconfig.loading === true) {
				xcViewUtils.hideLoading();
			}
		});
	},
	post: function(url, data, success, failure, httpconfig) {
		let that = this;
		httpconfig = that._getHttpConfig(httpconfig);

		if (httpconfig.loading === true) {
			xcViewUtils.showLoading();
		}
		http.post(url, data).then(res => {
			that._processResult(res, success, failure);
		}).catch(err => {
			that._processFailureResult(err, failure);
		}).finally(() => {
			if (httpconfig.loading === true) {
				xcViewUtils.hideLoading();
			}
		});
	},
	/**
	 * userage: 
	 * 	let bb = xcHttpUtils.buildparams({qgsl_taskgroup_id:""},{qgsl_taskgroup_id:"="},"weigh","desc");
	 * 	xcHttpUtils.queryList("taskgroup",bb,function(res){});
	 */
	queryList: function(objectname, buildparams, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.get("/" + config.addons + "/xp" + objectname_url + "/queryList", buildparams, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	getById: function(objectname, id, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.get("/" + config.addons + "/xp" + objectname_url + "/getById", {
			id: id
		}, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	// 从list查找id为对应值的记录
	getRowByFieldidFromList: function(list, id, idFieldName) {
		let that = this;
		for (let index in list) {
			let item = list[index];
			if (item[idFieldName] == id) {
				return item;
			}
		}
		return null;
	},
	get_dicts: function(objectname, success, failure, httpconfig) {
		let that = this;
		that.get_dicts_xtype('xp', objectname, success, failure, httpconfig);
	},
	get_dicts_xtype(xtype, objectname, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.get("/" + config.addons + "/" + xtype + "my" + objectname_url + "/getDicts", {}, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_getById: function(objectname, id, success, failure, httpconfig) {
		let that = this;
		that.my_getById_xtype('xp', objectname, id, success, failure, httpconfig);
	},
	my_getById_xtype(xtype, objectname, id, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.get("/" + config.addons + "/" + xtype + "my" + objectname_url + "/getById", {
			"id": id,
		}, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_delete: function(objectname, id, success, failure, httpconfig) {
		let that = this;
		that.my_delete_xtype('xp', objectname, id, success, failure, httpconfig);
	},
	my_delete_xtype(xtype, objectname, id, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.post("/" + config.addons + "/" + xtype + "my" + objectname_url + "/delete", {
			"id": id,
		}, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_confirm_delete: function(objectname, id, success, confirmmsg, failure, httpconfig) {
		let that = this;
		that.my_confirm_delete_xtype('xp', objectname, id, success, confirmmsg, failure, httpconfig);
	},
	my_confirm_delete_xtype: function(xtype, objectname, id, success, confirmmsg, failure, httpconfig) {
		let that = this;
		confirmmsg = (confirmmsg == null) ? xcLangUtils.t('xc.msg_confirm_delete') : confirmmsg;
		xcViewUtils.confirm(null, confirmmsg, function(confirm_res) {
			that.my_delete_xtype(xtype, objectname, id, function(res) {
				return success(res);
			});
		}, failure, httpconfig);
	},
	/**
	 * userage: 
	 * 	let bb = xcHttpUtils.buildparams({qgsl_taskgroup_id:""},{qgsl_taskgroup_id:"="},"weigh","desc");
	 * 	xcHttpUtils.my_queryList("taskgroup",bb,function(res){});
	 */
	my_queryList: function(objectname, buildparams, success, failure, httpconfig) {
		let that = this;
		that.my_queryList_xtype('xp', objectname, buildparams, success, failure, httpconfig);
	},
	my_queryList_xtype: function(xtype, objectname, buildparams, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);

		that.get("/" + config.addons + "/" + xtype + "my" + objectname_url + "/queryList", buildparams, function(
			res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_create: function(objectname, form, success, failure, httpconfig) {
		let that = this;
		that.my_create_xtype('xp', objectname, form, success, failure, httpconfig);
	},
	my_create_xtype: function(xtype, objectname, form, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.post("/" + config.addons + "/" + xtype + "my" + objectname_url + "/create", form,
			function(res) {
				return success(res);
			}, failure, httpconfig);
	},
	my_update: function(objectname, form, success, failure, httpconfig) {
		let that = this;
		that.my_update_xtype('xp', objectname, form, success, failure, httpconfig);
	},
	my_update_xtype: function(xtype, objectname, form, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.post("/" + config.addons + "/" + xtype + "my" + objectname_url + "/update", form,
			function(res) {
				return success(res);
			}, failure, httpconfig);
	},
	my_weigh: function(objectname, id1, id2, success, failure, httpconfig) {
		let that = this;
		that.my_weigh_xtype('xp', objectname, id1, id2, success, failure, httpconfig);
	},
	my_weigh_xtype: function(xtype, objectname, id1, id2, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.post("/" + config.addons + "/" + xtype + "my" + objectname_url + "/weigh", {
			id1: id1,
			id2: id2
		}, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_weighlist: function(objectname, models, success, failure, httpconfig) {
		let that = this;
		that.my_weighlist_xtype('xp', objectname, models, success, failure, httpconfig);
	},
	my_weighlist_xtype: function(xtype, objectname, models, success, failure, httpconfig) {
		let that = this;
		let param = [];
		for (let index in models) {
			let model = models[index];
			param[index] = {
				id: model.id,
				weigh: model.weigh,
				name: model.name
			};
		}
		let objectname_url = that.my_url_objectname(objectname);
		that.post("/" + config.addons + "/" + xtype + "my" + objectname_url + "/weighlist", param, function(res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_post: function(objectname, methodname, param, success, failure, httpconfig) {
		let that = this;
		that.my_post_xtype('xp', objectname, methodname, param, success, failure, httpconfig)
	},
	my_post_xtype: function(xtype, objectname, methodname, param, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.post("/" + config.addons + "/" + xtype + "my" + objectname_url + "/" + methodname, param, function(
			res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_get: function(objectname, methodname, param, success, failure, httpconfig) {
		let that = this;
		that.my_get_xtype("xp", objectname, methodname, param, success, failure, httpconfig);
	},
	my_get_xtype: function(xtype, objectname, methodname, param, success, failure, httpconfig) {
		let that = this;
		let objectname_url = that.my_url_objectname(objectname);
		that.get("/" + config.addons + "/" + xtype + "my" + objectname_url + "/" + methodname, param, function(
			res) {
			return success(res);
		}, failure, httpconfig);
	},
	my_url_objectname: function(objectname) {
		let that = this;
		let objectname_url = null;
		if (config.version != "community") {
			objectname_url = "_" + config.version + "_" + objectname;
		} else {
			objectname_url = "_" + objectname;
		}
		return objectname_url;
	},
	pageinfo: function() {
		let that = this;
		return {
			status: 'loadmore',
			page: 0,
			pagesize: 10,
			list: [],
			reset: function() {
				this.page = 0;
				this.list = [];
				this.status = 'loadmore';
			},
			isEnd: function() {
				return (this.status == 'nomore') ? true : false;
			},
			setLoading: function() {
				this.status = 'loading';
			},
			calcStatus: function(list) {
				if (list < this.pagesize) {
					this.status = 'nomore';
				} else {
					this.status = 'loadmore';
				}
			},
			appendList: function(list) {
				this.list = this.list.concat(list);
				return this.list;
			},
		};
	},
	queryPageList: function(objectname, buildparams, pageinfo, success, failure, httpconfig) {
		let that = this;
		// 如果没有数据，则不查询数据
		if (pageinfo.isEnd()) return;
		// 将页底设置为 loading 中
		pageinfo.setLoading();
		// 查询数据
		buildparams['offset'] = pageinfo.page * pageinfo.pagesize;
		buildparams['limit'] = pageinfo.pagesize;
		// 查询数据
		that.queryList(objectname, buildparams, function(res) {
			// success(res);
			pageinfo.page++;
			pageinfo.calcStatus(res.list);
			return success(res);
		}, failure, httpconfig);
	},
	my_queryPageList: function(objectname, buildparams, pageinfo, success, failure, httpconfig) {
		let that = this;
		that.my_queryPageList_xtype('xp', objectname, buildparams, pageinfo, success, failure, httpconfig);
	},
	my_queryPageList_xtype: function(xtype, objectname, buildparams, pageinfo, success, failure, httpconfig) {
		let that = this;
		// 如果没有数据，则不查询数据
		if (pageinfo.isEnd()) return;
		// 将页底设置为 loading 中
		pageinfo.setLoading();
		// 查询数据
		buildparams['offset'] = pageinfo.page * pageinfo.pagesize;
		buildparams['limit'] = pageinfo.pagesize;
		// 查询数据
		that.my_queryList_xtype(xtype, objectname, buildparams, function(res) {
			// success(res);
			pageinfo.page++;
			pageinfo.calcStatus(res.list);
			return success(res);
		}, failure, httpconfig);
	},
	upload: function(localfilepath, success, failure, httpconfig) {
		let that = this;
		let url = that.getBaseUrl();
		uni.uploadFile({
			url: url + "/" + config.addons + "/xcmy_api/upload",
			filePath: localfilepath,
			name: 'file',
			formData: {
				// 'xplogintoken': user.state.token,
				'clogintoken': xcCloginUtils.getSessionToken(),
			},
			success: (uploadFileRes) => {
				let result = JSON.parse(uploadFileRes.data);
				if (result.code == 1) {
					return success(result.data.fullurl);
				} else {
					that._processFailureResult(result.msg, failure);
				}

			}
		}, failure, httpconfig);
	},
}