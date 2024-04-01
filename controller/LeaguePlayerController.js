require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddLeaguePlayerStats = async(player) => { 
     await prisma.leaguePlayerStats.create({
        data:{
              player: player  
        }
    });
}

module.exports = {AddLeaguePlayerStats};