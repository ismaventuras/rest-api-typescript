import { NextFunction, Request, Response } from "express";

const notFound = async (req:Request, res:Response, next:NextFunction) => res.status(404).json({error: 'ENDPOINT NOT FOUND'});

export default notFound