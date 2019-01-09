// adding Handlebars, Express
const express = require('express');
const port = process.env.PORT || 3000;
const fs = require('fs');
// then we need to create an app variable and set the value of it to return value from express();
// no arguments needed for express()
var app = express();

/* Creating Dynamic html page using Handlebars package */
const hbs = require('hbs');

// adding middleware = add to log file
app.use( (req, res, next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;
  fs.appendFile('ServerLogs.log', log +'\n', (err)=>{
    if(err)
      console.log('Unable to append to server.log');
  });
  console.log(log);
    next();
});

// FIRST:
// telling hbs where to look for hbs files
hbs.registerPartials(__dirname+'/views/partials');

// SECOND:
// adding a folder to be viewable for clients
app.use(express.static(__dirname+ '/public/styles'));
app.use(express.static(__dirname+ '/public/images'));

hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});



// setting the view engine to hbs
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.render('index.hbs');
});
app.get('/hubble', (req, res) => {
  res.render('hubble.hbs');
});
app.get('/images', (req, res) => {
  res.render('images.hbs');
});
app.get('/images_page2', (req, res) => {
  res.render('images_page2.hbs');
});
app.get('/video', (req, res) => {
  res.render('video.hbs');
});
app.get('/video_page_2', (req, res) => {
  res.render('video_page_2.hbs');
});
app.get('/video_page_3', (req, res) => {
  res.render('video_page_3.hbs');
});
app.get('/video_page_4', (req, res) => {
  res.render('video_page_4.hbs');
});


app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`);
});
