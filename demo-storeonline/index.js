var express = require('express');
var app = express();
app.listen(3300);

var bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({extended:true}));
// template engine
app.set('view engine', 'ejs');
app.set('views', './views');
// routes
app.use('/', require('./routes/customer.js'));
app.use('/admin', require('./routes/admin.js'));