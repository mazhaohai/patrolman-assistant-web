let API_URL = {
	v1: 'static/mock/camera.json',
	v2: 'static/mock/user.json'
};

// let urlProxy = new Proxy({
// 	toString () {
// 		return API_URL.v2;
// 	}
// },
//   {
// 	get: function (obj, prop) {
//     if (prop === 'v1') {
//       return API_URL.v1;
//     } else if (prop === 'v2') {
//       return API_URL.v2;
//     }
//     return obj[prop];
//   },
//   post:function(obj,prop){
//     if (prop === 'v1') {
//       return API_URL.v1;
//     } else if (prop === 'v2') {
//       return API_URL.v2;
//     }
//     return obj[prop];
//   }
// });

export default {
	BASE_URL: API_URL
};
