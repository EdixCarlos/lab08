
import createError from "http-errors"

const newLocal = (_, __, next) => {
    next(createError(404))
}
export default newLocal
