app.controller('listCtrl', function ($scope) {
  $scope.deleteCompleted = function () {
    $scope.$parent.todos = $scope.$parent.todos.filter(function (item) {
      return !item.done;
    });
  };
});
