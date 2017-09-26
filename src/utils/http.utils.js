import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

function axiosPost(url,params) {
	let promise = new Promise((resolve,reject)=>{
		Vue.axios.post(url, params).then(response=>{
			resolve(response.data);
		}).catch(err=>{
			reject(err);
		});
	})
	return promise;
}

function axiosGet(url,params){
  let promise = new Promise((resolve,reject)=>{
    Vue.axios.get(url,{params}).then(response=>{
      resolve(response.data);
    }).catch(err=>{
      reject(err);
    });
  })
  return promise;
}

export default {
  post:axiosPost,
  get:axiosGet
}
