const routes=require('express').Router();
routes.get('/h',(req, res)=>{res.send('ruta principal :)')});
module.exports=routes;

const consulta=require('../config/conexionbd');

routes.get('/rol',(req,res)=>{
  let sql='select * from rol'
  consulta.query(sql,(err, rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

routes.get('/usuario',(req,res)=>{
  let sql='select * from usuario'
  consulta.query(sql,(err, rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

routes.get('/userrol',(req,res)=>{
  let sql='select * from userrol'
  consulta.query(sql,(err, rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

routes.get('/base',(req,res)=>{
  let sql='select usuario.Nombre, rol.Dessc from userrol inner join rol,usuario where userrol.Idrol=rol.Idrol and userrol.iduser=usuario.Iduser'
  consulta.query(sql,(err, rows, fields)=>{
    if(!err) res.json(rows);
    else{
      console.error(err);
    }
  })
});

routes.get('/:id',(req,res)=>{
  const {id}=req.params;
  let sql ='select * from usuario where iduser = ?';
  consulta.query(sql,[id],(err,rows)=>{
    if(!err) res.json(rows);
    else{
      console.log(err);
    }
  })
});

routes.delete('/:id',(req,res)=>{
  const {id}=req.params;
  let sql ='select * from usuario where iduser = ?';
  consulta.query(sql,[id],(err,rows)=>{
    if(!err)
      res.json(rows);
    else{
      console.log(err);
    }
  })
});

routes.post('/insertar',(req,res)=>{
  let sql =`INSERT INTO rol (idrol, dessc) VALUES ('${req.body.idrol}','${req.body.dessc}')`;
  consulta.query(sql,(err,rows)=>{
    if(!err)
      res.json("insertado");
    else{
      console.error(err);
    }
  })
});

routes.put('/:id',(req,res)=>{
  const {id}=req.params;
  let sql = `UPDATE rol SET ? WHERE idrol = ?`;
  consulta.query(sql, [req.body,id], (err,rows)=>{
    if(!err)
      res.json("actualizado");
    else{
      console.error(err);
    }
  })
});
