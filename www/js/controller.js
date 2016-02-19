var app = angular.module('starter.controllers', ['ionic']);

app.controller('ItemListCtrl', ['$scope', 'ItemsFactory', 'ItemFactory', '$location',
    function ($scope, ItemsFactory, ItemFactory, $location) {

        // callback for ng-click 'editItem':
        $scope.editItem = function (itemId) {
            $location.path('/item-detail/' + itemId);
        };

        // callback for ng-click 'deleteitem':
        $scope.deleteItem = function (itemId) {
            ItemFactory.delete({ id: itemId });
            $scope.items = ItemFactory.query();
        };

        // callback for ng-click 'createItem':
        $scope.createNewItem = function () {
            $location.path('/item-creation');
        };

        $scope.items = ItemsFactory.query();
    }]);
