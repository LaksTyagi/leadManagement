import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

class lineareachart extends Component {
    render() {
        var lineChartData = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                []
            ]
        };
        for(var i = 0; i <8;i++){
            lineChartData.series[0].push(Math.floor((Math.random() * 10) + 1))
        }
        var lineChartOptions = {
            low: 0,
            showArea: true,
        }
        console.log(Math.floor((Math.random() * 10) + 1))
        return (
            <React.Fragment>
                <ChartistGraph data={lineChartData} style={{ height: "290px" }} options={lineChartOptions} type={'Line'} />
            </React.Fragment>
        );
    }
}

export default lineareachart;