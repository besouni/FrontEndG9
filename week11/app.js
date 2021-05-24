// example1();

function example1(){
   var divs = document.getElementsByTagName("div");
   console.log(divs);
   divs[0].style.backgroundColor = "yellow";
   divs[0].innerHTML = "<b>Hello DOM</b>";
   divs[0].innerText = "<b>Hello DOM</b>";
}

function example2(){
   var ps = document.getElementsByClassName("p1");
   console.log(ps);
   for(let item of ps){
      console.log(item);
      item.style.backgroundColor = "brown";
      item.innerHTML = "Paragraph";
   }
}

function example3(){
   var p1 = document.getElementById("par1");
   console.log(p1);
   p1.style.backgroundColor = "pink";
}

function example4(){
   var ps = document.querySelectorAll("#par1");
   console.log(ps);
   var ps1 = document.getElementsByClassName("p1");
   console.log(ps1);
   var pId = document.querySelector("#par1");
   console.log(pId);
}

function example5(){
   var d = document.getElementById("data");
   console.log(d.value);
   var h = document.querySelector(".header");
   console.log(h);
   var val = d.value;
   var d1 = parseInt(document.getElementById("data1").value);
   h.innerText = d1+7;
   var par2 =  document.getElementById("par2");
   par2.classList.add("p2")
   par2.addEventListener("click", function(){
      console.log("Hello");
   })
}

var par2 =  document.getElementById("par2");

function example6(){
   setTimeout(function(){
      console.log(12)
   }, 3000)

   setTimeout(settimeoutExample, 3000)
}

function settimeoutExample(){
   console.log("SetTimeOut");
}

i  = 0
function example7(){
   var k = setInterval(function(){
      console.log(i);
      i++;
   }, 1000)
}

function example8(){
   clearInterval(k);
}




