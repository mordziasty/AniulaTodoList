app.controller('listCtrl', function ($scope) {
  $scope.deleteCompleted = function () {
    $scope.$parent.todos = $scope.$parent.todos.filter(function (item) {
      return !item.done;
    });
  };
  var fixHelper = function(e, ui) {
    ui.children().each(function() {
      $(this).width($(this).width());
    });
    return ui;
  };

  $("#sort").find("tbody").sortable({
    helper: fixHelper
  }).disableSelection();

});
