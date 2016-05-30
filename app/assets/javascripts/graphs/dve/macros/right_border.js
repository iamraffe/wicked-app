DVE.Graph.prototype.right_border = function (data) {
  return this.x(data.end) > this.x(this.maxDate) ? this.x(this.maxDate) : this.x(data.end);
}