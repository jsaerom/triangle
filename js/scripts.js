$(document).ready(function(){
  $("#form").submit(function(event){
    var v1 = parseInt($("input#side1").val());
    var v2 = parseInt($("input#side2").val());
    var v3 = parseInt($("input#side3").val());

    if ((v1 === v2)&& (v2===v3)){
        $(".result").text("This is an equilateral triangle");
    }else if ( (v1 + v2) >= v3 && (v1 + v3) >= v2 && (v2 + v3) >= v1 ){
      if ((v1 !== v2) && (v2 !== v3) && (v1 !== v3)){
        $(".result").text("This is a scalene triangle");
      } else{
        $(".result").text("This is an isosceles triangle");
      };
    } else {
      $(".result").text("This is not a triangle");
    };
  event.preventDefault();
  });
});
