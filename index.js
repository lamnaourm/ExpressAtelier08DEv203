require('dotenv').config();

const express = require('express'); 
const cors = require('cors'); 
const connectDB = require('./config/database'); 
const appRoutes = require("./routes/app") 

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT||3000;

connectDB();

app.use('/', appRoutes)

app.listen(port, () => {
    console.log('Server started');
})

