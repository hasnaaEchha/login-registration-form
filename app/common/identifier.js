angular.module("cnGroup").factory("identity",["$cookieStore","$state","$window","$localStorage",identity]);
function identity($cookieStore,$location, $state,$window,$localStorage){
    return {
        currentUser:  $cookieStore.get('client'),
        isAuthenticated: function(){
            this.currentUser=$cookieStore.get('client');
            return !!this.currentUser;
        },
        setClient:function(client){
            $cookieStore.put('client',client)
        },
        logout:function(){
            if($cookieStore.get('client'))
                $cookieStore.remove('client');
                $state.go('welcome.login');
        }
    }
}
