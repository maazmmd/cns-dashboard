(function(app) {
  app.config(function($stateProvider) {
    return $stateProvider.state('hcamp',{
        url: '/hcamp',
        templateUrl: 'html/healthCampDeatils.html',
        controller: 'hcampCtrl'
    })
  });
  return app.controller('hcampCtrl', function($rootScope, $state, $scope) {
        
  });
})(angular.module('myApp.hcamp', ['ui.router']));