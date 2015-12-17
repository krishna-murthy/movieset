'use strict';

angular.module('movie-set', [
])
.config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<[');
        $interpolateProvider.endSymbol(']>');
}])
.controller('MoviesetCtrl', [
    '$scope', '$http',
    function ($scope, $http) {
    $scope.info = {};
    $scope.pageHeader = 'Movie database - Simplified Movie Browsing';
    $scope.pageTagline = 'Query, find and watch!';
}]);
