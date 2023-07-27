module.exports = function (err, req, res, next) {
    let statusCode = 500;
    let errorMessage = [];
    const { error } = err;
    
    switch (error.name) {
        case "JsonWebTokenError":
            statusCode = 401;
            errorMessage.push('Token invalid');
            break;
        default:
            let message = error.message || 'Internal Server Error';
            errorMessage.push(message);
            statusCode = error.status || statusCode
            break;
    }

    res.status(statusCode).json({ 
        success: false,
        message: errorMessage.toString() 
    });
}