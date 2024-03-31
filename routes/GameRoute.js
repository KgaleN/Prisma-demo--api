const express = require('express');
const bcrpt = require('bcrypt');
const router = express.Router();
const GameController = require('../controller/GameController');
const GameTeamController = require('../controller/GameTeamController');

router.post('/AddGame', async (req,res,)=>{
   GameController.AddGame(req.body.gameDate, req.body.gameTime, req.body.location, req.body.active, req.body.empId, req.body.empId.seasonId).then(()=>{
      res.json({message: "Success AddGame"})
   })

   GameTeamController.AddGameTeamStats(req.body.homeTeam, req.body.game).then(()=>{
      res.json({message: "Success AddGameTeamStats"})
   })

   GameTeamController.AddGameTeamStats(req.body.awayTeam, req.body.game).then(()=>{
      res.json({message: "Success AddGameTeamStats"})
   })
})

router.post('/AssignGame', async (req,res,)=>{
   GameController.AssignGameToEmployee(req.body.gameId, req.body.empId).then(()=>{
      res.json({message: "Success AssignGame"})
   })
})

router.post('/AssignOfficial', async (req,res,)=>{
   GameController.AssignGameToOfficial(req.body.gameId, req.body.officialId, req.body.role, req.body.position).then(()=>{
      res.json({message: "Success AssignOfficial"})
   })
})

router.get('/DisplayAllResults', async (req,res,)=>{
   GameController.DisplayListOfResults().then((listOfAllResults)=>{
      res.json({listOfAllResults: listOfAllResults})
   })
})

router.get('/DisplaySelectedResults',async (req,res,)=>{
   GameController.DisplaySelectedResults(req.body.gameId).then((selectedResults)=>{
      res.json({selectedResults: selectedResults})
   })
})

module.exports = router
