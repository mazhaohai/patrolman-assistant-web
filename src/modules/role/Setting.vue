<template>
	<div>
		<div class="profile-sidebar" style="width:220px;">
			<div class="portlet light profile-sidebar-portlet ">
				<div class="profile-userpic">
					<img src="../../assets/logo.png" class="img-responsive" alt="" />
				</div>
				<div class="profile-usertitle">
					<div class="profile-usertitle-name" style="font-weight: normal;">刘德华</div>

				</div>
				<div class="profile-usermenu">
					<ul class="nav">
						<li :class='currentCompName=="Secret"?"active":""'>
							<a @click='changeComp("Secret")'>
								<i class="fa fa-recycle"></i>秘钥管理</a>
						</li>
						<li :class='currentCompName=="Userinfo"?"active":""'>
							<a @click='changeComp("Userinfo")'>
								<i class="fa fa-user"></i>个人设置</a>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<div class="profile-content">
			<component :is='currentComp'></component>
		</div>
	</div>
</template>

<script>
	import Userinfo from '@/pages/user/User'
	import Secret from '@/pages/secret/Secret'
	const _compoments={Userinfo,Secret}
	export default {
		data(){
			return {
				currentCompName:'Secret',
				currentComp:Secret
			}
		},
		components:_compoments,
		methods:{
			changeComp(compname){
				this.currentCompName=compname;
				this.currentComp=_compoments[compname];
			}
		},
		mounted(){
			this.$store.dispatch('setHeaderIsshow', true)
		}
	}
</script>

<style>

</style>