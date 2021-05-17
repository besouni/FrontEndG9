// m = [45, 4.9, true, "Script"]
// console.log(m[1]);
// for(i=0; i<m.length; i++){
//    console.log(m[i]);
// }
// o = {name:"Mariami", lastname:"Nikogosovi"}
// console.log(o['name'])
// console.log(o.name)

import from 'app1.JS';


function f1(){
   document.write("<h3>hello JS</h3>");
}
f1();
f1();

function f2(){
   a = 32;
   return a;
   b = 78;
   return b;
}

document.write(f2()+3);

function f3(name, lastname=""){
   document.write("<h3>"+name+" "+lastname+"</h3>");
}

f3("Roman", "Nikulin")

function f4(x, y){
   return x+y;
}

document.write(f4(4, 5));

function lab8_4(w){
   t = "<table border=1, width="+w+" height=300>";
   t += "<tr>";
   t += "<td>";
   t += "</td>";
   t += "<td>";
   t += "</td>";
   t += "</tr>";
   t += "<tr>";
   t += "<td>";
   t += "</td>";
   t += "<td>";
   t += "</td>";
   t += "</tr>";
   t += "</table>";
   document.write(t);
}

lab8_4(800);