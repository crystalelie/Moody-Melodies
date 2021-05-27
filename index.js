// client ID  23288dc0ef9c4cb68d96ca14f6c62285
// client secret 640192acba464b4fb1d104551c2acc46
// app.set('port', 3434)


var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/html'))


// Setting up pages for the directory
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/Home.html'));
});

app.get('/PlaylistGenerator',function(req,res){
    res.sendFile(path.join(__dirname+'/html/PlaylistGenerator.html'));
  });

app.get('/Recommendation',function(req,res){
  res.sendFile(path.join(__dirname+'/html/recommendation.html'));
});

app.get("/thankyou",function(req,res){
  res.sendFile(path.join(__dirname+'/html/thankyou.html'));
});

app.get('/Subscribe', function(req,reg) {
  res.sendFile(path.join(__dirname+'/html/subscribe.html'));
});

//PDF Download
app.post('/download', function(req, res){
  var tempFile="/public/images/MoodyMelodiesPlaylistDetails.pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

  // Error handling for 404 and 500
app.use(function(req,res){
    res.status(404);
    res.sendFile(path.join(__dirname+'/html/404.html'));

  });
  
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.sendFile(path.join(__dirname+'/html/500.html'));

  });



app.listen(process.env.port || 3531)
console.log('Running at port 3531')

