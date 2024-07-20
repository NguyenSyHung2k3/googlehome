const express = require('express');
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const app = express();

app.set('view engine', 'ejs');

// connect to mongoose
mongoose.connect(keys.mongodb.dbURI);

app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, ()=>{
    console.log('app now listening for requests on port 3000')
})
