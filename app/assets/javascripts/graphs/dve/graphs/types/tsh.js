//= require graphs/dve/init.js
//= require graphs/dve/graph.js

/*

  AFP GRAPH

*/

DVE.Graph.prototype.TSH = function(){

  this.threshold = {
    "TESTOSTERONE": {over: 1100, under: 250}
  };

  this.number_of_symbols = 1

  this.color = d3.scale.ordinal().range(['#383F47', '#F1CC28', '#B35252', '#63B28F']);

  this.draw_interventions();

  this.render_single();
};
