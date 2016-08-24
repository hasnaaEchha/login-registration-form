angular.module("cnGroup").factory("manageLogin",["Resources","$q","$localStorage","identity",manageLogin]);
function manageLogin(Resources,$q,$localStorage,identity) {

    return {

        isClient: function (userName, password) {
            var def = $q.defer();
            Resources.ClientsResource.query({}, function (data) {
                    var result={success:false};
                    for(var i=0;i<data.length;i++){

                        if(data[i].userName===userName && data[i].password===password){
                            result.success=true;
                            identity.setClient(data[i]);
                        }
                    }
                    def.resolve(result);
                },
                function (err) {
                })
            return def.promise;
        }


    }
}