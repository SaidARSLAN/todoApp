const jwt = require('jsonwebtoken')

function auth (request,response,next) {

    const token = request.header('x-auth-token')
    if (!token) {
        return response.status(401).send("Access Denied")
    }

    // String it doesn't matter what, it's just for validation key!
    try {
        
        const decodedToken = jwt.verify(token,"jwtPrivateKey")
        // We have sent it to user object!
        // user.id, user.name,user.email, user.password and user.decodedToken
        request.user = decodedToken
    }
    catch (err) {
        response.status(400).send("Token Failed")
    }

    next()

}

module.exports = auth