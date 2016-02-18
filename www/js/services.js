// angular.module('starter.services', [])

// .service('APIInterceptor', function($rootScope, $q) {
//   var service = this;

//   service.responseError = function(response) {
//     if (response.status === 401) {
//       $rootScope.$broadcast('unauthorized');
//     }
//     return $q.reject(response);–
//   };
// })

// .service('ItemsModel', function ($http) {
//   var service = this,
//       baseUrl = '/1/days/',
//       dayName = 'items/';

//   function getUrlForId(id) {
//     return getUrl() + id;
//   }

//   service.all = function () {
//     return $http.get(getUrl());
//   };

//   service.fetch = function (id) {
//     return $http.get(getUrlForId(id));
//   };

//   service.create = function (day) {
//     return $http.post(getUrl(), day);
//   };

//   service.update = function (id, day) {
//     return $http.put(getUrlForId(id), day);
//   };

//   service.delete = function (id) {
//     return $http.delete(getUrlForId(id));
//   };
// })

// .service('LoginService', function(Backand) {
//   var service = this;

//   service.signin = function(email, password, appName) {

//     //set the app name of Backand. In your app copy this to .config section with hard coded app name
//     Backand.setAppName(appName);

//     //call Backand for sign in
//     return Backand.signin(email, password);
//   };

//   service.signout = function() {
//     return Backand.signout();
//   };
// });
