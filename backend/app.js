const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const FromModel = require('./models/Form')

const app =express();
app.use (express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/wadding')

app.post('/register',(req,res)=>{

    const {email,}=req.body;

    FromModel.findOne({email:email})
    
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FromModel.create(req.body)
            .then(data =>res.json(data))
            .catch(err => res.json(err))
        }
    })
})
app.post('/login',(req,res)=>{

    const{email,password}=req.body;
    FromModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json('Success')
            }
            else{
                res.json("Wrong password")
        } 
        
        }
       else{
        res.json('No records found')
       }

    })
})
app.listen(3002,()=>{
    console.log("Server list no http://127.0.0.1:3002");
});