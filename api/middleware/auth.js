const jwt = require('jsonwebtoken')

function auth(req,res,next) {

    const token  = req.header("x-auth-token")
    if (!token) {
        return res.status(401).send("access-denied!")
    }

    try {
        
        const decodedToken = jwt.verify(token, "jwtPrivateKey");
        req.user = decodedToken;
        next()
    }
    catch (err) {
        res.statsus(400).send("Wrong Token")
    }



}


module.exports = auth