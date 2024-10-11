const app=require('./app')
const dotenv=require('dotenv')
const path=require('path')
const connectDB = require('./config/db');


dotenv.config({path:path.join(__dirname,'config/.env')})
// Connect Database
connectDB();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server runnning in port :${process.env.PORT} `)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log('Shutting  down the server due to unhandled rejection')
    server.close(()=>{
        process.exit(1)
    })
})


process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log('Shutting  down the server due to unCaughtException rejection')
    server.close(()=>{
        process.exit(1)
    })
})





