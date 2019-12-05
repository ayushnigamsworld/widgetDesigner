var dom = document.getElementById("container");
var myChart = echarts.init(dom);
option = null;
option = {
    title: {
        text: 'Agent Status',
        subtext: 'Status Over Time',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Available', 'Active', 'Busy', 'Away', 'Offline']
    },
    series: [
        {
            name: 'Agent Status',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: 'Available'},
                {value: 310, name: 'Active'},
                {value: 234, name: 'Busy'},
                {value: 135, name: 'Away'},
                {value: 1548, name: 'Offline'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
