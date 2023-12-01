import { NextFunction } from "express";

export type Handler = (
    request:Request,
    response:Response,
    next:NextFunction
) => Promise<void>;