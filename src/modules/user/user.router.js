// const NewSample = r => require.ensure([], () => r(require('./new-sample/new-sample')), 'beta');
//const AddOursourceUser = r => require.ensure([], () => r(require('./add-outsource-user/add-outsource-user')), 'beta');

//const BETA_PATH_PREFIX = '/beta';
//
//const BETA_ROUTER_INFO = {
//	'root': BETA_PATH_PREFIX,
//	// 'new-sample': BETA_PATH_PREFIX + '/new-sample',
//	// 'manage-sample': BETA_PATH_PREFIX + '/manage-sample',
//	'add-outsource-user': BETA_PATH_PREFIX + '/add-outsource-user',
//	'release-job': BETA_PATH_PREFIX + '/release-job',
//	'release-sub-job': BETA_PATH_PREFIX + '/release-sub-job/:id',
//	'export-unit': BETA_PATH_PREFIX + '/export-unit'
//};
const User = r => require.ensure([], () => r(require('./user')), 'user');
const Detail = r => require.ensure([], () => r(require('./detail')), 'user');
export default [{
	path: '/',
	name: 'user',
	component: User
},{
	path: '/userdetail',
	name: 'userdetail',
	component: Detail
}];

//export {BETA_ROUTER_INFO};
