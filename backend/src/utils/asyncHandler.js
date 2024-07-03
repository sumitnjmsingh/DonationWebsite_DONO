const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        next(error)
    }
}



export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}  same as  const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


