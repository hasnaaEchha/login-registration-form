(function(){
    'use strict';

    angular.module('cnGroup')
        .controller('RegistrationCtrl',[
            '$scope',
            '$state',
            '$window',
            '$timeout',
            'notifier',
            'manageRegistration',
            RegistrationCtrl]);
    function RegistrationCtrl($scope,$state,$window,$timeout,notifier, manageRegistration){
        var vm=this;
        vm.error=false;

        $scope.$watch('vm.username',function(newVal, oldVal){
            vm.validUsername = manageRegistration.validateUsername(newVal)['valid'];
            vm.usernameMsgError = manageRegistration.validateUsername(newVal)['errorMsg'];
        })
        $scope.$watch('vm.firstPassword',function(newVal, oldVal){
            vm.validPassword = manageRegistration.validatePassword(newVal, undefined)['valid'];
            vm.passwordMsgError = manageRegistration.validatePassword(newVal, undefined)['errorMsg'];
            vm.validConfPassword = manageRegistration.validatePassword(vm.confPassword, newVal)['valid'];
            vm.confPasswordMsgError = manageRegistration.validatePassword(vm.confPassword, newVal)['errorMsg'];
        })
        $scope.$watch('vm.confPassword',function(newVal, oldVal){
            vm.validConfPassword = manageRegistration.validatePassword(newVal, vm.firstPassword)['valid'];
            vm.confPasswordMsgError = manageRegistration.validatePassword(newVal, vm.firstPassword)['errorMsg'];
        })
        vm.signUp = function() {
            notifier.notify("Registered");
                    $timeout(function(){
                        $state.go("welcome.login");
                    },100)
        };

    }

}());
