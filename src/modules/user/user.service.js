import Constants from '../../utils/constants';
import HttpUtils from '../../utils/http.utils';
const urls = {
		'list': 'http://api.restful.5lux.com.cn/good/list_new',
    'postDemo':'http://www.baidu.com'
}

let UserSrv = {
	list: function (params = {}) {
	  console.log(urls.list)
		return HttpUtils.get(urls.list,params);
	},
  postDemo: function (params = {}) {
	  console.log(urls.postDemo)
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
