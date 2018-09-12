app.directive('contactSearch', ['contactService', function (contactService) {
    return {
        restrict: 'AE',
        templateUrl: './contact-search.template.html',
        link: function (scope) {
            scope.searchContact = "";
            scope.change = function () {
                contactService.updateSearchKeyword(scope.searchContact);
            }
        }
    }
}]);