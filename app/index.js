//(function(){
    var myToDo = angular.module("myToDo",[]);
    function mainController($scope,$http){
        $scope.formData = {};
        $scope.formData.customer = ""
        $scope.formData.defects = [
            {defectId:"Cxw123", productFamily: "new PF", version: "1.3.4"},
            {defectId:"Cxw124", productFamily: "new PF1", version: "1.3.3"},
            {defectId:"Cxw125", productFamily: "new PF2", version: "1.3"}
        ];
        $scope.formData.comments = "";

    }
//}())