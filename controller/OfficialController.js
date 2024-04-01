require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddOfficial = async(req, res) => {
     await prisma.official.create({
        data:{
              fullName: req.body.fullName,      
              active: req.body.active  
        }
    })
    .then(() => {
        res.json({message: "Success AddOfficial"})
    });
}

module.exports = {AddOfficial};