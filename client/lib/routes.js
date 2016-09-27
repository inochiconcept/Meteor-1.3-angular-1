app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
       
    $stateProvider

      /*--------Home-----------*/
    .state("app", {url: null, templateUrl: "client/views/template.ng.html", controller:"MainController", controllerAs: "main"})
    .state("app.home", {url: '/', templateUrl: "client/views/home.ng.html"})
    $urlRouterProvider.otherwise('/')
    $locationProvider.html5Mode({enabled: true, requireBase: false})

}])


