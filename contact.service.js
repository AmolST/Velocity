app.factory('contactService', ['$http',
    function ($http) {

        var listerns = [];
        
        var registerForContactDetails = function(callback){
            listerns.push(callback);
        }

        var getAllContacts = function () {
            return $http.get("./people.json");
        };

        var updateContactDetails = function (contact) {
            listerns.forEach(function (callback) {
                callback(contact);
            })
        }

        return {            
            getAllContacts,            
            registerForContactDetails,          
            updateContactDetails
        }
    }]);