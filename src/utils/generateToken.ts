require("dotenv").config();

const jwt = require("jsonwebtoken");

export async function generateToken(email: string){
    const jwtConfig = {
        expiresIn: "7d",
        algorithm: "HS256",
    };

    const secret = process.env.SECRET || "secret";
      
    return await jwt.sign({ email }, secret, jwtConfig);
}
