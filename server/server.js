require('./config/config');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//middleware se ejecutan cada vez q hago una peticion
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;
    console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: `, process.env.PORT);
})