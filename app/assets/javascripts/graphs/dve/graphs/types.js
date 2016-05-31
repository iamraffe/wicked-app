//= require graphs/dve/init.js
//= require graphs/dve/graph.js

DVE.Graph.prototype.types = {
  // cholesterol: function(graph){
  //   return graph.Cholesterol();
  // },
  vitamin_d: function(graph){
    return graph.VitaminD();
  },
  tsh:function(graph){
    return graph.TSH();
  },
  // white_cell:function(graph){
  //   return graph.WhiteCell();
  // },
  // vitamin_b12:function(graph){
  //   return graph.VitaminB12();
  // },
  // viral_load:function(graph){
  //   return graph.ViralLoad();
  // },
  testosterone:function(graph){
    return graph.Testosterone();
  },
  // red_cell:function(graph){
  //   return graph.RedCell();
  // },
  // mercury:function(graph){
  //   return graph.Mercury();
  // },
  // iron:function(graph){
  //   return graph.Iron();
  // },
  // hemoglobin_a1c:function(graph){
  //   return graph.HemoglobinA1C();
  // },
  // folate:function(graph){
  //   return graph.Folate();
  // },
  // ferritin:function(graph){
  //   return graph.Ferritin();
  // },
  // copper:function(graph){
  //   return graph.Copper();
  // },
  calcium:function(graph){
    return graph.Calcium();
  },
  // alt:function(graph){
  //   return graph.ALT();
  // },
  afp: function(graph){
    // console.log("GRAPH TYPES => ", graph)
    return graph.AFP();
  },
  insulin:function(graph){
    return graph.Insulin();
  },
  // uric_acid:function(graph){
  //   return graph.UricAcid();
  // },
  // creatine:function(graph){
  //   return graph.Creatine();
  // },
  // systolic_blood_pressure:function(graph){
  //   return graph.SystolicBloodPressure();
  // },
  // diastolic_blood_pressure:function(graph){
  //   return graph.DiastolicBloodPressure();
  // },
};
