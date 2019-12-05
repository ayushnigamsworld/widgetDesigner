const angularApp = angular.module("widgetCreation", []);
angularApp.controller("widgetCtrl", function ($scope, DataService, $http) {

        $scope.onCardClick = function (type) {
            var dom = document.getElementById('container');
            var chart = echarts.getInstanceByDom(dom);
            if(!chart){
                echarts.init(dom);
            }
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
