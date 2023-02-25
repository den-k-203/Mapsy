import * as dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import router from "./router/main.js";

import {ProcessEnv} from "./types/main.js";

dotenv.config()
const {DB_CONNECTION, PORT}: ProcessEnv = process.env

const app = express()

app.use('/', router)

const start = async () => {
    try {
        mongoose.set('strictQuery', false)
        DB_CONNECTION != null && await mongoose.connect(DB_CONNECTION)
        app.listen(PORT, () => console.log(`Server started. \nPORT: ${PORT}`))
    } catch (error) {
        console.log(`Server error: ${error}`)
        process.exit(1)
    }
}

start()