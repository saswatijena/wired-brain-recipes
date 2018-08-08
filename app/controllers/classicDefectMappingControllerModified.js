(function () {
    let app = angular.module("eventsApp");
    let classicDefectMappingControllerModified = function ($scope) {
        $scope.customer = '';
        $scope.defects = [];
        $scope.comments = '';
        $scope.rowCount = 1;

        $scope.newDefect = { defectId: '', productFamily: '', version: '' };
        $scope.addDefect = function () {
            for (let i = 0; i < $scope.rowCount; i++) {
                $scope.defects.push($scope.newDefect);
                $scope.newDefect = { defectId: '', productFamily: '', version: '' };

            }
        }

        $scope.saveDefects = function () {
            let defects = $scope.defects.map((defect) => {
                defect.customer = $scope.customer;
                defect.comments = $scope.comments;
                return defect;
            });
            console.log(defects);
        }

    }

    app.controller('classicDefectMappingControllerModified', ['$scope', classicDefectMappingControllerModified])

})();