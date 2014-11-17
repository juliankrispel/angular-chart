(function(){
angular.module('plot', ['visUtil'])
.directive('chart', function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: { 
            height: '=',
            width: '='
        },
        template: '<svg ng-attr-width="{{width}}" ng-attr-height="{{height}}" ng-transclude></svg>',
        controller: function($scope){
            //TODO: Implement responsive 
        }
    };
});
})();