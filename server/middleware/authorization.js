const jwt = require("jsonwebtoken");

function auth(req, res, next) {

    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send("Access denied. No token provided");
    }

    const token = authHeader.split(' ')[1];

    console.log("x-auth-token: " + token);
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
        const decoded = jwt.verify(token, "jwtPrivateKey");
        req.user = decoded;
        next();
    }
    catch (exception) { res.status(400).send("Invalid token."); }

}

module.exports = auth;