import express from "express";
 import { dataOut } from "../controllers/control.js";
  
const router=express.Router();

// router.get('/',dataOut)
router.get('/',async (req, res, next) => { 
       
        const result= await dataOut();
        console.log(result)
        res.json(result)
      })

  

export default router;