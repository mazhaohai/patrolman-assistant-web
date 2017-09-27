
const User = r => require.ensure([], () => r(require('./user')), 'user');
const Creation = r => require.ensure([], () => r(require('./creation')), 'user');
const Modification = r => require.ensure([], () => r(require('./modification')), 'user');
export default [{
	path: '/',
	name: 'user',
	component: User
},{
	path: '/usercreation',
	name: 'usercreation',
	component: Creation
},{
	path: '/usermodification/:id',
	name: 'usermodification',
	component: Modification
}];

//export {BETA_ROUTER_INFO};
