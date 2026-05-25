const express = require('express')
require('dotenv').config()
const empRoute = require('./routes/empRoute')
const app = express()
// const port = process.env.PORT || 5000

const port =5600;
//middleware
app.use(express.json())

app.get(`/`,(req,res)=>{
    res.send("Server is Started")
})

app.post('/', (req, res) => {
    res.send("POST request received")
})


app.use('/emp' , empRoute)

app.listen(port,()=>{
    console.log(`Server running on http://Localhost:${port}`)
})