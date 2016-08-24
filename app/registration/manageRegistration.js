angular.module("cnGroup").factory("manageRegistration",["$localStorage",manageRegistration]);
function manageRegistration($localStorage) {

    return {
        validateUsername: function (userName) {

           var validUsername = !userName || userName.length>=5;
           var usernameMsgError = "";
           if (!validUsername)
            {
                usernameMsgError="the username should contain at least 5 characters";
            }
            if (validUsername && userName && !userName.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/))
            {
                validUsername = false;
                usernameMsgError="enter a valid email"
            }
            return {'valid':validUsername, 'errorMsg': usernameMsgError};
        },
        validatePassword: function(newPassword, oldPassword){
            var validPassword = !newPassword || newPassword.length>=6;
            var passwordMsgError = "";
            if (!validPassword)
            {
                passwordMsgError="the password should contain at least 6 characters";
            }
            if(validPassword && newPassword && oldPassword && oldPassword.localeCompare(newPassword)!=0){
                    validPassword = false;
                    passwordMsgError = 'the second password should be equal to the first password';
            }
            return {'valid':validPassword, 'errorMsg': passwordMsgError}


        }


    }
}