
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab' : {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('tabs.list', {
      url: '/list',
      views: {
        'list-tab' : {
          templateUrl: 'templates/list.html',
          controller: 'ListController'
        }
      }
    })

    .state('tabs.detail', {
      url: '/list/:aId',
      views: {
        'list-tab' : {
          templateUrl: 'templates/detail.html',
          controller: 'ListController'
        }
      }
    })

    .state('tabs.calendar', {
      url: '/calendar',
      views: {
        'calendar-tab' : {
          templateUrl: 'templates/calendar.html',
          controller: 'CalendarController'
        }
      }
    })
    .state('tabs.information', {
      url: '/information',
      views: {
        'information-tab' : {
          templateUrl: 'templates/information.html',

        }
      }
    })
    .state('tabs.youtube', {
      url: '/youtube',
      views: {
        'youtube-tab' : {
          templateUrl: 'templates/youtube.html',

        }
      }
    })
.state('tabs.admin', {
      url: '/admin',
      views: {
        'admin-tab' : {
          templateUrl: 'templates/admin.html',
          controller: 'CalendarController'
        }
      }
    })
.state('tabs.update', {
      url: '/update',
      views: {
        'update-tab' : {
          templateUrl: 'templates/update.html',
          controller: 'CalendarController'

        }
      }
    })
  $urlRouterProvider.otherwise('/tab/home');
})

.controller('CalendarController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
    $http.get('js/data.json').success(function(data) {
      $scope.calendar = data.calendar;
       $scope.data = { showDelete: false, showReorder: false };

      $scope.onItemDelete = function(dayIndex, item) {
        $scope.calendar[dayIndex].schedule.splice($scope.calendar[dayIndex].schedule.indexOf(item), 1);
      }

      $scope.doRefresh =function() {
      $http.get('js/data.json').success(function(data) {
          $scope.calendar = data.calendar;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      }
    });
}])

.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
    $http.get('js/data.json').success(function(data) {
      $scope.artists = data.artists;
      $scope.whichartist=$state.params.aId;


      $scope.onItemDelete = function(item) {
        $scope.calendar.splice($scope.calendar.indexOf(item), 1);
      }

      $scope.doRefresh =function() {
      $http.get('js/data.json').success(function(data) {
          $scope.artists = data;
          $scope.$broadcast('scroll.refreshComplete');
        });
      }

      $scope.toggleStar = function(item) {
        item.star = !item.star;
      }

    });
}]);


