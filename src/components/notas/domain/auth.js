import Joi from "joi"

const auth = Joi.string().alphanum().min(3).max(30).required()
const authDate = Joi.number().integer().min(2021)
const authImportant = Joi.boolean()

const authSchema = Joi.object({
    content: auth.required(),
    important: authImportant.required(),
    date: authDate.required(),
}).options({ allowUnknown: true })

export default authSchema