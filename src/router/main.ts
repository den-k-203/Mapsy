import express from "express"

const router = express.Router()

router.get('/', (request, response) => {
    response.json({message: "Hello world!"})
})

export default router;