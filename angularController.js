    /*var app = angular.module("myApp", []);
    app.controller("angularController", function ($scope, $http) {
                
        $http.get("https://api.github.com/users").then(function (response) {
            $scope.names = response.data;
        });
    });
*/

var app = angular.module("myApp", []);
app.controller("angularController", function ($scope, $http , $location) {
            $scope.names = [];
            $scope.shortList = []
            $scope.loadIndex = 10;

			$http.get("https://api.github.com/users").then(function (response) {
            $scope.names = response.data;
            for (var i = 0; i < 10; i++) {
				$scope.shortList.push($scope.names[i]);
				}

                    });
				

                $scope.showMore = function () {
                    if ($scope.loadIndex < $scope.names.length) {
						shortList = [] ;
                       i=0 ;
                        for ( $scope.loadIndex ; $scope.loadIndex < $scope.names.length && i<10  ; $scope.loadIndex++, i++) {
                            $scope.shortList.push($scope.names[$scope.loadIndex]);
                        }
                    }
					else{
						$scope.loadIndex = 0 ;
					}


                }
				
				$scope.getUser = function (id)
				{
					$http.get("https://api.github.com/users/" + id ).then(function (response) {
                    $scope.user = response.data;
					$location.url("/user/" + id );
				});}
				
 				
});