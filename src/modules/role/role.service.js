
import Constants from '../../utils/constants';
import HttpUtils from '../../utils/http.utils';

const urls = {
		'list': Constants.BASE_URL + '/job-units',
		'filters': Constants.BASE_URL + '/common/unit-state-filters',
		'release': Constants.BASE_URL + '/free-units/'
}

let RoleSrv = {

	list: function (params = {}) {
		return HttpUtils.post(this.urls.list,params);
	},
	filters: function (params = {}) {
		return HttpUtils.post(params);
	},
	release: function (params = {}) {
		return HttpUtils.post(params);
	}


};

export {RoleSrv};
