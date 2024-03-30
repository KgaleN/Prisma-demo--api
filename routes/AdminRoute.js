const express = require('express');
const bcrpt = require('bcrypt');
const router = express.Router();
const Addies = require('../controller/AdminController');
// const Jwt = require('jsonwebtoken');
// const SecretKey = 'your_secret_key'

router.post('/AddEmp',async (req,res,)=>{
    Addies.AddEmployee(req.body.fullname,req.body.email, req.body.password, req.body.active).then(()=>{
        res.json({message: "success employee"})
    })
})

router.post('/AddEmp',async (req,res,)=>{
    Addies.AddEmployee(req.body.fullname,req.body.email, req.body.password, req.body.active).then(()=>{
        res.json({message: "success employee"})
    })
})

router.post('/AddTeam',async (req,res,)=>{
    Addies.AddTeam(req.body.name, req.body.nickname, req.body.headCoach, req.body.stadiumName, req.body.city, req.body.logoImg).then(()=>{
        res.json({message: "success AddTeam"})
    })

    Addies.AddLeagueTeamStats(req.body.teamId).then(()=>{
        res.json({message: "Success AddLeagueTeamStats"})
    })

    Addies.AddSeasonTeamStats(req.body.teamId, req.body.seasonId).then(()=>{
        res.json({message: "Success AddSeasonTeamStats"})
    })
})

router.post('/AddPlayer',async (req,res,)=>{
    Addies.AddPlayer(req.body.fullname,req.body.age, req.body.height, req.body.weight, req.body.nationality, req.body.status, req.body.position,team).then(()=>{
        res.json({message: "Success AddPlayer"})
    })

    Addies.AddLeaguePlayerStats(req.body.playerId).then(()=>{
        res.json({message: "Success AddLeaguePlayerStats"})
     })

     Addies.AddSeasonPlayerStats(req.body.playerId, req.body.seasonId).then(()=>{
        res.json({message: "Success AddSeasonPlayerStats"})
     })
})

router.post('/AddGame',async (req,res,)=>{
    
     Addies.AddGame(req.body.gameDate, req.body.gameTime, req.body.location, req.body.active, req.body.empId, req.body.empId.seasonId).then(()=>{
        res.json({message: "Success AddGame"})
     })

     Addies.AddGameTeamStats(req.body.homeTeam, req.body.game).then(()=>{
        res.json({message: "Success AddGameTeamStats"})
     })

     Addies.AddGameTeamStats(req.body.awayTeam, req.body.game).then(()=>{
        res.json({message: "Success AddGameTeamStats"})
     })
})

router.post('/AddOffical',async (req,res,)=>{
    
    Addies.AddOfficial(req.body.fulname, req.body.active).then(()=>{
       res.json({message: "Success AddOfficial"})
    })
})

router.post('/AssignGame',async (req,res,)=>{
    
    Addies.AssignGameToEmployee(req.body.gameId, req.body.empId).then(()=>{
       res.json({message: "Success AssignGame"})
    })
})

router.post('/AssignOffical',async (req,res,)=>{
    
    Addies.AssignGameToOffical(req.body.gameId, req.body.officalId, req.body.role, req.body.position).then(()=>{
       res.json({message: "Success AssignOffical"})
    })
})

router.get('/DisplayAllFixtures',async (req,res,)=>{
    Addies.DisplayListOfFixtures().then((listOfAllFixtures)=>{
       res.json({listOfAllFixtures: listOfAllFixtures})
    })
});

router.get('/DisplayAllResults',async (req,res,)=>{
    
    Addies.DisplayListOfResults().then((listOfAllResults)=>{
       res.json({listOfAllResults: listOfAllResults})
    })
})


router.get('/DisplayAllTeams',async (req,res,)=>{
    Addies.DisplayListOfTeams().then((listOfAllTeams)=>{
       res.json({listOfAllTeams: listOfAllTeams})
    })
})

router.get('/DisplayAllEmployees',async (req,res,)=>{
    Addies.DisplayListOfEmployees().then((listOfAllEmployees)=>{
       res.json({listOfAllEmployees: listOfAllEmployees})
    })
})

router.get('/DisplayAllTeamFixtures',async (req,res,)=>{
    Addies.DisplayTeamFixtures(req.body.teamId).then((listOfAllTeamFixtures)=>{
       res.json({listOfAllTeamFixtures: listOfAllTeamFixtures})
    })
})


router.get('/DisplaySelectedTeamFixture',async (req,res,)=>{
    Addies.DisplayTeamFixtures(req.body.gameId).then((selectedTeamFixture)=>{
       res.json({selectedTeamFixture: selectedTeamFixture})
    })
})

router.get('/DisplayAllTeamResults',async (req,res,)=>{
    Addies.DisplaySelectedFixture(req.body.teamId).then((listOfAllTeamResults)=>{
       res.json({listOfAllTeamResults: listOfAllTeamResults})
    })
})

router.get('/DisplaySelectedResults',async (req,res,)=>{
    Addies.DisplaySelectedResults(req.body.gameId).then((selectedResults)=>{
       res.json({selectedResults: selectedResults})
    })
})

router.get('/DisplayAllTeamPlayers',async (req,res,)=>{
    Addies.DisplayTeamPlayers(req.body.teamId).then((listOfAllTeamPlayers)=>{
       res.json({listOfAllTeamPlayers: listOfAllTeamPlayers})
    })
})

router.get('/DisplaySelectedTeamLeagueStats',async (req,res,)=>{
    Addies.DisplayTeamLeagueStats(req.body.teamId).then(()=>{
       res.json({message: "Success DisplaySelectedTeamLeagueStats"})
    })
})

module.exports=router
