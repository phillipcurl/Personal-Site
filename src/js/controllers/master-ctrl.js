/**
 * Master Controller
 */

angular.module('myApp')
    .controller('MasterCtrl', ['$scope', '$timeout', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $timeout, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.showAlerts = true;

    $scope.menuItems = [
      {
        title: 'TeamDynamix Client Portal',
        icon: 'Dynamic Group Body - 1',
        url: '#/projects/clientportal',
        isActive: false,
        sidebarClass: ''
      },
      {
        title: 'TeamDynamix Website',
        content: 'Dynamic Group Body - 2',
        url: '#/projects/tdwebsite'
      },
      {
        title: 'Dynamic Group Header - 3',
        content: 'Dynamic Group Body - 3',
        url: '#/projects/clientportal'
      },
      {
        title: 'Dynamic Group Header - 4',
        content: 'Dynamic Group Body - 4',
        url: '#/projects/clientportal'
      },
      {
        title: 'Dynamic Group Header - 5',
        content: 'Dynamic Group Body - 5',
        url: '#/projects/clientportal'
      },
      {
        title: 'Dynamic Group Header - 6',
        content: 'Dynamic Group Body - 6',
        url: '#/projects/clientportal'
      }
    ];

    $timeout(function(){
      $scope.showAlerts = false;
    }, 7000);

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
}
