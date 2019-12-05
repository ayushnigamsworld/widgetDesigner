const angularApp = angular.module("widgetCreation", []);
angularApp.controller("widgetCtrl", function ($scope, $http) {
    debugger;
    const aa = $http.get('https://dashboard.slate-platform.com/api/public/dashing/tables').then(function(dataReceived){
        $scope.tableDatas = dataReceived.data.data;
    });

    $scope.saveWidget = function() {
        debugger;
        const widgetName = $scope.widgetName;
        const selectedTableId = $scope.selectedTableName;
        const selectedApi = $scope.selectedApiUrl;
        const finalApi = '';
        if (!selectedTableId) {
            finalApi += `https://dashboard.slate-platform.com/api/workspace/table/${selectedTableId}`;
        } else {
            finalApi += selectedApi;
        }
        const dataToPost = {
            api: finalApi,
            name: widgetName,
            chart: '',
        };
        console.log(selectedTableId);
    }
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
