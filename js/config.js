app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider){
	
	$stateProvider
		.state('admin',{
			url:'/admin',
			templateUrl:'views/admin/common.html'
		})
		.state('admin.dashboard',{
			url:'/dashboard',
			templateUrl:'views/admin/dashboard.html'
		})
		
		/**
		 * Posts
		 */
		.state('admin.posts',{
			url:'/posts',
			templateUrl:'views/admin/post/list.html'
		});

		$urlRouterProvider.otherwise('admin/dashboard');

}])