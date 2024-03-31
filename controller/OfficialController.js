require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddOfficial = async(fullName, active)=>{

     await prisma.official.create({
        data:{
              fullName:fullName,      
              active: active  
             }
    });
}

module.exports = {AddOfficial};