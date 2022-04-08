const express = require('express') //เรียกใช้ express    
const chalk = require('chalk')
const debug = require('debug')('app') // debug show GET/Request
const morgan = require('morgan')// middleware การทำงานของ web app
const app = express()
const path = require('path')
const port = process.env.PORT; // set environment ไว้ใน package.json

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public/"))) //dirname คือ directory ปัจจุบัน // บ่งบอกว่า static file อยู่ที่ไหน

app.get("/",(req,res) =>{
    res.render('index',{username : 'Tle'})
})  // getไว้จัดการ request ตาม 

app.set("views","./src/views")
app.set("view engine","ejs")

app.listen(port,()=>{
    console.log('listening on port'+ chalk.green(port))
}) //appรอฟังที่port