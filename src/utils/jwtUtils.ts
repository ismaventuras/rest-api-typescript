import jwt from 'jsonwebtoken';

export const generateAccessToken = (username: string) => {    
    return jwt.sign({username}, process.env.SECRET, {expiresIn: "1800s"});
}
