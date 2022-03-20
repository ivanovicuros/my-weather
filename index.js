const PORT = 8080;
const express = require('express')
const cors = require("cors")
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/call', (req, res) => {
    const location = req.query.q
    console.log(req.query)   
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {q: location, appid: 'n/a' } 
    }
    axios.request(options)
    .then(resp => {
      res.json(resp.data)
    }).catch(err => {
        console.log(err)
    })
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))