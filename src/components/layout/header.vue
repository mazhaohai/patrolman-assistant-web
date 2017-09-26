<template>
	<div>
		<div class="page-header navbar navbar-fixed-top">
			<!-- BEGIN HEADER INNER -->
			<div class="page-header-inner ">
				<!-- BEGIN LOGO -->
				<div class='page-logo' style="color:#fff;padding-left: 10px;width:auto;">
					<h3 style='line-height: 50px;'>警务系统支撑平台</h3>
				</div>
				<!-- END LOGO -->
				<!-- BEGIN RESPONSIVE MENU TOGGLER -->
				<a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
					<span></span>
				</a>
				<!-- END RESPONSIVE MENU TOGGLER -->
				<!-- BEGIN TOP NAVIGATION MENU -->
				<div class="top-menu">
					<ul class="nav navbar-nav pull-right">
						<li class="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
							<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
								<i class="icon-calendar"></i>
								<span class="badge badge-default"> 3 </span>
							</a>
							<ul class="dropdown-menu extended tasks">
								<li class="external">
									<h3>You have
                                            <span class="bold">12 pending</span> tasks</h3>
									<a href="app_todo.html">view all</a>
								</li>
								<li>
									<ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
										<li>
											<a href="javascript:;">
												<span class="task">
                                                        <span class="desc">New release v1.2 </span>
												<span class="percent">30%</span>
												</span>
												<span class="progress">
                                                        <span style="width: 40%;" class="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                            <span class="sr-only">40% Complete</span>
												</span>
												</span>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>

						<li class="dropdown dropdown-user">
							<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
								<img alt="" class="img-circle" src="../../assets/user.jpg" />	
								<span class="username username-hide-on-mobile"> Nick </span>
								<i class="fa fa-angle-down"></i>
							</a>
							<ul class="dropdown-menu dropdown-menu-default">
								<li>
									<a href="page_user_profile_1.html">
										<i class="icon-user"></i> My Profile </a>
								</li>
							</ul>
						</li>

						<li class="dropdown dropdown-quick-sidebar-toggler">
							<a href="javascript:;" class="dropdown-toggle">
								<i class="icon-logout"></i>
							</a>
						</li>
						<!-- END QUICK SIDEBAR TOGGLER -->
					</ul>
				</div>
				<!-- END TOP NAVIGATION MENU -->
			</div>
			<!-- END HEADER INNER -->
		</div>
		<div class="clearfix"> </div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderLayout'
	};
</script>