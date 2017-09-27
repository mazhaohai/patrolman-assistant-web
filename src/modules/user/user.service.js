import Constants from '../../utils/constants';
import HttpUtils from '../../utils/http.utils';
const urls = {
	'updateuserinfo': 'http://api.restful.5lux.com.cn/good/list_new',
    'createuser':'http://www.baidu.com'
}

let UserSrv = {
	updateUserInfo: function (params = {}) {
		return HttpUtils.get(urls.list,params);
	},
  	createUser: function (params = {}) {
		return HttpUtils.get(urls.postDemo,params);
	},
	filters: function (params = {}) {
		return HttpUtils.post(params);
	},
	release: function (params = {}) {
		return HttpUtils.post(params);
	}


};

export {UserSrv};
