const express =require('express');
const port= (process.env.port || 4000);
const app= express();

app.set('port',port);
app.listen(app.set('port'));
console.log('hola soy servidor');

const cors=require('cors');
app.use(express.json());
app.use(cors());

app.use('/login',require('./routes/rutas'));




