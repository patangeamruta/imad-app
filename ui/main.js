

console.log('Loaded!');

//change the text
var element=document.getElementById('main');
element.innerHTML='new value1';

//move the image
var img=document.getElementById('madi');
img.onclick=function(){
    
  img.style.marginLeft='100px';  
};