import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import { connectToDB } from './utils/features.js'
import { corsOptions } from './constants/config.js'

dotenv.config()

const mongoURI = process.env.MONGO_URI


const app = express();
app.use(cors(corsOptions))
app.use(express.json())


connectToDB(mongoURI)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running successfully on port ${process.env.PORT}`);
})