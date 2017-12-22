angular.module('taller').controller('ProductoCtrl', function($scope, $http) {

/*  $scope.productos = [{
     nombre: 'Laptop',
      precio: 2000
    },
    {
      nombre: 'Teclado',
      precio: 200
    }
  ];
*/

$http.get('http://192.168.1.44:9090/api/productos')
  .then(function(resp) {
    $scope.productos = resp.data;
  });
  $scope.producto = {
    nombre: 'Televisor',
    fecha: new Date(),
    precio: 456
  };

  $scope.guardar = function() {
    $http({
      url: 'http://192.168.1.44:9090/api/productos',
      method: 'POST',
      data: angular.toJson($scope.producto),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function(resp) {
      alert('Guardado Satisfactoriamene');
    })
  }
  $scope.editar = function(producto) {
    $scope.producto = producto;
  }


});
