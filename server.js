// Importing the 3 modules: mysql, express, cors
const mysql = require('mysql');
const express = require('express');
const cors = require ('cors');
//const path = require ('path');
// Assign to app the express server
const app = express();

// Tell app to use cors
// CORS is a node.js package for providing a Connect/Express middleware
app.use(cors());

// If OK, CORS-enabled web server listening on port 5000
app.listen(5000,()=>{
    console.log("Listening on PORT 5000");
    })

app.get('/cash_register', (re,res)=>{

// Set Up the connection to our MY SQL DB
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'cash_register'
});


    const sql = "SELECT * FROM drawer";

        db.query(sql,(err, data)=>{
        if (err) return res.json(err);
        console.log(data)
        return res.json(data);
    })

});



