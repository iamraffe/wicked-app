DVE.Graph.prototype.left_border = function (data) {
  return this.x(data.start) < this.x(this.minDate) ? this.x(this.minDate) : this.x(data.start);
}