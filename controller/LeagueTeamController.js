require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddLeagueTeamStats = async(season, team)=>{ 

     await prisma.leagueTeamStats.create({
        data:{
              season: season, 
              team: team  
             }
    });
}

const DisplayLeagueTeamStats = async(teamId)=>{ 

    return await prisma.leagueTeamStats.find({
        where:{
            teamId: teamId
        }
    });   
}


module.exports = {AddLeagueTeamStats, DisplayLeagueTeamStats};