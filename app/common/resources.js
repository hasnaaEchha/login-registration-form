(function(){
    "use strict";
    angular.module("cnGroup")
        .service('Resources',['$resource',Resources]);
    function Resources($resource){
        return{
            ClientsResource:$resource("/data/clients")
        }
    }
}())

