
const Department = r => require.ensure([], () => r(require('./department')), 'department');
const Creation = r => require.ensure([], () => r(require('./creation')), 'user');
const Modification = r => require.ensure([], () => r(require('./modification')), 'user');
export default [{
	path: '/department',
	name: 'department',
	component: Department
},
{
	path: '/departmentcreation/',
	name: 'departmentcreation',
	component: Creation
},
{
	path: '/departmentmodification/:id',
	name: 'departmentmodification',
	component: Modification
}
];

//export {BETA_ROUTER_INFO};
