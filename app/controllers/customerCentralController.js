(function(){
    let app = angular.module("eventsApp");
    let customerCentralController = function($scope, defectsService){
        $scope.title = "Customer central view";
        $scope.searchTerm = '';

        $scope.defects =[];

        $scope.searchDefects = function(){
            console.log($scope.searchTerm);
            $scope.defects = defectsService.searchDefects($scope.searchTerm);
        }
        
    }
    app.controller('customerCentralController', ['$scope', 'defectsService', customerCentralController]);

})();