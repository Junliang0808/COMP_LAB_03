exports.handle404s = (req, res, next) => {
    const error = {
        statusCode: 404,
        message: "Resource not found",
        status: "Not found"
    };

    next(error);
}

exports.errorHandler = (error,req, res, next) => {
    res.status(error.statusCode || 500).json({
     statusCode: error.statusCode ,
     status: error.status || "failed",
     message: error.message,
     stack: error.stack,
     ...error
    });


}