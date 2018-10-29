const express = require('express');
const router = express.Router();
const mysql = require('mysql');
var connection = require('../models/connection');
var fetchTodos = require('../models/query');

router.get('/', (req, res, next)=>{

    fetchTodos.fetchData((err, rows)=>{
        if(err) res.send(err);
        else
        res.send(rows);
    });

});

router.post('/insert', (req, res, next)=>{
    data = req.body;
    fetchTodos.insertData(data,(err, fields)=>{
        if(err) res.send(err);
        else
        res.send(fields);
        
    });

});

module.exports = router;