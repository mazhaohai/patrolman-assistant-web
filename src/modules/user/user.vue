<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="#/">用户管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  	<el-form-item label="用户搜索">
			    <el-input v-model="formInline.user" placeholder="用户搜索"></el-input>
		  	</el-form-item>
		  	<el-form-item label="用户角色">
			    <el-select v-model="formInline.region" placeholder="用户角色">
			      	<el-option label="超级管理员" value="chaoji"></el-option>
			      	<el-option label="管理员" value="guanli"></el-option>
			      	<el-option label="普通用户" value="putong"></el-option>
			    </el-select>
		  	</el-form-item>
		  	<el-form-item>
		    	<el-button type="primary" @click="onSubmit">查询<i class="el-icon-search el-icon--right"></i></el-button>
		  	</el-form-item>
		  	<el-button type="primary" class="xj" @click="clickFn">新建<i class="el-icon-plus el-icon--right"></i></el-button>
		</el-form>
			<el-table :data="tableData" style="width: 100%">
      		<el-table-column prop="yhm" label="用户名">
      		</el-table-column>
      		<el-table-column prop="jh" label="警号">
      		</el-table-column>
      		<el-table-column prop="sfz" label="身份证号">
      		</el-table-column>
      		<el-table-column prop="userImg" label="头像">
      		</el-table-column>
      		<el-table-column prop="sjh" label="手机号">
      		</el-table-column>
      		<el-table-column prop="name" label="姓名">
      		</el-table-column>
      		<el-table-column prop="js" label="角色">
      		</el-table-column>
      		<el-table-column prop="bz" label="备注">
      		</el-table-column>
      		<el-table-column prop="cz" label="操作" width="150">
      			<template scope="scope">
			        <el-button type="primary" size='small' @click="detailUser(scope.$index, scope.row)">修改</el-button>
			        <el-button type="danger" size='small' @click="deleteUser(scope.$index, scope.row)">删除</el-button>
			      </template>
      		</el-table-column>
    	</el-table>
	</div>

</template>

<script>
	import { UserSrv } from './user.service';
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
	            	yhm: '郎就一个字',
	            	jh:'0000000000000001',
	            	sfz:'147858963308740214',
	            	tx:'',
	            	sjh:'17858952589',
		            name: '王小虎',
		            js:'超级管理员',
		            bz:'',
		            address: '上海市普陀区金沙江路 1518 弄'
	          	}, {
		            yhm: '就是浪',
		            jh:'0000000000000002',
		            sfz:'148577859509072887',
		            tx:'',
		            sjh:'17858952589',
		            name: '王小虎',
		            js:'超级管理员',
		            bz:'',
		            address: '上海市普陀区金沙江路 1517 弄'
	          	}]
			}
		},
		methods: {
			onSubmit() {
	        	console.log('submit!');
	      	},
	      	detailUser(index, row) {
	        	this.$router.push({name:'usermodification',params:{id:row.sfz}});
	      	},
	      	deleteUser(index, row) {
	        	
	      	},
	      	clickFn:function(){
		        this.$router.push('/usercreation');
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
	.el-table th>.cell {
		text-align: center;
	}

</style>
