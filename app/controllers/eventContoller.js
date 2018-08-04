

eventsApp.controller('eventController', function eventController($scope){
    $scope.event = {
        name:'Angular BootCamp',
        date:'08/30/2018',
        location:{
            address: 'Google Headquaters',
            city: 'San Jose',
            state: 'CA'
        }
    }
});