const express = require('express');
const bcrpt = require('bcrypt');
const router = express.Router();
const OfficialController = require('../controller/OfficialController');

router.post('/AddOfficial',async (req,res,)=>{
    
    OfficialController.AddOfficial(req.body.fulname, req.body.active).then(()=>{
       res.json({message: "Success AddOfficial"})
    })
})

module.exports = router
