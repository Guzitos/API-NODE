import express from "express"
import mongoose from "mongoose"

const app = express()

app.use(express.json())

const users = []

app.get("/users", (request, response) => {
    return response.json(users)
})

app.post("/users", (request, response) => {

    const { name, age } = request.body

    users.push({ name, age });

    return response.json({ name, age });
})


mongoose.connect("mongodb+srv://guzitos:34314138gu@cluster0.jcp8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Banco de dados conectado"))
    .catch(() => console.log("Deu ruim"))


app.listen(3000)  