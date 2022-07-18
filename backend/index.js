const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")
const authRouter = require('./router/Auth')
const passport = require("passport")



app.use(cors())
dotenv.config()
app.use(express())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize())

require('./controller/passport')

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Database connected");
})

app.use('/auth', authRouter)

app.listen(8000, ()=>{
    console.log("server is runnig at port 8000");
})