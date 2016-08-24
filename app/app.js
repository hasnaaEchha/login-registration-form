(function(){
    "use strict";
    var cnGroup=angular.module("cnGroup",["ui.router","ngResource","ui.bootstrap","ngCookies","ngStorage"]);
    cnGroup.config(["$stateProvider","$urlRouterProvider",cnGroupConf]);
    function cnGroupConf($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("//login")
        $stateProvider
            .state("welcome",{
                url:"/",

                templateUrl:"app/welcome/welcome.html",
                controller:function($scope, identity){
                    $scope.identity=identity;
                }
            })
            .state('welcome.registration',{
                url:"/registration",
                templateUrl:"app/registration/registration.html",
                controller:"RegistrationCtrl as vm"
            })
            .state('welcome.login',{
                url:"/login",
                templateUrl:"app/login/login.html",
                controller:"LoginCtrl as vm"
            })


    }
}());