(function () {
    let app = angular.module("eventsApp");
    let defectsService = function () {

        let getDefects = function () {
            return [
                { defectId: 'czxc1234' },
                { defectId: 'czxc1235' },
                { defectId: 'czxc1236' },
                { defectId: 'czxc1237' },
                { defectId: 'czxc1238' },
                { defectId: 'czxc1239' },
                { defectId: 'czxc1230' },
                { defectId: 'czxc12341' },
            ];
        }

        let searchDefects = function (searchTerm) {
            let defects = this.getDefects();
            return defects.filter(defect => defect.defectId.indecOf(searchTerm));
        }

        return {
            getDefects: getDefects,
            searchDefects: searchDefects
        }

    }

    app.factory('defectsService', [defectsService])

})()