# vue-metric

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1、vue2.0组件之间传递参数有两种方式，
	第一种是通过vuex（详细可以参考vuex文档），进行数据统一管理，
	组建中设置数据方式：this.$store.dispatch(action的函数名称,data)
	组件中获取数据方式：this.$store.state.自定义data.id
	第二种是通过vuex-router进行参数传递，这里会有两种情况，分别是钩子函数中的next()和路由跳转中的this.$router.push()
	写法上都一样
	next({path:'/detail',query:{id:1}})
	this.$router.push({path:'/detail',query:{id:1}})
	组件中的接收方式：this.$route.query.id
	
vue2.0相关资料：
	vue2.0：http://www.shouce.ren/api/view/a/11704
	vue-router：http://www.shouce.ren/api/view/a/11762
	vuex:http://www.shouce.ren/api/view/a/11734
	vue-router:history模式IIS配置
		http://www.cnblogs.com/zzsdream/p/6576639.html
	解决在IE 9上使用Vuex的过程中，出现如下错误：
		SCRIPT5022: [vuex] vuex requires a Promise polyfill in this browser. 
	        安装：npm install --save-dev babel-polyfill
		webpack.base.conf.js中修改entry入口配置为
			entry: {
			    app:  ["babel-polyfill", "./src/main.js"]
			},
			
vue2.0使用地方插件实例：https://github.com/imcvampire/vue-axios

vuex在store中存储的数据相当于是全局变量，刷新页面后数据会消失，vuex适用场景单页面多组件以及嵌套组件之间通信，如果涉及到页面之间通信，可以通过路由传参；