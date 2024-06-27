(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.itens = "";
    $scope.outputMessage = "";

    $scope.countItems = function () {
      var cleanInput = $scope.itens.trim();
      if (cleanInput === "") {
        $scope.outputMessage = "Please enter data first";
        return;
      }

      var arrayItens = cleanInput.split(',');
      arrayItens = arrayItens.filter(function(item) {
        return item.trim() !== "";
      });

      if (arrayItens.length <= 3) {
        $scope.outputMessage = "Enjoy!";
      } else {
        $scope.outputMessage = "Too much!";
      }
    };
  }
})();
