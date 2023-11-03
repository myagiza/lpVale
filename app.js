const express = require('express')
const pageRoute = require('./routes/pageRoute')
const app = express()

// Template Engines
app.set("view engine", "ejs")

app.use(express.static('public'));

const port = 3000

// Routes

app.get('/', pageRoute)
app.get('/sign-up', pageRoute)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})