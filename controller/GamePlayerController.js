require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddGamePlayerStats = async(game, player)=>{ 

     await prisma.gamePlayerStats.create({
        data:{
              game: game, 
              player: player  
             }
    });
}

module.exports = {AddGamePlayerStats};