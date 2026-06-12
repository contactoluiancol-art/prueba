const express=require('express');const app=express();
app.get('/api/dashboard',(req,res)=>res.json({ok:true,modulo:'dashboard'}));
app.listen(3000,()=>console.log('Servidor http://localhost:3000'));