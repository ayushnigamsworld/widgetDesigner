const angularApp = angular.module("widgetCreation", []);
angularApp.controller("widgetCtrl", function ($scope, DataService, $http) {

  debugger;
  $http.get('https://dashboard.slate-platform.com/api/public/dashing/tables').then(function (dataReceived) {
    $scope.tableDatas = dataReceived.data.data;
  });

  let selectedChart = '';
  let finalApi = null;

  $scope.saveWidget = function () {
    debugger;
    const widgetName = $scope.widgetName;
    const selectedTableId = $scope.selectedTableName;
    const selectedApi = $scope.selectedApiUrl;
    if (!finalApi) {
      if ($scope.selectedTableName) {
        finalApi = `https://dashboard.slate-platform.com/api/workspace/table/${selectedTableId}`;
      } else {
        finalApi = selectedApi;
      }
    }

    const dataToPost = {
      api: finalApi,
      name: widgetName,
      chart: selectedChart,
      charteventscript: '()=> {}',
      datasource: '()=> {}'
    };
    console.log(dataToPost);
    $http.post('https://dashboard.slate-platform.com/api/public/dashing/widget', dataToPost).then(function (data) {
      console.log('SuccessFul Widget Creation: ', data);
    });
  };


  $scope.onCardClick = function (type) {
    var dom = document.getElementById('container');
    var chart = echarts.getInstanceByDom(dom);
    chart.on('click', function () {
      alert('Hey did you just clicked me. Please specify a script to run.');
    });
    if (!chart) {
      echarts.init(dom);
    }
    const colArr = [];
    const valArr = [];

    const selectedApi = $scope.selectedApiUrl;
    if (!finalApi) {
      if ($scope.selectedTableName) {
        finalApi = `https://dashboard.slate-platform.com/api/workspace/table/${selectedTableId}`;
      } else {
        finalApi = selectedApi;
      }
    }


    const widgetTitle = $scope.widgetName;
    $http({
      method: 'GET',
      url: finalApi || 'https://ds01-idp.i3clogic.com/ds/portal/dashboard?q=getDashboardSummaryNew&centerId=28'
    }).then(function successCallback(response) {

      for (let name in response.data.data) {
        colArr.push(name);
        valArr.push(response.data.data[name]);
      }
      const dataToFeed = {
        colArr,
        valArr,
        widgetTitle
      }

      selectedChart = type;
      if (type == 'pie') {
        chart.setOption(DataService.pieChart.options(dataToFeed));
      } else if (type == 'funnel') {
        chart.setOption(DataService.funnelChart.options(dataToFeed));
      } else if (type == 'bar') {
        chart.setOption(DataService.barChart.options(dataToFeed));
      } else if (type == 'barRotated') {
        chart.setOption(DataService.barChartRotated.options(dataToFeed));
      } else if (type == 'line') {
        chart.setOption(DataService.lineChart.options(dataToFeed));
      } else if (type == 'area') {
        chart.setOption(DataService.areaChart.options(dataToFeed));
      }

    });

  }


});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
