var CreateProductCtrl = function($scope, $location, productData){
    $scope.data = productData.data;

    // clear the new product form fields
    $scope.formData = {
        newProductName: '',
        newProductDescription: '',
        newProductPrice: ''
    };

    // $scope.navHome = function(){
    //     $location.url('/');
    // };

    $scope.createProduct = function(){
        productData.createProduct($scope.formData, function(data){
            productData.products.push(data.product);
            console.log("Successfully created a new product");
            // go to the main products page
            $location.url('/');
        });
    };

    $scope.clearProduct = function(){
        $scope.formData.newProductName = '';
        $scope.formData.newProductDescription = '';
        $scope.formData.newProductPrice = '';
    };

};
