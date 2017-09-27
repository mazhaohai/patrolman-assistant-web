<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="/department">部门管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  	<el-form-item label="部门管理">
			    <el-input v-model="formInline.user" placeholder="用户搜索"></el-input>
		  	</el-form-item>
		  	<el-form-item>
		    	<el-button type="primary" @click="onSubmit">查询<i class="el-icon-search el-icon--right"></i></el-button>
		  	</el-form-item>
		  	<el-button type="primary" class="xj" @click="clickFn">新建<i class="el-icon-plus el-icon--right"></i></el-button>
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
      		<el-table-column prop="cz" label="操作" width="150">
      			<template scope="scope">
			        <el-button type="primary" size='small' @click="detailDepartment(scope.$index, scope.row)">修改</el-button>
			        <el-button type="danger" size='small' @click="deleteDepartment(scope.$index, scope.row)">删除</el-button>
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
	            	sjbm:'湖北省武汉市公安局',
	            	lx:'超级管理员',
		            bz:'',
		            id:0
	          	}, {
		            bmmc: '就是浪',
		            sjbm:'湖南省武汉市公安局',
		            lx:'超级管理员',
		            bz:'',
		            id:1
	          	}]
			}
		},
		methods: {
			onSubmit() {
	        	console.log('submit!');
	      	},
	      	detailDepartment(index, row) {
	        	this.$router.push({name:'departmentmodification',params:{id:row.id}});
	      	},
	      	deleteDepartment(index, row) {
	        	console.log(index, row);
	      	},
	      	clickFn:function(){
	      		this.$router.push('/departmentcreation');
	      	}
		},
		mounted() {

		}
	}
</script>

<style scoped>
	.xj{
		float: right;
	}
	.el-form {
		margin-top: 10px;
	}
	.el-table th {
		text-align: center;
	}
</style>
