//counter code
var button =document.getElementById('counter');
var counter1=0;
button.onClick = function(){
  
  //make a request to the counter endpoint
  
  //capture the response and store it in variable
  

 //render the variable in the correct span
 counter1=counter1+1;
 var span=document.getElementById('count');
 span.innerHTML=counter.toString();
};