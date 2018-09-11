app.directive('contactDetails', ['contactService', function(contactService){
return {
    restrict : 'AE',
    templateUrl : './contact-details.template.html',
    link : function($scope){
       
        
          $scope.$on('GETCONTACTDETAILS', function(e, data){
                 $scope.contact = data;
          });

    }
}
}]);