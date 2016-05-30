/*

  ADD INTERVENTION TO CHARTS

*/

DVE.Graph.prototype.add_intervention = function (data) {

  console.log("INTERVENTIONS =>", data)

  var x = d3.time.scale().range([0, this.width]);

  var y = d3.scale.linear();

  var color = d3.scale.ordinal().range(['#111A33', '#001E93', '#4FCFEB', '#A725A7']);

  var bg_color = d3.scale.ordinal().range(['#B7BCA6', '#89907C', '#696D5F'])

  var minDate = this.data.entries[0].date;
  var maxDate = this.data.entries[this.data.entries.length - 1].date;

  x.domain([
    new Date(minDate.getFullYear()-1, minDate.getMonth()+1,minDate.getDate()),
    new Date(maxDate.getFullYear()+1, maxDate.getMonth()+1,maxDate.getDate())
  ]);

  y.domain([d3.min(this.data.entries, function(d) { return d.value; }), d3.max(this.data.entries, function(d) { return d.value; })]);

  function left_border(d){
    return x(d.start) < x(minDate) ? x(minDate) : x(d.start);
  }

  function right_border(d){
    return x(d.end) > x(maxDate) ? x(maxDate) : x(d.end);
  }

  var parseInterventionDate = d3.time.format("%Y-%m-%d").parse;

  data.forEach(function(d, i) {
    d.start = this.parseDate(d.start);
    d.end = this.parseDate(d.end);
    d.title = d.title;
    d.description = d.description;
    d.index = i
  }.bind(this));

  var svg = this.svg;

  svg.selectAll('.chart')
  .data(data)
  .enter()
  .append("line")
    .style("opacity", 1)
    .attr("class", function(d){
      console.log(d)
      return "interventions intervention--type--"+d.type+" intervention-"+d.id;
    }.bind(this))
    .attr("x1", function(d,i){
      return left_border(d);
    })
    .attr("y1", function(d,i){
      return (25*d.index)-60;
    })
    .attr("x2", function(d,i){
      return left_border(d);
    })
    .attr("y2", function(d,i){
      return this.height
    }.bind(this))
    .attr("stroke-width", 0.25)
    .style("stroke-dasharray", 7.5)
    .attr("stroke", "black");

  svg.selectAll('.chart')
  .data(data)
  .enter()
  .append("rect")
    .style("opacity", 1)
    .attr("height", 17.5)
    .attr('width', function(d,i){
      return right_border(d) - left_border(d);
    }.bind(this))
    .attr('x', function(d) {
        return left_border(d);
    }.bind(this))
    .attr('y', function(d,i){
      // return (25*d.index)+65;
      return (25*d.index)-62.5;
    }.bind(this))
    .attr("class", function(d){
      return "intervention-bg intervention--type--"+d.type+" intervention-bg-"+d.id;
    })
    .style("fill", function(d){
      return bg_color(d.type);
    })
    .attr("stroke", "none");


  svg.selectAll('.chart')
    .data(data)
    .enter()
    .append("text")
    .html(function(d){
      return d.title+" - "+d.description;
    })
    .style("opacity", 1)
    .attr('x', function(d) {
        return left_border(d)+5;
    }.bind(this))
    .attr('y', function(d,i){
      // return (25*d.index)+65;
      return (25*d.index)-50;
    }.bind(this))
    .attr("class", function(d){
      return "intervention-text intervention--type--"+d.type+" intervention-text-"+d.id;
    })
    .style('font-family', '"Trebuchet MS", Helvetica, sans-serif')
    .style("font-weight", "bold")
    .style("font-size", 9)
    .style("text-transform", "uppercase")
    .attr("fill", "white");
}
