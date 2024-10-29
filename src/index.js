import express from 'express'
import { PORT, mongoDbURL } from './config.js'
import bookRoutes from './routes/bookRoutes.js'
import mongoose from 'mongoose'

//creating the server
const app = express()

app.get("/", (req,res)=>{
    res.status(200).send("Hello! Welcome to InternPulse Library API")
})

app.use("/api/v1/books", bookRoutes)



mongoose.connect(mongoDbURL).then(()=>{
    console.log("Woohooo!! DB connected successfully!!")

    app.listen(PORT, ()=>{
        console.log(`Server running on http://localhost:${PORT}`)
    })
}).catch((err)=>{
    console.log(err)
})