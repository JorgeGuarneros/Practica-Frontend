const mysql=require("mysql");
const conecta=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Erick2000',
  port:3307,
  database:'ejemplo'
})
conecta.connect();
module.exports=conecta;
