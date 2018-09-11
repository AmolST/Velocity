app.directive('contactList', ['contactListService', function(contactListService){
return {
    restrict : 'AE',
    templateUrl : './contact-list.template.html',
    link : function(scope){
          contactListService.getAllContacts().then(function success(result){
            scope.contactList = result.data;
          }, function error(response){
              console.log(response);
          });
    }
}
}]);