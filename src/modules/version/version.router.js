
// const NewSample = r => require.ensure([], () => r(require('./new-sample/new-sample')), 'beta');
// const ManageSample = r => require.ensure([], () => r(require('./manage-sample/manage-sample')), 'beta');
//const AddOursourceUser = r => require.ensure([], () => r(require('./add-outsource-user/add-outsource-user')), 'beta');
//const ReleaseJob = r => require.ensure([], () => r(require('./release-job/release-job')), 'beta');
//const ReleaseSubJob = r => require.ensure([], () => r(require('./release-sub-job/release-sub-job')), 'beta');
//const ExportUnit = r => require.ensure([], () => r(require('./export-unit/export-unit')), 'beta');
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
const Version = r => require.ensure([], () => r(require('./version')), 'version');
const Detail = r => require.ensure([], () => r(require('./detail')), 'version');
export default [{
	path: '/version',
	name: 'version',
	component: Version
},{
	path: '/versiondetail',
	name: 'versiondetail',
	component: Detail
}];

//export {BETA_ROUTER_INFO};
