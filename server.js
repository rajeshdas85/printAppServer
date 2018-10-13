require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const fs = require('fs');
const path=require('path');

app.use(bodyParser.json());

app.use(cors());

app.use('/users', require('./users/users.controller'));
app.use('/products', require('./products/product.controller'));


// use JWT auth to secure the api

// api routes
app.use(express.static(path.join(__dirname,'public')));

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'public/index.html'));
})

app.use(jwt());



// global error handler
app.use(errorHandler);


// start server
//const port = process.env.port === 'production' ? 80 : 4000;
const port = process.env.port || 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
