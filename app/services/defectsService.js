(function defectsServiceModule() {
    let app = angular.module("eventsApp");
    let defectsService = function () {
        let defects = [
            { defectId: 'czxc1234', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc1235', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc1236', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc1237', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc1238', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc1239', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc1230', productFamily: '', version: '', customer: '' },
            { defectId: 'czxc12341', productFamily: '', version: '', customer: '' }
        ];
        let getDefects = function () {
            return defects;
        }

        let searchDefects = function (searchTerm) {
            let defects = this.getDefects();
            let searchedDefets = defects.filter(defect => defect.defectId.indexOf(searchTerm) > 0);
            console.log(searchedDefets);
            return searchedDefets;
        }

        return {
            defects: defects,
            getDefects: getDefects,
            searchDefects: searchDefects
        }

    }

    app.factory('defectsService', [defectsService])

})();