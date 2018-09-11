app.factory('contactService', ['$http',
    function ($http) {
var selectedContact ;

        var getAllContacts = function () {
            return $http.get("./people.json");
        };

        var setContactDetails = function(contact) {
            selectedContact = contact;
            console.log(contact);
        }

        var getContactDetails = function(){
            return selectedContact;
        };

        return {
            getAllContacts,
            getContactDetails,
            setContactDetails,
            selectedContact
        }
    }]);