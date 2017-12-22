  'use strict';
  angular.module('taller', [
    'ui.router',
  ]);

  angular.module('taller').controller('ProductoCtrl', function($scope, $http) {

    $http.get('/example/data.json').then(function(resp) {
      $scope.persona = resp.data;
    })

  })


  angular.module('taller').controller('MenuCtrl', function($scope, $http) {
    $http.get('/example/menu.json').then(function(resp) {


        $scope.valores = resp.data;

    })
  });
