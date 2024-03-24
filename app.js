const express = require('express');
const http = require('https');
const app = express();
const registerRouter = require('./routes/AdminRoute');
const Multer = require('multer');
var upload = Multer();

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

app.use('/Api/Admin', registerRouter);

const PORT = process.env.PORT ||3001;
app.listen(PORT, () => {
     console.log('Server is running on port 3001');
 });
