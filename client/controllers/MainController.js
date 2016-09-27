app.controller('MainController', ['$scope', '$rootScope', '$reactive',  function($scope, $rootScope, $reactive) {
	$reactive(this).attach($scope);
	


	this.helpers({
		test: function(){
			return 'test testing this test'
		}
	})
	
	
}])
