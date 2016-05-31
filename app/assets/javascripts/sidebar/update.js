/*

  UPDATE INTERVENTION SIDEBAR

*/

DVE.Graph.prototype.update_sidebar = function (data) {
  var html = '';
  data.forEach(function(intervention,i){
    html += "<li>"+intervention.title+": "+intervention.description+" - "+moment(intervention.start).format('L')+" - "+moment(intervention.end).format('L')+"</li>"
  });
  $("#interventions-list").html(html);
}
