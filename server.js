require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const fs = require('fs');
//-----------------------
//require the express router
//const router = express.Router();
/*const multer = require('multer');
const DIR = './uploads/images/';
const upload = multer({dest: DIR}).single('photo');*/
//const routes = require('./routes/index');
//---------------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());



app.use(express.static('uploads'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));


// use JWT auth to secure the api
app.use(jwt());



//-------------------------------------

//create a cors middleware
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/upload', function (req, res, next) {
    var path = '';
    debugger;
    upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
      console.log(req.get(''))
       path = req.file.path;
       console.log(req.file);
      console.log(req.file.path);
  return res.send("Upload Completed for "+req.file.path); 
  });
})*/
//---------------------------------------------------------
// api routes

app.use('/users', require('./users/users.controller'));
app.use('/products', require('./products/product.controller'));

// global error handler
app.use(errorHandler);


//app.use('/images',express.static(path.resolve('/uploads')));


// start server
const port = process.env.port === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
