<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="index.html">部门管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  	<el-form-item label="部门管理">
			    <el-input v-model="formInline.user" placeholder="用户搜索"></el-input>
		  	</el-form-item>
		  	<el-form-item>
		    	<el-button type="primary" @click="onSubmit">查询</el-button>
		  	</el-form-item>
		  	<el-button type="primary" class="xj" @click="clickFn">新建<i class="el-icon-upload el-icon--right"></i></el-button>
		</el-form>
		<el-table :data="tableData" style="width: 100%">
      		<el-table-column prop="bmmc" label="部门名称">
      		</el-table-column>
      		<el-table-column prop="sjbm" label="上级部门">
      		</el-table-column>
      		<el-table-column prop="lx" label="类型">
      		</el-table-column>
      		<el-table-column prop="bz" label="备注">
      		</el-table-column>
      		<el-table-column prop="cz" label="操作" width="200">
      			<template scope="scope">
			        <el-button type="primary" @click="detailDepartment(scope.$index, scope.row)">修改</el-button>
			        <el-button type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button>
			      </template>
      		</el-table-column>
    	</el-table>
	</div>

</template>

<script>
	import { DepartmentSrv } from './department.service';
	//用户信息
	let _userinfo = {
		name: '',
		age: ''
	};

	export default {
		data() {
			return {
				userinfo: _userinfo,
				isopen: true,
				visible: false,
				formInline: {
		          	user: '',
		          	region: ''
		        },
		        tableData:[{
	            	bmmc: '郎就一个字',
	            	sjbm:'0000000000000001',
	            	lx:'147858963308740214',
		            bz:''
	          	}, {
		            bmmc: '就是浪',
		            sjbm:'0000000000000002',
		            sfz:'148577859509072887',
		            lx:'',
		            bz:''
		           
	          	}]
			}
		},
		methods: {
			onSubmit() {
	        	console.log('submit!');
	      	},
	      	detailDepartment(index, row) {
	        	console.log(index, row);
	      	},
	      	deleteDepartment(index, row) {
	        	console.log(index, row);
	      	},
	      	clickFn:function(){
	      		this.$router.push('/departmentdetail');
	      	}
		},
		mounted() {

		}
	}
</script>

<style>

</style>
