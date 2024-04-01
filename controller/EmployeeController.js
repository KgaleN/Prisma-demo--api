require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddEmployee = async(req, res) =>{
     await prisma.employee.create({
        data:{
            fullName: req.body.fullName,
            email: req.body.email,
            password:req.body. password,
            active: req.body.active, 
        }
    }).then(() => {
        res.json({message: "success employee created"})
    });
}

const DisplayListOfEmployees = async(req, res) => { 
    return await prisma.employee.findMany({
        include: {
            games: true,
          }
       }).then((listOfAllEmployees) => {
        res.json({listOfAllEmployees: listOfAllEmployees})
     });
}

module.exports = {AddEmployee, DisplayListOfEmployees};