// arbitrary data
var data = [50, 520, 350, 150, 1100, 100, 250, 1000, 185, 800, 550, 275, 85, 450, 1500, 25, 45, 1200, 700, 1600,]

var data2 = data.concat(data).concat(data)
data2.sort(function (a,b) {
  return a-b;
});

// data = data2;

// chart setup
var height = 500;
var width = 900;
var barHeight = height/data.length;

// bar width scaling (x axis)
var xScale = d3.scale.linear()
  .domain([0, d3.max(data, function (d) { return d })])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([0, d3.max(data, function (d) { return d })])
  .range(['#FFE5F4', '#FF0099'])
  // .range(['#0000FF', '#00FFFF'])
  // .range(['#FF0000', '#FFFF00'])
  // .range(['#FF0000', '#00FF00'])
  // .domain([0, d3.max(data, function (d) { return d })/2, d3.max(data, function (d) { return d })])
  // .range(['#FF0000', '#FFFF00', '#00FF00'])
  // .range(['#0000FF', '#11EEFF', '#AAFFFF'])
  // .range(['#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00EEFF', '#0000FF', '#7700ff', '#FF0099'])

// stage setup
var chart = d3.select('#chart').append('svg')
  .attr('height', height)
  .attr('width', width)
  .attr('class', 'stage');

// join data
var bar = chart.selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', function (d, i) { return 'translate(0, ' + i * barHeight + ')'; });

// non-scaled
// bar.append('rect')
//   .attr('width', function (d) { return d})
//   .attr('height', barHeight - 1)

// scaled
bar.append('rect')
  .attr('width', function (d) { return xScale(d)})
  .attr('height', barHeight - 1)
  .style('fill', function (d) { return color(d)})


