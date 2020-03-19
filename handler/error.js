function errorHandler(err, req, res, next) {
    return res.status(500).json({
        err: {
            msg: err.message || "Something went wrong in the server."
        }
    })
}

module.exports = errorHandler