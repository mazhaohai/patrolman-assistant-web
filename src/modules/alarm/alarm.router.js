
// const NewSample = r => require.ensure([], () => r(require('./new-sample/new-sample')), 'beta');
// const ManageSample = r => require.ensure([], () => r(require('./manage-sample/manage-sample')), 'beta');
//
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
const Alarm = r => require.ensure([], () => r(require('./alarm')), 'alarm');
export default [{
	path: '/alarm',
	name: 'alarm',
	component: Alarm
}
];
