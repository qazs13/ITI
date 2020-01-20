var counter = true;
var showOrHide = document.getElementById("theme");
document.getElementById('body').addEventListener("click",function(){
    showOrHide.style.display = "none";
    counter = true;
  })  
  document.getElementById('nav').addEventListener("click",function(){
    showOrHide.style.display = "none";
    counter = true;
  })  
  document.getElementById('search').addEventListener("click",function(){
    showOrHide.style.display = "none";
    counter = true;
  })  
document.getElementById('painter').addEventListener("click",function(){
if (counter == true)
{
    showOrHide.style.display = "block";
    counter = false;
}else
{
    showOrHide.style.display = "none";
    counter = true;
}
})


class Color
{
    constructor (nav,font,ver,back,tab)
    {
    this.navbarcolor = nav;
    this.navbarfontcolor = font;
    this.verticalbarcolor = ver;
    this.backgroundcolor = back;
    this.tabcolor = tab;
    } 
}
color = new Color(null,null,null,null);

document.getElementById('nav-bar-color').addEventListener("input",function(event){
Color.navbarcolor = event.srcElement.value;
document.getElementById('nav').style.backgroundColor = Color.navbarcolor;
})


document.getElementById('nav-bar-font-color').addEventListener("input",function(event){
    Color.navbarfontcolor = event.srcElement.value;
    for(let i = 0; i <= 4; i++)
    {
        document.getElementsByTagName('a')[i].style.color = Color.navbarfontcolor;
    }
})


document.getElementById('vertical-bar-color').addEventListener("input",function(event){
    Color.verticalbarcolor = event.srcElement.value;
    document.getElementById('versearch').style.backgroundColor = Color.verticalbarcolor;
    document.getElementsByClassName('vertical-bar')[0].style.background = Color.verticalbarcolor;
})


document.getElementById('background-color').addEventListener("input",function(event){
    Color.backgroundcolor = event.srcElement.value;
    console.log(Color.backgroundcolor)
    document.getElementById('main').style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.8),'+Color.backgroundcolor+'),url("/home/awalid/Documents/releases/finalrelease/project03/img/iti.jpg")';
})


document.getElementById('tab-color').addEventListener("input",function(event){
    Color.tabcolor = event.srcElement.value;
    console.log(document.getElementsByTagName('i'))
    for(let i = 2; i <= 5; i++)
    {
        document.getElementsByTagName('i')[i].style.color = Color.tabcolor;
    }
})