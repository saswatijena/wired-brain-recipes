
(function eventModule(){
    var app = angular.module("eventsApp");
    var eventController = function eventController($scope, eventService){
        $scope.events = eventService.events;
    }
    app.controller('eventController',[ '$scope', 'eventService',eventController] );
})();
