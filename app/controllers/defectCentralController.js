(function () {
    let app = angular.module('eventsApp');
    let defectCentralController = function ($scope, defectsService) {
        $scope.defects = defectsService.getDefects();
        $scope.selectedDefects = new Set();
        $scope.gridOptions = {
            data: $scope.defects,
        };

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            //set gridApi on scope
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                console.log(row.isSelected);
                console.log(row.entity);
                if (row.isSelected) {
                    $scope.selectedDefects.add(row.entity.defectId);
                } else if ($scope.selectedDefects.has(row.entity.defectId)) {
                    $scope.selectedDefects.delete(row.entity.defectId);
                }
            });

            gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
                var msg = 'rows changed ' + rows.length;
                console.log(msg);
            });
        };

        $scope.setCustomer = function(customer){
            for (var selectedDefect of $scope.selectedDefects){
                $scope.defects.map(defect => {
                    if(defect.defectId == selectedDefect){
                        defect.customer = customer;
                    }
                    return defect;
                })
            }
            // $scope.defects = defectsService.getDefects();
        }

    };

    app.controller('defectCentralController', ['$scope', 'defectsService', defectCentralController]);
})();