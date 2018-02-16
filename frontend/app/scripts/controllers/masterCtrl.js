'use strict';

console.log("inside main controller");

angular.module('almApp')
  .controller('mainCtrl',function($scope,$http){
	console.log('inside mainCtrl');
   $http.get('http://localhost:3010/alm/get_details').success(function(response){
        console.log(response);
        $scope.listOfProjects = response;
    });
  });
