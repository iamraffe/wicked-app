$(document).on('turbolinks:load', function(e){
  var opacity_values = {
    bar: 0.1,
    line: 1,
    interventions: 1
  }

    d3.selectAll("[type=checkbox][name=view]").on("change", function() {
      var selected = this.value;
      console.log(selected)
      // console.log(this.value);
      var type = this.value;
      var opacity = this.checked ? opacity_values[this.value] : 0;
      d3.selectAll("."+this.value)
          .transition().duration(500)
          .style("opacity", opacity);
      // d3.selectAll(".interventions"+type)
      //     .transition().duration(500)
      //     .style("opacity", opacity);
      // d3.selectAll(".interventions-bg"+type)
      //     .transition().duration(500)
      //     .style("opacity", opacity);
      // d3.selectAll(".intervention-text"+type)
      //     .transition().duration(500)
      //     .style("opacity", opacity);
    });

    // d3.selectAll("[type=radio][name=optradio]").on("click", function() {
    //   console.log(this.value)
    //   if(this.value === "gauge"){
    //     d3.selectAll("#gauge")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //     d3.selectAll(".tagLDL")
    //         .transition().duration(500)
    //         .style("opacity", 0);
    //     d3.selectAll(".tagTRIGLYCERIDES")
    //         .transition().duration(500)
    //         .style("opacity", 0);
    //     d3.selectAll(".tagHDL")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //     d3.selectAll(".tagCHOLESTEROL")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //   }
    //   else if(this.value === "all"){
    //     d3.selectAll("#gauge")
    //         .transition().duration(500)
    //         .style("opacity", 0);
    //     d3.selectAll(".tagLDL")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //     d3.selectAll(".tagTRIGLYCERIDES")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //     d3.selectAll(".tagHDL")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //     d3.selectAll(".tagCHOLESTEROL")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //   }
    //   else if(this.value === "other"){
    //     d3.selectAll("#gauge")
    //         .transition().duration(500)
    //         .style("opacity", 0);
    //     d3.selectAll(".tagHDL")
    //         .transition().duration(500)
    //         .style("opacity", 0);
    //     d3.selectAll(".tagCHOLESTEROL")
    //         .transition().duration(500)
    //         .style("opacity", 0);
    //     d3.selectAll(".tagLDL")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //     d3.selectAll(".tagTRIGLYCERIDES")
    //         .transition().duration(500)
    //         .style("opacity", 1);
    //   }
    // });

    // $("input").on("change", function(){
    //   var name = $(this).attr("name");
    //   $('input[type="text"][name="'+name+'"]').val($(this).val());
    // });

});

