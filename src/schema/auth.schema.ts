import { z } from 'zod';

const authUsernameSchema = z.string({
    description: "Username",
    invalid_type_error: "username must be a string",
    required_error: "username is required"
})
const authPasswordSchema = z.string({
    description: "Password",
    invalid_type_error: "password must be a string",
    required_error: "password is required",
}).min(8, 'password must be greater than 8 characters')

const authBody = z.object({
    username: authUsernameSchema,
    password: authPasswordSchema,
});

export const authSchema = z.object({
    body: authBody,
});

