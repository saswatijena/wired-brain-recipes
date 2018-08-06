(function () {
    let app = angular.module("eventsApp");
    let classicDefectMappingController = function ($scope) {
        $scope.customer = '';
        $scope.defects = [{ defectId: '', productFamily: '', version: '' }];
        $scope.comments = '';
        $scope.rowCount = 1;

        $scope.addDefect = function () {
            for (let i = 0; i < $scope.rowCount; i++) {
                $scope.defects.push({ defectId: '', productFamily: '', version: '' });
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

    app.controller('classicDefectMappingController', ['$scope', classicDefectMappingController])

})();