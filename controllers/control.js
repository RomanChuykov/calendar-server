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