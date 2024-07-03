const express= require('express');

const app= express();


app.get('/',(req, res)=>{
    res.send('A simple node app running on EC2 Vm')
})
app.get('/contact',(req, res)=>{
    res.send('Please contact admin for changes!')
})
const PORT=process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log('Node Server Running on port',PORT)
})