require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const AddTeam = async(name, nickname,headCoach, stadiumName, city, logoImg) => {
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

const DisplayListOfTeams = async(req, res) => { 
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
    })
    .then((listOfAllTeams) => {
        res.json({listOfAllTeams: listOfAllTeams})
    });
}

const DisplayTeamResults = async(req, res) => { 
    return await prisma.team.find({
        where:{
            id: req.body.teamId, 
            gameDate: {
                gt: currentDate
            }
        },
        include: {
            players: true, 
            seasonTeamStats: true,
            gameTeamStats: true,
            leagueTeamdStats: true
          }
    })
    .then((listOfAllTeamResults) => {
        res.json({listOfAllTeamResults: listOfAllTeamResults})
    });   
}

//idk about this
const DisplayTeamFixtures = async(teamId) => { 

    return await prisma.team.find({
        where:{
            id: teamId, 
            gameDate: {
                lt: currentDate
              }
        },
        include: {
            players: true, 
            seasonTeamStats: true,
            gameTeamStats: true,
            leagueTeamdStats: true
          }
    });   
}

module.exports = {AddTeam, DisplayListOfTeams, DisplayTeamResults, DisplayTeamFixtures};