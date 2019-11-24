
module.exports = {

    responseProvider(res, statusCode, success, message, req = null, data = null) {
        return res.status(statusCode).json({
            success,
            message,
            data
        });
    },

    errorProvider(res, statusCode, data, err) {
        const { message, name, fields } = err;
        return res.json({
            success: false,
            message,
            data: {
                name,
                fields,
            },
        });
    },

    postResponseProvider(res, statusCode, success, message, id, req = null, data = null) {
        return res.status(statusCode).json({
            success,
            message,
            data,
            id,
            href,
        });
    },
}
