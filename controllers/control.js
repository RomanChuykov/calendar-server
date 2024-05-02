import fs from "fs/promises"

const file="./data.json"

export const dataOut=async(req,res)=>{
    try {
        const result=await fs.readFile(file,'utf-8');
        return  JSON.parse(result)
    }catch (error){
        return {message:error.message}
    }
}
export const datain=async(req,res)=>{
    
}
export const writeData=async(req,res)=>{
    try {
        console.log('req.body', req.body);
        await fs.writeFile(file,JSON.stringify(req.body,null,2));
        res.send( "Write data is OK")//JSON.parse(req.body);
    } catch (error) {
        return {message:error.message}
    }
}