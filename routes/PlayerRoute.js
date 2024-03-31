const express = require('express');
const router = express.Router();
const PlayerController = require('../controller/PlayerController');

router.post('/AddPlayer',async (req,res,)=>{
    PlayerController.AddPlayer(req.body.fullname, req.body.age, req.body.height, req.body.weight, req.body.nationality, req.body.status, req.body.position,team).then(()=>{
        res.json({message: "Success AddPlayer"})
    })

    PlayerController.AddLeaguePlayerStats(req.body.playerId).then(()=>{
        res.json({message: "Success AddLeaguePlayerStats"})
    })

    PlayerController.AddSeasonPlayerStats(req.body.playerId, req.body.seasonId).then(()=>{
       res.json({message: "Success AddSeasonPlayerStats"})
    })
})

router.get('/DisplayAllTeamPlayers',async (req,res,)=>{
    PlayerController.DisplayTeamPlayers(req.body.teamId).then((listOfAllTeamPlayers)=>{
       res.json({listOfAllTeamPlayers: listOfAllTeamPlayers})
    })
})

module.exports = router
