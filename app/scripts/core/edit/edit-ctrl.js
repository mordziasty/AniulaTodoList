app.controller('editCtrl', function ($scope, $location, categories) {

  $scope.categories = categories;

  $scope.formData = { type: $scope.categories[0], estimates: $scope.estimates = 1 };

  $scope.addTodo = function () {
    $scope.$parent.todos.push({
      'title': $scope.formData.newTodo,
      'done': false,
      'type': $scope.formData.type,
      'estimates': $scope.formData.estimates,
      'date': $scope.formData.date
    });

    $location.path('/list');
  };
});

