// required packages
const express = require('express')
const cors = require('cors')
require('./models')

// app config/middlewares
const app = express()
const PORT = 3000
// parse json bodies
app.use(express.json())
app.use(cors())
// routes/controllers
app.get('/', (req, res) => {
    res.json({msg: 'This is DIY API'})
})

app.use('/blog', require('./controller/blog'))
// app.use('/comment', require('./controllers/comment'))
// listening on a port
app.listen(PORT, () => console.log(`Listening you on ${PORT}`))