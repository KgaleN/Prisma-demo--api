const express = require('express');
const http = require('https');
const app = express();
const Multer = require('multer');
var upload = Multer();

//routes
const authRouter             = require('./routes/AuthRoute');
const adminRouter            = require('./routes/AdminRoute');
const employeeRouter         = require('./routes/EmployeeRoute');
const teamRouter             = require('./routes/TeamRoute');
const gameRouter             = require('./routes/GameRoute');
const playerRouter           = require('./routes/PlayerRoute');
const officialRouter         = require('./routes/OfficialRoute');
const leagueTeamRouter       = require('./routes/LeagueTeamRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));

app.use((reg,res,next)=>
{
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
 res.setHeader('Access-Control-Allow-Methods', '*');
 next();
});

app.use('/api/auth',         authRouter);
app.use('/api/admin',        adminRouter);
app.use('/api/employee',     employeeRouter);
app.use('/api/team',         teamRouter);
app.use('/api/game',         gameRouter);
app.use('/api/player',       playerRouter);
app.use('/api/official',     officialRouter);
app.use('/api/leagueTeam',   leagueTeamRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('The Server is running on port 3001');
});
