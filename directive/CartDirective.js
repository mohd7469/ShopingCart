/**
 * Created by Awai  S on 5/18/2016.
 */
(function () {

    'use strict';

    angular
        .module("cartModule")
        .directive("cartSummary", function (cart) {
            return {
                restrict: "E",
                templateUrl: "./cartSummary.html",
                controller: function ($scope) {
                    var cartData = cart.getProducts();
                    $scope.total = function () {
                        var total = 0;
                        for (var i = 0; i < cartData.length; i++) {
                            total += (cartData[i].price * cartData[i].count);
                        }
                        return total;
                    };
                    $scope.itemCount = function () {
                        var total = 0;
                        for (var i = 0; i < cartData.length; i++) {
                            total += cartData[i].count;
                        }
                        return total;
                    }
                }
            };
        });


})();
