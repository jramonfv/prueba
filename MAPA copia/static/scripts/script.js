'use strict'
var sonar = document.getElementById('sonar');
var radio = [];
var angulo = [];

var data= [
{
      type: "scatterpolar",
      mode: "markers",
      r: radio,
      theta: angulo,

      marker: {
        color: "red",
        symbol: "round-dot",
        size: 5
      },
    }   
  ]

var layout = {
  
    showlegend: false,
    polar: {
        bgcolor: "rgb(223, 223, 223)",
	    sector: [0,360],

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
    paper_bgcolor: "rgb(223, 223, 223)",

  }

function getData() {
    fetch('http://127.0.0.1:3000/sonar')
    .then(response => response.json())
    .then(data => {
      radio = data[0];
      angulo = data[1];
      
    })
    .catch(error => console.error(error))
}

Plotly.newPlot('sonar', data, layout)

setInterval(function() {
    getData()
    Plotly.extendTraces(sonar, { r: [radio], theta: [angulo]},[0])
  }, 1000);
