require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddSeasonTeamStats = async(season, team) => { 
     await prisma.seasonTeamStats.create({
        data:{
              season: season, 
              team: team  
             }
    });
}

module.exports = {AddSeasonTeamStats};