const angularApp = angular.module("widgetCreation", []);
angularApp.controller("widgetCtrl", function ($scope, DataService, $http) {

//$http.get("https://ds01-idp.i3clogic.com/ds/portal/dashboards?q=getAgentsStatusNew&centerId=28").then(function(response){
/*				$scope.value = [];
                $scope.rrr = {};
				$scope.test = response.data.data[0];
 [
                {value: 335, name: 'Available'},
                {value: 310, name: 'Active'},
                {value: 234, name: 'Busy'},
                {value: 135, name: 'Away'},
                {value: 1548, name: 'Offline'}
            ],
				for(i=0;i<response.data.data.length;i++) {
                 console.log(response.data.data[i]);
                    for(int j =0;)

                }*/
		//		 $scope.labels = Object.keys(response.data.data[0]);

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

	//			});




});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
