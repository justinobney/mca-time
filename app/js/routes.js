angular.module("app").config(function($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider.state('login', {
    templateUrl: 'js/login/login.html',
    controller: 'LoginController',
    url: '/login'
  });

  $stateProvider.state('home', {
    abstract: true,
    templateUrl: 'js/home/layout.html'
  });

  $stateProvider.state('home.index', {
    url: '/home',
    views: {
      "home-navigation": {
        templateUrl: 'js/home/home.navigation.html',
      },
      "home-content": {
        templateUrl: 'js/home/home.index.html',
      }
    }
  });

  $stateProvider.state('listOfBooks', {
    url: '/ist-of-books',
    templateUrl: 'js/books/books.html',
    controller: 'BooksController'
  });

  $urlRouterProvider
    .otherwise('/login');
});

angular.module("app").run(function($state){
  // do stuff here
});