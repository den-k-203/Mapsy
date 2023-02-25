import express from "express"
import router from "./router/main.js";

const PORT = process.env.PORT || 5000
const app = express()

app.use('/', router)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started. \nPORT: ${PORT}`)
        })
    } catch (error) {
        console.log(`Server error: ${error}`)
        process.exit(1)
    }
}

start()