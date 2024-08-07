'use strict';
console.log('hello');
var tester = document.getElementById('myDiv');
var radio = [2,2,2,3,3,3];
var angulo = [0, 30,60,90,120,150];

var trace1 = {
  type: "scatterpolar",
  mode: "markers",
  r: radio,
  theta: angulo,

  marker: {
    color: "red",
    symbol: "round-dot",
    size: 5
  }
}
  
  var trace2 = {
    type: 'scatter',
    x: [20, 30, 40],
    y: [50, 90, 70],
    xaxis: 'x2',
    yaxis: 'y2',

  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title: "Sonar",
    grid: {rows: 1, columns: 2, pattern: 'independent'},
    
    showlegend: false,


    polar: {
        bgcolor: "rgb(223, 223, 223)",
	      sector: [0,270],

        radialaxis: {
            tickfont: {
            size: 8
        },
        linewidth: 2,
        tickwidth: 2,
        gridcolor: "white",
        gridwidth: 2
      },
      angularaxis: {
        tickfont: {
          size: 8
        },
        linewidth: 2,
        tickwidth: 2,
        gridcolor: "white",
        gridwidth: 2
      }
    },
    paper_bgcolor: "white",
  };

  layout.xaxis2 = {
    title: "Eje X",
    domain: [1, 1],
    anchor: 'y2',
    range: [-150, 150],
    x2: 0,
    dx2:10,
    autorange: false,
    showgrid: true,
    zeroline: false,
    showline: true,
    autotick: true,
    //ticks: '',
    showticklabels: true,
    tickangle: 'auto',
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 20,
    ticklen: 4,
    tickwidth: 1,
    tickcolor: '#000'
  
  };
  layout.yaxis2 = {
    title: "Eje Y",
    domain: [1, 1],
    anchor: 'x2',
    range: [-150, 150],
    autorange: false,
    showgrid: true,
    zeroline: false,
    showline: true,
    autotick: true,
    ticks: '',
    showticklabels: true,
    tickangle: 'auto',
       
  };
  
  Plotly.newPlot('myDiv', data, layout);