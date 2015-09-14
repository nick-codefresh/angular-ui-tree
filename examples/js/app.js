(function () {
  'use strict';

  angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/basic-example', {
          controller: 'BasicExampleCtrl',
          templateUrl: 'views/basic-example.html'
        })
        .when('/cloning', {
          controller: 'CloningCtrl',
          templateUrl: 'views/cloning.html'
        })
        .when('/connected-trees', {
          controller: 'ConnectedTreesCtrl',
          templateUrl: 'views/connected-trees.html'
        })
        .when('/filter-nodes', {
          controller: 'FilterNodesCtrl',
          templateUrl: 'views/filter-nodes.html'
        })
        .when('/nodrop', {
          controller: 'BasicExampleCtrl',
          templateUrl: 'views/nodrop.html'
        })
        .when('/drop-confirmation', {
          controller: 'DropConfirmationCtrl',
          templateUrl: 'views/drop-confirmation.html'
        })
        .otherwise({
          redirectTo: '/basic-example'
        });
    }]);
})();
