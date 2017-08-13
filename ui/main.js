//counter code
var button = document.getElementById('counter');

button.onclick = function(){
  
  //Create a request object
  var request=new XMLHttpRequest();
  
  //capture the response and store it in variable
  request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        //Take some Action
        if(request.status===200){
            var counter=request.responseText;
             var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    } 
    
  };

//Make a request
request.open('GET','http://patangeamruta16.imad.hasura-app.io/counter',true);
 request.send(null);

};

//submit name


var submit=document.getElementById('submit_btn');


submit.onclick=function()
{
  //make the request to the server and send the name
   //Create a request object
  var request=new XMLHttpRequest();
  
  //capture the response and store it in variable
  request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        //Take some Action
        if(request.status===200){
            //Capture a list of name and render as list.
             // var names=['name1','name2','name3'];
             var names=request.responseText;
             names=JSON.parse(names);
              var list='';
              for(i=0;i<names.length;i++)
              {
                  list += '<li>' + names[i] + '</li>';
              }
              var ul=document.getElementById('namelist');
              ul.innerHTML=list;
            
        }
    } 
    
  };
  
var nameinput=document.getElementById('name');
var name=nameinput.value;
//Make a request
request.open('GET','http://patangeamruta16.imad.hasura-app.io/submit-name?name=' +name,true);
 request.send(null);
  
};
