const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var api = require('./server/routes/api');
var app = express();
app.use(express.static(path.join(__dirname, 'dist/my-app')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/api', api);
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/my-app/index.html'));
});
app.listen(3000, (req, res)=>{
    console.log("Listen to port 3000");
});