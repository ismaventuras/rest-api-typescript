import {z} from 'zod';

const titleSchema =  z.string({
    description: "title",
    invalid_type_error: "title must be a string",
    required_error: "title is required"
}).max(32, "max title length is 32 characters");

const contentSchema = z.string({
    description: "content",
    invalid_type_error: "content must be a string",
    required_error: "content is required"
});

const idSchema = z.object({
    id:z.preprocess(
        (id) => parseInt(id as string, 10),
        z.number({
            description: "id",
            invalid_type_error: "id must be a number",
            required_error: "id is required"
        }).positive()
    )    
})

export const createTodoSchema = z.object({
    body: z.object({
        title: titleSchema,
        content: contentSchema,
    })
})  

export const getTodoSchema = z.object({
    params: idSchema
})

export const deleteTodoSchema = getTodoSchema

export const updateTodoSchema = z.object({
    body: z.object({
        title: titleSchema.optional(),
        content: contentSchema.optional(),
    }),
    params: idSchema
})