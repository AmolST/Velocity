app.directive('contactList', ['contactService', function(contactService){
return {
    restrict : 'AE',
    templateUrl : './contact-list.template.html',
    link : function(scope, element){

          contactService.getAllContacts().then(function success(result){
            scope.contactList = result.data;
          }, function error(response){
              console.log(response);
          });

          scope.setContactDetails = function (contact) {
              contactService.updateContactDetails(contact);                            
          } 

    }
}
}]);