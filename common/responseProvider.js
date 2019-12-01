
module.exports = {

    responseProvider(res, statusCode, success, message, req = null, respData = null) {
        
        let data = null;
        if (respData) {
            data = respData 
        }        
        return res.status(statusCode).json({
            success,
            message,
            data
        });
    },

    errorProvider(res, statusCode,success=false,message,req=null, data=null, err) {
        //const { message, name, fields } = err;
        return res.status(statusCode).json({
            success: false,
            message,
            data:data
        });
    },

    postResponseProvider(res, statusCode, success, message, req = null, respData = null) {
        let data = null;
        if (respData) {
            data = respData 
        }     
        return res.status(statusCode).json({
            success,
            message,
            data,                       
        });
    },
}
