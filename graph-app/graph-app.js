"use strict";
class DataPoint {
    constructor(t, C) {
        this.t = t;
        this.C = C;
    }
}
class GraphApp {
    constructor() {
        let e = document.createElement('div');
        e.id = 'myDiv';
        e.innerHTML = "Hello, world";
        document.body.appendChild(e);
    }
    run() {
        let e = document.getElementById('rawdata');
        let str = e.textContent;
        let input = str.split(' ');
        let conc = []; //concentrations
        for (let i of input) {
            conc.push(parseFloat(i));
        }
        //x axis values
        var seconds;
        for (let seconds of input.length(conc)) {
            seconds + 1;
        }
        //var numbers1= +input;//parseInt(input);
        var trace2 = {
            x: seconds,
            y: conc,
            mode: 'markers'
        };
        var data = [trace2];
        var layout = {};
        Plotly.newPlot('myDiv', data, layout);
    }
    convertInputToDataPoints(str) {
        let dataPoints = [];
        return dataPoints;
    }
    plotGraph(dataPoints) {
        //DIANE PUT GRAPH STUFF HERE
        x: seconds,
        y: conc,
        mode: 'markers'
    }
}
