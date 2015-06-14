'use strict';
app.controller('indexCtrl', function ($scope, $location, todos) {

  $scope.todos = todos;

  $scope.getClass = function (path) {
    if ($location.path().substr(0,path.length) === path) {
      return 'active';
    } else {
      return '';
    }
  };
});
