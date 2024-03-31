const express = require('express');
const bcrpt = require('bcrypt');
const router = express.Router();
const LeagueTeamController = require('../controller/LeagueTeamController');

router.get('/DisplaySelectedLeagueTeamStats',async (req,res,)=>{
    LeagueTeamController.DisplayLeagueTeamStats(req.body.teamId).then(()=>{
       res.json({message: "Success DisplaySelectedLeagueTeamStats"})
    })
})

router.get('/DisplaySelectedLeagueTeamStats',async (req,res,)=>{
    LeagueTeamController.DisplayLeagueTeamStats(req.body.teamId).then(()=>{
       res.json({message: "Success DisplaySelectedLeagueTeamStats"})
    })
})

module.exports = router
