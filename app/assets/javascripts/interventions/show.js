/*

  CHART INTERVENTIONS

*/

DVE.Graph.prototype.draw_interventions = function () {

  if(this.data.interventions.length>0){
    // this.mount_sidebar(this.data.interventions)

    var x = d3.time.scale().range([0, this.width]);

    var y = d3.scale.linear();

    var color = d3.scale.ordinal().range(['#111A33', '#001E93', '#4FCFEB', '#A725A7']);

    var bg_color = d3.scale.ordinal().range(['#B7BCA6', '#89907C', '#696D5F'])

    this.minDate = this.data.entries[0].date;

    this.maxDate = this.data.entries[this.data.entries.length - 1].date;

    x.domain([
      new Date(this.minDate.getFullYear()-1, this.minDate.getMonth()+1,this.minDate.getDate()),
      new Date(this.maxDate.getFullYear()+1, this.maxDate.getMonth()+1,this.maxDate.getDate())
    ]);

    y.domain([d3.min(this.data.entries, function(d) { return d.value; }), d3.max(this.data.entries, function(d) { return d.value; })]);

    this.data.interventions.forEach(function(d, i) {
      d.start = this.parseDate(d.start);
      d.end = this.parseDate(d.end);
      d.title = d.title;
      d.description = d.description;
      d.index = i;
    }.bind(this));

    var svg = this.svg;

    if(this.number_of_symbols < this.data.entries.length){

          var rect = svg.selectAll(".interventions").data(this.data.interventions);
          var rectEnter = rect.enter().append("g");

          rectEnter.style("opacity", 1)
          .attr('width', function(d,i){
            return this.right_border(d) - this.left_border(d);
          }.bind(this))
          .attr('x', function(d) {
              return this.left_border(d);
          }.bind(this))
          .attr('y', function(d,i){
            return (25*d.index)-35;
          }.bind(this))
          .attr('height', function(d,i) {
            return this.height-(25*d.index)+35
          }.bind(this))
          .attr("fill", function(d){
            return "none";
          }.bind(this))
          .append("line")
            .attr("class", function(d){
              return "interventions intervention--type--"+d.type+" intervention-"+d.id;
            }.bind(this))
            .attr("x1", function(d,i){
              return this.left_border(d);
            }.bind(this))
            .attr("y1", function(d,i){
              return (25*d.index)-60;
            })
            .attr("x2", function(d,i){
              return this.left_border(d);
            }.bind(this))
            .attr("y2", function(d,i){
              return this.height
            }.bind(this))
            .attr("stroke-width", 0.25)
            .style("stroke-dasharray", 7.5)
            .attr("stroke", "black");

          svg.selectAll('.chart')
          .data(this.data.interventions)
          .enter()
          .append("rect")
            .style("opacity", 1)
            .attr("height", 17.5)
            .attr('width', function(d,i){
              console.log(d, this.right_border(d), this.left_border(d))
              return Math.abs(this.right_border(d) - this.left_border(d));
            }.bind(this))
            .attr('x', function(d) {
                return this.left_border(d);
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
            .data(this.data.interventions)
            .enter()
            .append("text")
            .html(function(d){
              return d.title+" - "+d.description;
            })
            .style("opacity", 1)
            .attr('x', function(d) {
                return this.left_border(d)+5;
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
    else{

      var new_interventions = svg.selectAll(".interventions").data(this.data.interventions);

      var text = new_interventions.enter().append("text");

      console.log("after enter", this.data.interventions)

      text.attr("x", (this.width/3)*2)
      .attr("y", function(d,i){
        console.log(this.height, this.margin)
        return this.height + ((i+1)*this.margin.bottom/4) + 15
      }.bind(this))
      .attr("class", function(d){
        return "interventions intervention--type--"+d.type+" intervention-"+d.id;
      }.bind(this))
      .style('font-family', '"Trebuchet MS", Helvetica, sans-serif')
      .style('font-size', 11)
      .style("fill", function(d) {
          return this.color(d.type);
      }.bind(this))
      .html(function(d,i){
        return d.type.capitalize()+"<br>: "+d.title.capitalize(true)+" - "+d.description.capitalize(true);
      });
    }

  }

};
