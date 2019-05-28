require('./config/config');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');



//middleware se ejecutan cada vez q hago una peticion
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: `, process.env.PORT);
})