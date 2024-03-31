require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

module.exports = {AddGameTeamStats};