document.write("<script src=''></script>")

function f1(){
   for(let i=0; i<5; i++){
      console.log(i);
   }
   // console.log("I="+i)
}
f1();

console.log("==========")


function f2(){
   var a = 17;
   if(10){
      var a = 10;
      let a1 = 12; 
   }
   console.log(a);
   // console.log(a1);
}

f2();
console.log("==========")

t1 = 23;
var t2 = 24;
let t3 = 78;

function f3(){
   console.log(t1);
   console.log(t2);
   console.log(t3);
   t1 = 67;
   var t2 = 68;
   // let t3 = 90;
   console.log(t2);
   // console.log(t3);
}

f3();
console.log("==========")
console.log(t1);
console.log(t2);

var x1 = 89;
console.log(x1)
var x1 = 78;

let x2 = 89;
console.log(x2)
// let x2 = 78;

console.log(window.x1)
console.log(window.x2)

const pi = 3.14

// pi = 87

const st1 = {name:"Giorgi", lastname:"Tadiashvili"}
console.log(st1);
st1.name = "Roman"
st1.lastname = "Nikulin"

console.log(st1)



