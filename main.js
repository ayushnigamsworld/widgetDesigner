const angularApp = angular.module("widgetCreation", []);
angularApp.controller("widgetCtrl", function ($scope, DataService, $http) {

        debugger;
        const aa = $http.get('https://dashboard.slate-platform.com/api/public/dashing/tables').then(function(dataReceived){
            $scope.tableDatas = dataReceived.data.data;
        });

        let selectedChart = '';
        $scope.saveWidget = function() {
            debugger;
            const widgetName = $scope.widgetName;
            const selectedTableId = $scope.selectedTableName;
            const selectedApi = $scope.selectedApiUrl;
            let finalApi = '';
            if ($scope.selectedTableName) {
                finalApi += `https://dashboard.slate-platform.com/api/workspace/table/${selectedTableId}`;
            } else {
                finalApi += selectedApi;
            }
            const dataToPost = {
                api: finalApi,
                name: widgetName,
                chart: selectedChart,
                charteventscript: '()=> {}',
                datasource: '()=> {}'
            };
            console.log(dataToPost);
            $http.post('https://dashboard.slate-platform.com/api/public/dashing/widget', dataToPost).then(function(data){
                console.log('SuccessFul Widget Creation: ', data);
            });
        }


        $scope.onCardClick = function (type) {
            var dom = document.getElementById('container');
            var chart = echarts.getInstanceByDom(dom);
            if(!chart){
                echarts.init(dom);
            }
            selectedChart = type;
            if(type == 'pie'){
                chart.setOption(DataService.pieChart.options());
            } else if(type == 'funnel'){
                chart.setOption(DataService.funnelChart.options());
            } else if(type == 'bar'){
             chart.setOption(DataService.barChart.options());
           } else if(type == 'barRotated'){
                 chart.setOption(DataService.barChartRotated.options());
             } else if(type == 'line'){
               chart.setOption(DataService.lineChart.options());
           } else if(type == 'area'){
                 chart.setOption(DataService.areaChart.options());
             }
        }

});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
