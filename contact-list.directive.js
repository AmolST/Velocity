app.directive('contactList', ['contactService', function (contactService) {
    return {
        restrict: 'AE',
        templateUrl: './contact-list.template.html',
        link: function (scope) {

            // scope.contactNameList = [];
            scope.keyword = "";

            contactService.getAllContacts().then(function success(result) {
                scope.contactList = result.data.People;
                if(scope.contactList.length > 0) {
                    contactService.updateContactDetails(scope.contactList[0]);
                }
                // result.data.People.forEach(x => scope.contactNameList.push(x.name));
                
            }, function error(response) {
                console.log(response);
            });

            scope.setContactDetails = function (contact) {                
                contactService.updateContactDetails(contact);
            }

            contactService.registerForSearchKeyword(function (keyword) {
                scope.keyword = keyword;            
            })
        }
    }
}]);