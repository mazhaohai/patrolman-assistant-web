<template>
	<div class="page-sidebar-wrapper">

		<div class="page-sidebar navbar-collapse collapse">

			<ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">

				<li class="sidebar-toggler-wrapper hide">
					<div class="sidebar-toggler">
						<span></span>
					</div>
				</li>

				<!--<li class="sidebar-search-wrapper">-->

					<!--<form class="sidebar-search  " action="page_general_search_3.html" method="POST">-->
						<!--<a href="javascript:;" class="remove">-->
							<!--<i class="icon-close"></i>-->
						<!--</a>-->
						<!--<div class="input-group">-->
							<!--<input type="text" class="form-control" placeholder="Search...">-->
							<!--<span class="input-group-btn">-->
                  <!--<a href="javascript:;" class="btn submit">-->
              <!--<i class="icon-magnifier"></i>-->
            <!--</a>-->
              <!--</span>-->
						<!--</div>-->
					<!--</form>-->
					<!--&lt;!&ndash; END RESPONSIVE QUICK SEARCH FORM &ndash;&gt;-->
				<!--</li>-->
				<!--<li class="nav-item start active open">-->
					<!--<a href="javascript:;" class="nav-link nav-toggle">-->
						<!--<i class="icon-home"></i>-->
						<!--<span class="title">主页</span>-->
						<!--<span class="selected"></span>-->
						<!--<span class="arrow open"></span>-->
					<!--</a>-->
					<!--<ul class="sub-menu">-->
						<li class="nav-item start active open">
							<a href="#/" class="nav-link ">
								<i class="icon-bar-chart"></i>
								<span class="title">用户管理</span>
								<span class="selected"></span>
							</a>
						</li>
						<li class="nav-item start ">
							<a href="#department" class="nav-link ">
								<i class="icon-bulb"></i>
								<span class="title">部门管理</span>
								<span class=""></span>
							</a>
						</li>
						<li class="nav-item start ">
							<a href="#role" class="nav-link ">
								<i class="icon-graph"></i>
								<span class="title">角色管理</span>
								<span class=""></span>
							</a>
						</li>
            <li class="nav-item start ">
							<a href="#version" class="nav-link ">
								<i class="icon-graph"></i>
								<span class="title">版本管理</span>
								<span class=""></span>
							</a>
						</li>
            <li class="nav-item start ">
							<a href="#alarm" class="nav-link ">
								<i class="icon-graph"></i>
								<span class="title">报警配置</span>
								<span class=""></span>
							</a>
						</li>
					<!--</ul>-->
				<!--</li>-->
				<!--<li class="heading">-->
					<!--<h3 class="uppercase">Features</h3>-->
				<!--</li>-->
				<!--<li class="nav-item  ">-->
					<!--<a href="javascript:;" class="nav-link nav-toggle">-->
						<!--<i class="icon-diamond"></i>-->
						<!--<span class="title">UI Features</span>-->
						<!--<span class="arrow"></span>-->
					<!--</a>-->
					<!--<ul class="sub-menu">-->
						<!--<li class="nav-item  ">-->
							<!--<a href="ui_colors.html" class="nav-link ">-->
								<!--<span class="title">Color Library</span>-->
							<!--</a>-->
						<!--</li>-->
						<!--<li class="nav-item  ">-->
							<!--<a href="ui_general.html" class="nav-link ">-->
								<!--<span class="title">General Components</span>-->
							<!--</a>-->
						<!--</li>-->

					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MenuLayout'
	};
</script>
