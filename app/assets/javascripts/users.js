// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/*

USERS - INDEX

 */

$(document).on("turbolinks:load ready", function(){
  if($("#users-index-table").length > 0){
    $('#users-index-table').DataTable();
  }
});
