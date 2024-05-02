import express from "express";
 import { dataOut,writeData } from "../controllers/control.js";
  
const router=express.Router();

// router.get('/', dataOut);
// router.get('/',dataOut)
router.get('/',async (req, res, next) => { 
        const result= await dataOut();
        res.json(result)
      });
// router.post("/",writeData);
router.post('/',async (req,res)=>await writeData(req,res));

  

export default router;