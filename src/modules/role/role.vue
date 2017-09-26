<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="index.html">角色管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<h1>Role</h1>
		<el-button @click="visible = true">按钮</el-button>
		<el-dialog v-model="visible" title="Hello world">
			<p>欢迎进入 Role</p>
		</el-dialog>
	</div>

</template>

<script>
	import { RoleSrv } from './role.service';
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
				visible: false
			}
		},
		created() {

		},
		methods: {
			goPage(path) {
				this.$router.push(path);
			},
			getList() {
				let params = {
					id: 1
				}
				HomeSrv.cameraList(params).then(res => {
					let result = res.data;
					if(result.code == 0) {
						this.userinfo = result.data.userinfo;
					} else {
						alert(data.msg);
					}

				}).catch(res => {

				})
			}
		},
		mounted() {

		}
	}
</script>

<style>

</style>
