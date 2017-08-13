var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 
 'article-one':{
    title:'Article One by amruta',
    heading:'Article One',
    date:'9 August 2017',
    Content:` <p>
                 This is the content for my first article. This is the content for my first article.
                 This is the content for my first article.
             </p>
             <p>
                 This is the content for my first article. This is the content for my first article.
                 This is the content for my first article.
             </p>
             <p>
                 This is the content for my first article. This is the content for my first article.
                 This is the content for my first article.
             </p>`
             },
 'article-two':{
    title:'Article Two by amruta',
    heading:'Article Two',
    date:'10 August 2017',
    Content:` <p>
                 This is the content for my second article.
             </p>`
            
},
 'article-three':{
    title:'Article Three by amruta',
    heading:'Article Three',
    date:'20 August 2017',
    Content:` <p>
                 This is the content for my third article. 
             </p>`}
};

function Createtemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.Content;

var htmlTemplate=`
<html>
 <head>
     <title>
         
         ${title}
         
     </title>
     <link href="/ui/style.css" rel="stylesheet" />
 </head>   
 <body>
     <div class="container">
         <div>
             <a href="/">Home</a>
         </div>
         <hr/>
           <h3>
               ${heading}
           </h3>
         <div>
             ${date}
         </div>
         <div>
             ${content}
         </div>
     </div>
 </body>
    
</html>

`;
  return htmlTemplate;
 }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get("/counter",function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
});


var names=[];
app.get('/submit-name',function(req,res){  //URL /submit-name?name=xxxx
   var name=req.query.name;

   names.push(name);
   //JSON :JavaScript object notation
   res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    //articleName==article-one
    //articles[articleName]==article-one
    var articleName=req.params.articleName
  res.send(Createtemplate(articles[articleName]));
});






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
