var xValue = ['Apache Corporation', 'Anadarko Petroleum', 'COG Operating LLC', 'Conoco Phillips', 'Devon Energy', 'Endeavor Energy', 'Energen Resources', 'EOG Resources, Inc.', 'Linn Energy, LLC', 'Occidental Oil and Gas', 'Pioneer', 'SandRidge Energy', 'XTO Energy'];

var yValue = [115, 139, 131, 126, 206, 74, 163, 169, 131, 113, 314, 151, 90];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textcolor: 'black',
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'light blue',
    opacity: 0.6,
    line: {
      color: 'orange',
      width: 1.5
    }
  }
};

var data = [trace1];

var layout = {
  title: 'Wells Opened by Top 13 Operators in 2012',
  barmode: 'stack'
};

Plotly.newPlot('myDiv', data, layout);