/**
 * Created by Awai  S on 5/18/2016.
 */
(function () {

    'use strict';

    angular
        .module('cartModule');
    angular
        .module('sportsStore')
        .constant("productListActiveClass", "btn-primary")
        .constant("productListPageCount", 3)
        .controller('SportsController', SportsController);

    SportsController.$inject = ['$scope', '$filter', 'productListActiveClass', 'productListPageCount', 'cart'];
    function SportsController($scope, $filter, productListActiveClass, productListPageCount, cart) {
        /*locals*/
        var selectedCategory, pageSize, products;

        selectedCategory = null;
        pageSize = productListPageCount;

        products = [
            {
                name: "Bat", description: "white color", category: "Bat", price: 50
            },
            {
                name: "Bat", description: "black color", category: "Bat", price: 100
            },
            {
                name: "Shirt", description: "white color", category: "Shirt", price: 150
            },
            {
                name: "Shirt", description: "black color", category: "Shirt", price: 200
            },
            {
                name: "Trouser", description: "black color", category: "Pent", price: 150
            },
            {
                name: "Trouser", description: "white color", category: "Pent", price: 200
            },
            {
                name: "Ball", description: "white color", category: "Ball", price: 120
            },
            {
                name: "Ball", description: "black color", category: "Ball", price: 100
            },
            {
                name: "Wickets", description: "white pair", category: "Wicket", price: 300
            }
        ];

        /*VM-Properties*/
        $scope.products = products;

        /*VM-Functions*/
        $scope.selectPage = selectPage;
        $scope.getPageClass = getPageClass;
        $scope.selectCategory = selectCategory;
        $scope.categoryFilterFn = categoryFilterFn;
        $scope.getCategoryClass = getCategoryClass;
        $scope.addProductToCart = addProductToCart;


        /*Initialization*/

        /*declaration*/
        function selectPage(newPage) {
            $scope.selectedPage = newPage;
        }

        function getPageClass(page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        function selectCategory(newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        function categoryFilterFn(product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        function getCategoryClass(category) {
            return selectedCategory == category ? productListActiveClass : "btn-link";
        }

        function addProductToCart(product) {
            cart.addProduct(product.id, product.name, product.price);
        }
    }


})();
