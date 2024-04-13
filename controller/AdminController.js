require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// TODO: Add admin CRUD.
// TODO: Probably need to do a bit of research on jwt and whether doing jwt management is better on front end or back-end and how to do it securely.

const AddAdmin = async(req, res) =>{
    await prisma.admin.create({
       data:{
           fullName: req.body.fullName,
           email: req.body.email,
           password:req.body.password,
           active: req.body.active, 
       }
   }).then(() => {
       res.json({message: "success admin created"})
   });
}

const DisplayListOfAdmins = async(req, res) => { 
   return await prisma.admin.findMany({
       include: {
           games: true,
         }
      }).then((listOfAllAdmins) => {
       res.json({listOfAllAdmins: listOfAllAdmins})
    });
}

module.exports = {AddAdmin, DisplayListOfAdmins};