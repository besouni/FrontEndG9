function f1(){
   document.cookie = "user=btu";
}

function f2(){
   // setCookie();
   var d = new Date();
   console.log(d);
   console.log(d.getTime());
   d.setTime(d.getTime()+10000);
   console.log(d);
   console.log(d.toUTCString());
   setCookie("user1", "BTU12", 3)
}

function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d;
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 function f3(){
  console.log(document.cookie);
}

function f4(){
   localStorage.setItem("user1", "btu1");
}

function f5(){
   console.log(localStorage.getItem("user1"));
}

function f6(){
   localStorage.removeItem("user1");
}


