require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//
const AddGame = async(gameDate, gameTime, location, active, empId, seasonId) => {
    var season = await prisma.season.findUnique({
        where:{
            id: seasonId,
        },
    })

    var emp = await prisma.employee.findUnique({
                where:{
                    id: empId,
                },
            })

        await prisma.team.create({
            data:{
                gameDate: gameDate ,  
                gameTime: gameTime,  
                location: location,
                active: active, 
                emp: { connect: { id: emp.id }},
                season: { connect: { id: season.id }}      
            }
    });
}

// const AddGame = async(seasonId) => {
//     const currentDate = new Date();

// // Set the time for the date object
// currentDate.setHours(18); // Set hours to 18 (6 PM)
// currentDate.setMinutes(0); // Set minutes to 0
// currentDate.setSeconds(0);
//     var season= await prisma.season.findUnique({
//         where:{
//             id: seasonId,
//         },
//     })

//     var emp= await prisma.employee.findUnique({
//         where:{
//             id: 1,
//         },
//     })

//         return await prisma.game.create({
//             data: {
//                 gameDate: new Date(), // Example game date
//                 gameTime: currentDate,   // Example game time
//                 location: "Stadium XYZ", // Example location
//                 active: "y",            // Example active status
//                 emp: {
//                 connect: { id: emp.id } // Connect to the employee using their ID
//             },
//             season: {
//                 connect: { id: season.id } // Connect to the season using its ID
//             }   // Example season
//             }
//         });
    
//     }

const AssignGameToEmployee = async(req, res) => { 
    await prisma.game.update({
       where:{
           id: req.body.gameId
       },
            data:{
               empId: req.body.empId
            }
   })
   .then(() => {
    res.json({message: "Success AssignGame"})
 });
}

const AssignGameToOfficial = async(req, res) => { 
    await prisma.gameOfficial.create({
            data:{
               role: req.body.role,
               position: req.body.position,
               gameId: req.body.gameId,
               empId: req.body.officialId
            }
   })
   .then(() => {
    res.json({message: "Success AssignOfficial"})
 });
}

const DisplayListOfResults = async(req, res) => { 
    return await prisma.game.findMany({
        where: {
            gameDate: {
              lte: new Date()
            }
          },

        include: {
            gameTeamStats: true,
            gamePlayerStats: true
          }
    })
    .then((listOfAllResults) => {
        res.json({listOfAllResults: listOfAllResults})
     });
}

// I'm not sure what this is attached to.
const DisplayListOfFixtures = async(req, res) => { 
    const listOfAllFixtures = await prisma.game.findMany({
        where: {
            gameDate: {
              get:new Date()
            }
          },
        include: {
            gameTeamStats: true,
            gamePlayerStats: true
          }
    });

    return listOfAllFixtures;
}

const DisplaySelectedResults = async(gameId) => { 
    return await prisma.game.find({
        where:{
            id: req.body.gameId, 
        },
        include: {
            gameOfficials: true, 
            gameTeamStats: true,
            gamePlayerStats: true 
          }
    })
    .then((selectedResults) => {
        res.json({selectedResults: selectedResults})
     });   
}

// const DisplaySelectedFixture = async(gameId) => { 
//     return await prisma.game.findMany({
//         where:{
//             id: gameId, 
//             gameDate: {
//                 lt: currentDate
//               }
//         },
//         include: {
//             gameOfficials: true, 
//             gameTeamStats: true,
//             gamePlayerStats: true 
//           }
//     });   
// }

module.exports = {AddGame, AssignGameToEmployee, AssignGameToOfficial, DisplayListOfFixtures, DisplayListOfResults, DisplaySelectedResults};