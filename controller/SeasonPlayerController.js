require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddSeasonPlayerStats = async(season, player) => { 
     await prisma.seasonPlayerStats.create({
        data:{
            season: season, 
              player: player  
             }
    });
}

module.exports = {AddSeasonPlayerStats};