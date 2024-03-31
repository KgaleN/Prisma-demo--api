require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddGame = async(gameDate, gameTime, location, active, empId, seasonId)=>{

var season= await prisma.season.findUnique({
    where:{
        id: seasonId,
    },
})

var emp= await prisma.employee.findUnique({
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

// const AddGame = async(seasonId)=>{
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

const AssignGameToEmployee = async(gameId, empId)=>{ 

    await prisma.game.update({
       where:{
           id:gameId
       },
            data:{
               empId: empId
            }
   });
}

const AssignGameToOfficial = async(gameId, officialId, role, position)=>{ 

    await prisma.gameOfficial.create({
            data:{
               role: role,
               position: position,
               gameId: gameId,
               empId: officialId
            }
   });
}

const DisplayListOfFixtures = async()=>{ 

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

const DisplayListOfResults = async()=>{ 
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
    });
}

const DisplaySelectedResults = async(gameId)=>{ 

    return await prisma.game.find({
        where:{
            id: gameId, 
        },
        include: {
            gameOfficials:true, 
            gameTeamStats:true,
            gamePlayerStats: true 
          }
    });   
}

// const DisplaySelectedFixture = async(gameId)=>{ 
//     return await prisma.game.findMany({
//         where:{
//             id: gameId, 
//             gameDate: {
//                 lt: currentDate
//               }
//         },
//         include: {
//             gameOfficials:true, 
//             gameTeamStats:true,
//             gamePlayerStats: true 
//           }
//     });   
// }

module.exports = {AddGame, AssignGameToEmployee, AssignGameToOfficial, DisplayListOfFixtures, DisplayListOfResults, DisplaySelectedResults};