(function(app) {
  app.config(function($stateProvider) {
    return $stateProvider.state('location',{
        url: "/location/:value/",
        templateUrl: 'html/location.html',
        controller: 'locationCtrl',
        params: {
            paramOne: "locationValue"    
        }
    })
  });
  
  return app.controller('locationCtrl', function($rootScope, $state, $scope, $stateParams) {
        $scope.locationValue = $stateParams.paramOne;
        
  });
})(angular.module('myApp.location', ['ui.router']));