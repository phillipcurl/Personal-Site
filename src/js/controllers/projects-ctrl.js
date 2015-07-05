/**
 * Alerts Controller
 */

angular
    .module('myApp')
    .controller('ProjectsCtrl', ['$scope', ProjectsCtrl]);

function ProjectsCtrl($scope) {
  $scope.oneAtATime = true;

    $scope.projects = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      },
      {
        title: 'Dynamic Group Header - 3',
        content: 'Dynamic Group Body - 3'
      },
      {
        title: 'Dynamic Group Header - 4',
        content: 'Dynamic Group Body - 4'
      },
      {
        title: 'Dynamic Group Header - 5',
        content: 'Dynamic Group Body - 5'
      },
      {
        title: 'Dynamic Group Header - 6',
        content: 'Dynamic Group Body - 6'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
}
