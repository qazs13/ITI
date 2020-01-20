 var ad=document.getElementsByClassName("rowofsubject")[0];
 var ne=document.getElementsByClassName("rowofsubject")[1];
 var pro=document.getElementsByClassName("rowofsubject")[2];
 var sy=document.getElementsByClassName("rowofsubject")[3];
 var maindiv=document.getElementsByClassName("main")[0];
 var con=document.getElementsByClassName("content")[0];
 var over=document.getElementsByClassName("overlay");
var i=0;
function funon (e){
     i=e.target.id;
over[i].style.display="block";
over[i].addEventListener("click",funoff);
}
function funoff(){
   over[i].style.display="none";
}
function fun(e){
   console.log(e);
   
  //e.style.backgroundColor="fff";
}

   ad.addEventListener('click',funon);
   ne.addEventListener('click',funon);
   pro.addEventListener('click',funon);
   sy.addEventListener('click',funon);
maindiv.addEventListener("click",funoff);
ad.addEventListener("mouseenter",fun),
   ne.addEventListener('mouseenter',fun);
   pro.addEventListener('mouseenter',fun);
   sy.addEventListener('mouseenter',fun);



