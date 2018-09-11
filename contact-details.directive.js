app.directive('contactDetails', ['contactService', function(contactService){
return {
    restrict : 'AE',
    templateUrl : './contact-details.template.html',
    link : function(scope){
          contactService.getAllContacts().then(function success(result){
            scope.contactList = result.data;
          }, function error(response){
              console.log(response);
          });

          scope.showDetails = function(index){
              scope.contact = contactService.getContactDetails();
          }
    }
}
}]);