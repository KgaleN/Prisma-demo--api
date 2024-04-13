const express = require('express');
const router = express.Router();
const GameController = require('../controller/GameController');
const GameTeamController = require('../controller/GameTeamController');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

// We should figure out how to do these requests in the controller
// I know this works, but it's good practice to keep stuff in one class
// The controller should handle the whole request and response, while the route will only handle routing.
router.post('/create', async (req,res,) => {
   GameController.AddGame(req.body.gameDate, req.body.gameTime, req.body.location, req.body.active, req.body.empId, req.body.empId.seasonId).then(() => {
      res.json({message: "Success AddGame"})
   })

   // Is there a reason this is here twice?
   GameTeamController.AddGameTeamStats(req.body.homeTeam, req.body.game).then(() => {
      res.json({message: "Success AddGameTeamStats"})
   })

   GameTeamController.AddGameTeamStats(req.body.awayTeam, req.body.game).then(() => {
      res.json({message: "Success AddGameTeamStats"})
   })
})

router.post('/assign-Game', GameController.AssignGameToEmployee)

router.post('/assign-official', GameController.AssignGameToOfficial)

// We should think of a better name for these, especially the methods. I am assuming this means the results off all games but im not 100% sure.
// Routes also are generally only use lower case letters and use snake case. E.g. display-all-results
router.get('/DisplayAllResults', GameController.DisplayListOfResults)

router.get('/display-selected-results', GameController.DisplaySelectedResults)

module.exports = router