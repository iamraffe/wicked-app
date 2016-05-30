// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/*

GRAPHS - INDEX

 */

$(document).on("turbolinks:load ready", function(){
  if($("#graphs-index-table").length > 0){
    $('#graphs-index-table').DataTable();
  }
});

$(document).on('click', "#add-intervention", function(){
  console.log("click")
  $("#intervention-form").slideToggle();
});
