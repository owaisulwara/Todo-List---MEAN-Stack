const mysql = require('mysql');
const express = require('express');
var connection = require('./connection');
/* module.exports = {
    fetchData: function(done){
    connection.query('SELECT * FROM nodeTable', (err, rows, fields)=>{
        if(err) throw err;
        else return done(rows);
    });
    },

    insertData : function(done){
    connection.query('INSERT INTO nodeTable(ID, Title)VALUES(5, "Farhan")', (err, rows, fields)=>{
        if(err) throw err;
        else return done(rows);
    });
    }
} */

exports.fetchData = function(done){
    connection.query('SELECT * FROM nodeTable', (err, rows, fields)=>{
        if(err) throw err;
        else return done(rows);
    });
    };

exports.insertData = function(data, done){
    connection.query("INSERT INTO nodeTable SET ?",[data], (err, rows, fields)=>{
        if(err) throw err;
        else return done(fields);
    });
    };