import prisma from "../db/prisma"
import type {Todo} from '@prisma/client'
 
type UpdateTodoType = Partial<Todo>
type CreateTodoType = Pick<Todo, "content" | "title">
type SingleTodoType = Pick<Todo,"id">;


export const createTodo = async (todo: CreateTodoType) => {    
    try {        
        return await prisma.todo.create({
            data:todo
        });
    } catch (error) {
        throw error
    }
}

export const allTodos = async () => {
    try {
        return await prisma.todo.findMany();
    } catch (error) {
        throw error
    }
}
export const getTodo = async (todo: SingleTodoType) => {
    try {
        return await prisma.todo.findUniqueOrThrow({
            where:{
                id:todo.id
            }
        });
    } catch (error) {
        throw error
    }
}
export const deleteTodo = async (todo: SingleTodoType) => {
    try {
        return await prisma.todo.delete({
            where:{
                id:todo.id
            }            
        });
    } catch (error) {
        throw error
    }
}

export const updateTodo = async (todoParams: SingleTodoType, todoBody: UpdateTodoType) => {
    try {
        return await prisma.todo.update({
            where:{
                id:todoParams.id
            },
            data:todoBody
        });
    } catch (error) {
        throw error
    }
}

