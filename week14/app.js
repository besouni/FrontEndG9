var p = $("p");
var d1 =  $("#d1");
console.log(d1);
$("#d1").click(function(){
   console.log(p);
});

$("#jq").click(function(){
   // $("#d1").toggle(2000);
   $("#d1").css("background-color", "green");
})