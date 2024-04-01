const express = require('express');
const router = express.Router();
const LeagueTeamController = require('../controller/LeagueTeamController');

router.get('/display-selected-league-team-stats', LeagueTeamController.DisplayLeagueTeamStats)

module.exports = router
