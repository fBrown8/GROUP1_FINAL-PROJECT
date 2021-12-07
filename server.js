<<<<<<< HEAD
const express =require('express');
const dotenv = require('dotenv');
const morgan =require('morgan');
const bodyparser =require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/Public"));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './index.html'));

})

//log requests
app.use(morgan('tiny'));


//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set('views', path.resolve(__dirname, "Public"));

app.use('/', require('./server/routes/router'));


=======
const express =require('express');
const dotenv = require('dotenv');
const morgan =require('morgan');
const bodyparser =require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/Public"));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './index.html'));

})

//log requests
app.use(morgan('tiny'));


//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set('views', path.resolve(__dirname, "Public"));

app.use('/', require('./server/routes/router'));


>>>>>>> 5a74dd4bafa6d37842539b93bf10ebc687e5788f
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});