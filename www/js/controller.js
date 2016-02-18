angular.module('starter.controllers', [])

.controller('LoginCtrl', function($state, $rootScope, LoginService){
  var login = this;

  function signin() {
    LoginService.signin(login.email, login.password, login.appName)
        .then(function() {
          $rootScope.$broadcast('authorized');
          $state.go('tab.home');
        }, function(error) {
          console.log(error)
        })
  }

  function signout(){
    LoginService.signout()
        .then(function() {
          $state.go('tab.login');
        })

  }

  login.signin = signin;
  login.signout = signout;
})

.controller('homeCtrl', function(ItemsModel, $rootScope){
  var vm = this;

  function getAll() {
    ItemsModel.all()
        .then(function (result) {
          vm.data = result.data.data;
        });
  }

  function create(day) {
    ItemsModel.create(day)
        .then(function (result) {
          cancelCreate();
          getAll();
        });
  }

  function update(day) {
    ItemsModel.update(day.id, day)
        .then(function (result) {
          cancelEditing();
          getAll();
        });
  }

  function deleteday(id) {
    ItemsModel.delete(id)
        .then(function (result) {
          cancelEditing();
          getAll();
        });
  }

  function initCreateForm() {
    vm.newday = { name: '', description: '' };
  }

  function setEdited(day) {
    vm.edited = angular.copy(day);
    vm.isEditing = true;
  }

  function isCurrent(id) {
    return vm.edited !== null && vm.edited.id === id;
  }

  function cancelEditing() {
    vm.edited = null;
    vm.isEditing = false;
  }

  function cancelCreate() {
    initCreateForm();
    vm.isCreating = false;
  }

  vm.days = [];
  vm.edited = null;
  vm.isEditing = false;
  vm.isCreating = false;
  vm.getAll = getAll;
  vm.create = create;
  vm.update = update;
  vm.delete = deleteDay;
  vm.setEdited = setEdited;
  vm.isCurrent = isCurrent;
  vm.cancelEditing = cancelEditing;
  vm.cancelCreate = cancelCreate;

  $rootScope.$on('authorized', function() {
    getAll();
  });

  initCreateForm();
      getAll();

});

