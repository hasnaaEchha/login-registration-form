angular.module("cnGroup").directive('alertMessage',function() {
  return {
      scope: {
        errorMessage:'=',
        isValid:'='
      },
      templateUrl: 'app/common/alert.html'
      }

  }
  )