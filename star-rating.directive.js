app.directive('starRating', [function () {
    return {
        restrict: 'EA',
        templateUrl : './star-rating.template.html',
        scope: {        
            ratingValue : '=ratingvalue'   
          },
        link :function(scope, element, attributes) {
        if (scope.max == undefined) {
            scope.max = 5;
            }
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                filled: i < scope.ratingValue
                });
            }
        }
    }
}]);