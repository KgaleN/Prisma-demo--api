const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddEmployee = async(fullName, email,password, active) =>{

     await prisma.employee.create({
        data:{
            fullName: fullName,
            email: email,
            password: password,
            active: active, 
        }
    });

}

const AddTeam = async(name, nickname,headCoach, stadiumName, city, logoImg)=>{

     await prisma.team.create({
        data:{
                name: name,
                nickname: nickname,     
                headCoach: headCoach,
                stadiumName: stadiumName,
                city: city,         
                logoImg: logoImg
             }
    });

}

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

const AddPlayer = async(fullName, age, height, weight, nationality, status, position, team)=>{

     await prisma.player.create({
        data:{
            fullName: fullName,
            age: age,
            height: height,
            weight: weight,
            nationality: nationality,
            status: status,
            position: position,
            team: team       
             }
    });

}

const AddOfficial = async(fullName, active)=>{

     await prisma.offical.create({
        data:{
              fullName:fullName,      
              active: active  
             }
    });
}



const AddGameTeamStats = async(gameId, teamId)=>{

    var game= await prisma.game.findUnique({
                 where:{
                     id: gameId,
                 },
             })

    var team= await prisma.team.findUnique({
                where:{
                    id: teamId,
                },
            })
        
     await prisma.gameTeamStats.create({
        data:{
              game: { connect: { id: game.id }}, 
              team: { connect: { id: team.id }}  
             }
    });
}

    const AddSeasonTeamStats = async(season, team)=>{ 

         await prisma.seasonTeamStats.create({
            data:{
                  season: season, 
                  team: team  
                 }
        });
}

const AddLeagueTeamStats = async(season, team)=>{ 

     await prisma.leagueTeamStats.create({
        data:{
              season: season, 
              team: team  
             }
    });
}


const AddGamePlayerStats = async(game, player)=>{ 

     await prisma.gamePlayerStats.create({
        data:{
              game: game, 
              player: player  
             }
    });
}

const AddSeasonPlayerStats = async(season, player)=>{ 

     await prisma.seasonPlayerStats.create({
        data:{
            season: season, 
              player: player  
             }
    });
}

const AddLeaguePlayerStats = async(player)=>{ 
     await prisma.leaguePlayerStats.create({
        data:{
              player: player  
             }
    });
}

const AssignGameToOffical = async(gameId, officalId, role, position)=>{ 

     await prisma.gameOfficial.create({
             data:{
                role: role,
                position: position,
                gameId: gameId,
                empId: OfficalId
             }
    });
}

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

const DisplayListOfFixtures = async()=>{ 

    const listOfAllFixtures = await prisma.game.findMany({
        where: {
            gameDate: {
              gte:new Date()
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

const DisplayListOfTeams = async()=>{ 

return await prisma.team.findMany({
    include: {
        players: true, 
        seasonTeamStats: true,
        gameTeamStats: true,
        leagueTeamdStats: true
    },
    orderBy: {
        seasonTeamStats: {
            points: 'desc' // descending order based on points
        }
    }
});

}

const DisplayListOfEmployees = async()=>{ 

    return await prisma.employee.findMany({
        include: {
            games: true,
          }
       });

    
}

//idk abot this
const DisplayTeamFixtures = async(teamId)=>{ 

    return await prisma.team.find({
        where:{
            id: teamId, 
            gameDate: {
                lt: currentDate
              }
        },
        include: {
            players:true, 
            seasonTeamStats: true,
            gameTeamStats: true,
            leagueTeamdStats: true
          }
    });   
}

const DisplayTeamResults = async(teamId)=>{ 
    return await prisma.team.find({
        where:{
            id: teamId, 
            gameDate: {
                gt: currentDate
              }
        },
        include: {
            players:true, 
            seasonTeamStats: true,
            gameTeamStats: true,
            leagueTeamdStats: true
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


const DisplayTeamLeagueStats = async(teamId)=>{ 

    return await prisma.leagueTeamStats.find({
        where:{
            teamId: teamId
        }
    });   
}
 const DisplayTeamPlayers = async(teamId)=>{ 

   const listOfPlayers =await prisma.players.findMany({
        where:{
            teamId: teamId
        },
        include: {
            gamePlayerStats: true, 
            seasonPlayerStats: true,
            leaguePlayerStats: true
          }
    });   
    
    return listOfPlayers;
}

module.exports= {AddEmployee,AddTeam, AddGame, AddPlayer, AddOfficial, AddGameTeamStats, AddSeasonTeamStats,
                 AddLeagueTeamStats, AddGamePlayerStats, AddSeasonPlayerStats, AddLeaguePlayerStats, 
                 AssignGameToOffical, AssignGameToEmployee, DisplayListOfFixtures, DisplayListOfResults,
                 DisplayListOfTeams, DisplayListOfEmployees, DisplayTeamFixtures, DisplayTeamResults,
                 DisplaySelectedResults, DisplayTeamPlayers, DisplayTeamLeagueStats};