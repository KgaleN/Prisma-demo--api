const express = require('express');
const router = express.Router();
const TeamController = require('../controller/TeamController');
const GameController = require('../controller/GameController');

router.post('/create', async (req, res,)=>{
    AdminController.AddTeam(req.body.name, req.body.nickname, req.body.headCoach, req.body.stadiumName, req.body.city, req.body.logoImg).then(()=>{
        res.json({message: "success AddTeam"})
    })

    AdminController.AddLeagueTeamStats(req.body.teamId).then(()=>{
        res.json({message: "Success AddLeagueTeamStats"})
    })

    SeasonTeamController.AddSeasonTeamStats(req.body.teamId, req.body.seasonId).then(()=>{
        res.json({message: "Success AddSeasonTeamStats"})
    })
})

router.get('/index', async (req, res,)=>{
    TeamController.DisplayListOfTeams().then((listOfAllTeams)=>{
       res.json({listOfAllTeams: listOfAllTeams})
    })
})

router.get('/DisplayAllTeamResults', async (req, res,)=>{
    GameController.DisplaySelectedFixture(req.body.teamId).then((listOfAllTeamResults)=>{
       res.json({listOfAllTeamResults: listOfAllTeamResults})
    })
})

router.get('/DisplayAllTeamFixtures',async (req,res,)=>{
    TeamController.DisplayTeamFixtures(req.body.teamId).then((listOfAllTeamFixtures)=>{
       res.json({listOfAllTeamFixtures: listOfAllTeamFixtures})
    })
})

router.get('/DisplaySelectedTeamFixture',async (req,res,)=>{
    TeamController.DisplayTeamFixtures(req.body.gameId).then((selectedTeamFixture)=>{
       res.json({selectedTeamFixture: selectedTeamFixture})
    })
})

module.exports = router
