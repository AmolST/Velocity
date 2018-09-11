app.factory('contactListService', ['$http',
    function ($http) {
        var getAllContacts = function () {
            return $http.get("./people.json");
        };
        return {
            getAllContacts
        }
    }]);