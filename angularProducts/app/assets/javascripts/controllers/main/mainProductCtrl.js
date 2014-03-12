var ProductCtrl = function($scope, $routeParams, $location, $http, productData){

  // Need to pass a callback here, so we wait for the return from the
  // remote service
  productData.loadProduct($routeParams.productId, function(data){
      $scope.product = data.product
  });

  $scope.createProduct = function () {
    var data = {product: $scope.product };
    console.log(data);
    $http.post('/products', data).success(function () {
      console.log('saved!');
      $location.url('/');
    });
  };
};
