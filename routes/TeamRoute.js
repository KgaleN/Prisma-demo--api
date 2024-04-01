const express = require('express');
const router = express.Router();
const TeamController = require('../controller/TeamController');
const GameController = require('../controller/GameController');
const LeagueTeamController = require('../controller/LeagueTeamController');
const SeasonTeamController = require('../controller/SeasonTeamController');

// Also need to figure out how to do this in the controller
router.post('/create', async (req, res,) => {
    TeamController.AddTeam(req.body.name, req.body.nickname, req.body.headCoach, req.body.stadiumName, req.body.city, req.body.logoImg).then(() => {
        res.json({message: "success AddTeam"})
    })

    LeagueTeamController.AddLeagueTeamStats(req.body.teamId).then(() => {
        res.json({message: "Success AddLeagueTeamStats"})
    })

    SeasonTeamController.AddSeasonTeamStats(req.body.teamId, req.body.seasonId).then(() => {
        res.json({message: "Success AddSeasonTeamStats"})
    })
})

router.get('/index', TeamController.DisplayListOfTeams)

router.get('/display-all-team-results', GameController.DisplaySelectedFixture)

//idk about this
router.get('/display-all-team-fixtures',async (req,res,) => {
    TeamController.DisplayTeamFixtures(req.body.teamId).then((listOfAllTeamFixtures) => { 
       res.json({listOfAllTeamFixtures: listOfAllTeamFixtures})
    })
})

// Why is this filtering by gameid? 
router.get('/display-selected-team-fixture',async (req,res,) => {
    TeamController.DisplayTeamFixtures(req.body.gameId).then((selectedTeamFixture) => {
       res.json({selectedTeamFixture: selectedTeamFixture})
    })
})

module.exports = router
