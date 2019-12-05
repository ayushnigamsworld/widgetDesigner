var dom = document.getElementById("container");
var myChart = echarts.init(dom);
option = null
option = {
    title: {
        text: '???',
        subtext: '????'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['??','??','??','??','??']
    },
    calculable: true,
    series: [
        {
            name:'???',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 60, name: '??'},
                {value: 40, name: '??'},
                {value: 20, name: '??'},
                {value: 80, name: '??'},
                {value: 100, name: '??'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
