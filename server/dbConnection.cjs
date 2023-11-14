import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'


const salt = 10;
const app = express();


app.use(express.json);
app.use(cors());
app.use(cookieParser);
const mysql = require(mysql);

const db = mysql.createConnection({
  host: "classdb.it.mtu.edu",
  user: "jrbartos",
  password:"*mySQLF23CS*",
  database: "tspgroup4_rw"

})

app.post('/Team4SoftwareProject', (req, res) => {
  const sql = "INSERT INTO userLogin ('username', 'password', 'email') VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) =>{
    if(err) return res.json({Error: "Error for Hashing Password"})
    const values = [
      req.body.name,
      hash,
      req.body.email
    ]
    db.query(sql, [values], (err, result) => {
      if(err) return res.json({Error: "Inserting data Error to server"});
      return res.json({Statue: "Success"});
    })
  })
  
})

app.listen(3000, ()=>{
  console.log("Running...");
})


