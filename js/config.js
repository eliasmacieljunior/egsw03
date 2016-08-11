app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider){
	
	$stateProvider
		.state('admin',{
			url:'/admin',
			templateUrl:'views/admin/navbar.html'
		})
		.state('admin.home',{
			url:'home',
			templateUrl:'views/admin/home.html'
		});

}])