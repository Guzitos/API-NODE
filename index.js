import express from "express"
import mongoose from "mongoose"

import User from "./models/user.js"

const app = express()

app.use(express.json())

const users = []

app.get("/users", async (request, response) => {
    const users = await User.find()
    return response.status(200).json(users)
})

app.post("/users", async (request, response) => {
    const user = request.body

    const newUser = await User.create(user)

    return response.status(201).json(newUser)
})

mongoose.connect("mongodb+srv://guzitos:34314138gu@cluster0.jcp8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Banco de dados conectado"))
    .catch(() => console.log("Deu ruim"))


app.listen(3000)  