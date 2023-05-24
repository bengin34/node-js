const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 8000
const dotenv = require('dotenv')
dotenv.config()
const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/user.js")
const blogRoute = require("./routes/blogs.js")
const cookieParser = require('cookie-parser')
const cors = require('cors')



const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
      } catch (error) {
        throw error
      }
    }
    
    
    mongoose.connection.on("disconnected", () => {
        console.log("mongoDB  disconnected")
    })
    mongoose.connection.on("connected", () => {
        console.log("mongoDB  connected")
    })
    

// app.use('api/user', (req,res)=> {

// } )
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/blog", blogRoute)


app.get('/', (req,res) => {
    res.send('Hello World!')
})


app.use((error,req,res,next)=> {
    const errorStatus = error.status || 500
    const errorMessage = error.message || 'Something went wrong' 
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
     })
})








app.listen(port, () => {
    connect()
    console.log(`Connected to backend ${port}`)
})