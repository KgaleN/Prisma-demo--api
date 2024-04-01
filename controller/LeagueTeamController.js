require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddLeagueTeamStats = async(season, team) => { 
     await prisma.leagueTeamStats.create({
        data:{
              season: season, 
              team: team  
        }
    });
}

const DisplayLeagueTeamStats = async(req, res) => { 
    return await prisma.leagueTeamStats.find({
        where:{
            teamId: req.body.teamId
        }
    })
    .then(() => {
        res.json({message: "Success DisplaySelectedLeagueTeamStats"})
    });   
}

module.exports = {AddLeagueTeamStats, DisplayLeagueTeamStats};