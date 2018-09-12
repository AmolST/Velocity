app.factory('contactService', ['$http',
    function ($http) {

        var listernsForContactDetails = [];
        var listernsForSearchKeyword = [];

        var getAllContacts = function () {
            return $http.get("./people.json");
        };
        
        var registerForContactDetails = function(callback){
            listernsForContactDetails.push(callback);
        }

        var registerForSearchKeyword = function(callback){
            listernsForSearchKeyword.push(callback);
        }

        var updateContactDetails = function (contact) {
            listernsForContactDetails.forEach(function (callback) {
                callback(contact);
            })
        }

        var updateSearchKeyword = function (keyword) {
            listernsForSearchKeyword.forEach(function (callback) {
                callback(keyword);
            })
        }

        return {            
            getAllContacts,            
            registerForContactDetails,    
            registerForSearchKeyword,
            updateContactDetails,
            updateSearchKeyword
        }
    }]);