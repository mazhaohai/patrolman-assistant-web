
import Constants from '../../utils/constants';
import HttpUtils from '../../utils/http.utils';

const urls = {
		'cameraUrl': Constants.BASE_URL.v1,
		'userUrl':Constants.BASE_URL.v2
}

let AlarmSrv = {

	cameraList: function (params = {}) {
		return HttpUtils.get(urls.cameraUrl,params);
	},
  userList: function (params = {}) {
		return HttpUtils.get(urls.userUrl,params);
	},

};

export {AlarmSrv};
