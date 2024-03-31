require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

module.exports = {AddPlayer, DisplayTeamPlayers};