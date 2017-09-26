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
		<h1>用户管理</h1>

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
        }
			}
		},
		created() {
      //this.getList();
      this.postDemo();
		},
		methods: {
			goPage(path) {
				this.$router.push(path);
			},
			getList() {
			  //测试api：http://api.restful.5lux.com.cn/good/list_new/?id=4
				let params = {
					id: 4
				}
        UserSrv.list(params).then(res => {
				  console.log(res)
					let result = res.data;
					if(result.code == 0) {
						this.userinfo = result.data.userinfo;
					} else {
						alert(data.msg);
					}
				}).catch(err => {
          console.log(err)
				})
			},
      postDemo() {
        let params = {}
        UserSrv.postDemo(params).then(res => {
          console.log(res)
          let result = res.data;
          if(result.code == 0) {
            this.userinfo = result.data.userinfo;
          } else {
            alert(data.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      }
		},
		mounted() {

		}
	}
</script>

<style>

</style>
