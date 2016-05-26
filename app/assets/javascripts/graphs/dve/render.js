/*

  GRAPH RENDER FUNCTION

*/

DVE.Graph.prototype.render = function () {
  this.types[this.graph_type](this);
};
