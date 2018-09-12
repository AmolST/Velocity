app.directive('contactDetails', ['contactService', function(contactService){
return {
    restrict : 'AE',
    templateUrl : './contact-details.template.html',
    link : function(scope){
       
        contactService.registerForContactDetails(function (contact) {
            scope.contact = contact;            
        })

        scope.sendMessage = function () {
            //TODO : Send message
        }
    }
}
}]);