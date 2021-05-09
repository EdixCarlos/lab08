import express from "express"
import { notes } from "../utils/mockup"
import { crearNota } from "../components/notas/controller"
import validationHandler from "../utils/auth/middlewares/validationHandler"
import authSchema from "../components/notas/domain/auth"
// import MongoLib from "../lib/mongo"

const router = express.Router()
// const mongo = new MongoLib()
router.get("/", async (_, response) => {
    response.send("<h1>Hello World!</h1>")
    // await mongo.create("notas",{
    //     id:"1",
    //     nota: "Hola"
    // })
    

})

router.get("/api/notes", (_, response) => {
    response.json(notes)
})

router.post("/api/notes",validationHandler(authSchema, "headers"), crearNota)

export default router
