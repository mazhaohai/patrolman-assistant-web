import Vue from 'vue';
import Router from 'vue-router';

import UserRouters from '../modules/user/user.router';
import DepartmentRouters from '../modules/department/department.router';
import RoleRouters from '../modules/role/role.router';
import VersionRouters from '../modules/version/version.router';
import AlarmRouters from '../modules/alarm/alarm.router';

Vue.use(Router);

let router = new Router({
	routes: [
		...UserRouters,
		...DepartmentRouters,
		...RoleRouters,
		...VersionRouters,
		...AlarmRouters
	]
});

//router.beforeEach(RouterAuthHook);

function GlobalRouterPlugin() {}
GlobalRouterPlugin.install = function(Vue, options) {
	Vue.getRouter = function() {
		return router;
	};
};
Vue.use(GlobalRouterPlugin);

export {
	router
};
