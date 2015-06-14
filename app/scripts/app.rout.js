'use strict';
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', // w przypadku wywołania "/" użyj szablonu deafult.html
    {
      templateUrl: 'scripts/core/default/default.html'
    })
    .when('/list', // w przypadku wywołania "/list" użyj szablonu "list.html" oraz kontrolera "listCtrl"
    {
      templateUrl: 'scripts/core/list/list.tpl.html',
      controller: 'listCtrl'
    })
    .when('/edit',
    {
      templateUrl: 'scripts/core/edit/edit.tpl.html',
      controller: 'editCtrl'
    })
    .when('/json',
    {
      templateUrl: 'scripts/core/json/json.tpl.html'
    })
    .otherwise({ //w przypadku wywaołania wyświetl szablon "Brak strony!"
    template: 'Brak strony!'
  });
});

