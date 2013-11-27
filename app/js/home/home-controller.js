angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
  $scope.title = "Home";

  $scope.messages = [
    {
        me: true,
        name: 'Jack Sparrow',
        time: '12 mins ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
        img: 'http://placehold.it/50/FA6F57/fff&text=ME'
    },
    {
        name: 'Bhaumik Patel',
        time: '12 mins ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
        img: 'http://placehold.it/50/55c1e7/fff&text=U'
    },
    {
        name: 'Bhaumik Patel',
        time: '12 mins ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
        img: 'http://placehold.it/50/55c1e7/fff&text=U'
    },
    {
        me: true,
        name: 'Jack Sparrow',
        time: '12 mins ago',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
        img: 'http://placehold.it/50/FA6F57/fff&text=ME'
    }
  ];

  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});
