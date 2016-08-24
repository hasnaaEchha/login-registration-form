angular.module("cnGroup").value("mvToastr",toastr);
angular.module("cnGroup").factory("notifier",["mvToastr",notifier]);
function notifier(mvToastr){
    return {
        notify:function(msg){
            mvToastr.success(msg);
        }
    }

}