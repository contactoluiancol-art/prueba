const express=require('express');
const app=express();
app.get('/',(req,res)=>res.json({mensaje:'API EI SST funcionando'}));
app.listen(3000,()=>console.log('Servidor iniciado'));
