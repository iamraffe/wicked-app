//= require graphs/dve/init.js
//= require graphs/dve/graph.js

/*

  AFP GRAPH

*/

DVE.Graph.prototype.AFP = function(){

  this.threshold = {
    "AFP": {over: 8.1, under: null}
  };

  this.number_of_symbols = 1

  this.color = d3.scale.ordinal().range(['#383F47', '#F1CC28', '#B35252', '#63B28F']);

  var entries = this.data.entries;

  var dataNest = d3.nest()
      .key(function(d) {return d.symbol;})
      .entries(entries);

  if(dataNest[0].values.length == 1){
    this.single_point_data = [
      [0, (this.data.entries[0].value - 8.1) > 0 ? 8.1 : this.data.entries[0].value],
      [this.data.entries[0].value, (this.data.entries[0].value - 8.1) > 0 ? (this.data.entries[0].value - 8.1) : 0]]
    this.draw_single_point();
    this.draw_interventions();
  }
  else{
    this.draw_interventions();

    this.draw_single();

    this.draw_dots();
  }
};
