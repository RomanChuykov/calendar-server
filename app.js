import express from "express"
import cors from "cors"
import router from "./routes/routes.js";

const app=express();
app.use(cors());
app.use(express.json())
app.use ('/data',router)

app.use((req,res)=>{
    
    res.status(404).json({message:'Not found!!'})
})
/*const exp = require('constants');
const express=require('express');
const fs=require('fs');
const app=express();
const port=5000;

app.use(express.json())

app.post('/updateData',(req,res)=>{
    const newData=req.body;
    updateDataInJSONFile(newData);
    res.send('Дані оновлено')
});

function updateDataInJSONFile(newData){

    const fileContent=fs.readFileSync('data.json')
    const data=JSON.parse(fileContent);

    for(const key in newData){
        if (newData.hasOwnProperty(key)){
            data[key]=newData[key]
        }
    }
    fs.writeFileSync('data.json',JSON.stringify(data,null,2))
}*/
export default app;