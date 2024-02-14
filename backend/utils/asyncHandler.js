 export const asyncHandler = (controllerFunction) => async (req, res, next) => {
    try {
        await controllerFunction(req, res, next);
    } catch (error) {
        next(error);
    }
};