(function eventServiceModule(){
    let app = angular.module("eventsApp");
    let eventService = function(){
        let events = [
        {
            name:'Angular BootCamp',
            date:'08/30/2018',
            location:{
                address: 'Google Headquaters',
                city: 'San Jose',
                state: 'CA'
            }
        },
        {
            name:'Angular BootCamp2',
            date:'09/30/2018',
            location:{
                address: 'Google Headquaters1',
                city: 'San Jose1',
                state: 'CA1'
            }
        }
    ];
        return {
            events : events
        }
    }
    app.factory('eventService', [eventService]);
})()