import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authenticateJWT = async (req: Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.sendStatus(401);
    try {
        const decoded = jwt.verify(token, process.env.SECRET, {})
        next()
    } catch (error) {        
        res.status(403).json({error:"invalid token"});
    }    
    
}