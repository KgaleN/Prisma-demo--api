const express = require('express');
const router = express.Router();
const LeagueTeamController = require('../controller/LeagueTeamController');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

router.get('/display-selected-league-team-stats', LeagueTeamController.DisplayLeagueTeamStats)

module.exports = router
