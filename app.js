const express = require('express') //เรียกใช้ express    
const chalk = require('chalk')
const debug = require('debug')('app') // debug show GET/Request
const morgan = require('morgan')// middleware การทำงานของ web app
const app = express()
const port = 3001

app.use(morgan('combined'))

app.get("/",(req,res) =>{
    res.send('Hello Tle')
})  // getไว้จัดการ request ตาม 

app.listen(port,()=>{
    console.log('listening on port'+ chalk.green(port))
}) //appรอฟังที่port