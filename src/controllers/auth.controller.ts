import prisma from "../db/prisma";
import {User} from "@prisma/client"
import { comparePassword, hashPassword } from "../utils/bcryptUtils";
import { generateAccessToken } from "../utils/jwtUtils";

type AuthBody = Pick<User,'username'|'password'>

export const createUser = async (userInput: AuthBody) => {
    try {
        const hashedPassword = await hashPassword(userInput.password)
        const user = await prisma.user.create({
            data:{
                ...userInput,
                password:hashedPassword
            }
        })
        return user
    } catch (error) {
        throw error
    }
}
export const loginUser = async (userInput: AuthBody) => {
    try {
        const {username, password} = userInput;
        const user = await prisma.user.findUniqueOrThrow({
            where:{
                username
            }
        })        
        let isValid = await comparePassword(password, user.password);
        if(!isValid) throw Error("INVALID CREDENTIALS");
        return generateAccessToken(username);
    } catch (error) {
        throw error
    }
}

