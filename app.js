angular.module("app",[]).controller("appController",function($scope){
	
	
	$scope.album = new Image();
		
	
	$scope.carregarFotos = function(endereco){
		
		$scope.album = endereco+'/'+1+'.jpg';
//			console.log(endereco+'/'+i+'.jpg');
			
	};
	
});