import { Router } from "express";
import { allTodos, createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo.controller";
import { zParse } from "../schema";
import { createTodoSchema, deleteTodoSchema, getTodoSchema, updateTodoSchema } from "../schema/todo.schema";

const router = Router()

router.route('/')
    .get(async (req, res, next) => {
        try {
            const todos = await allTodos();
            return res.status(200).json(todos)
        } catch (error) {
            next(error)
        }
    })
    .post(async (req, res, next) => {
        try {            
            const {body} = await zParse(createTodoSchema, req);
            const todo = await createTodo(body);;
            return res.status(201).json(todo);
        } catch (error) {
            next(error)
        }
    })

router.route('/:id')
    .get(async (req, res, next) => {        
        try {
            const {params} = await zParse(getTodoSchema, req);
            const todo = await getTodo(params);
            return res.status(200).json(todo);
        } catch (error) {
            next(error)
        }
    })
    .put(async (req, res, next) => {
        try {
            const {params, body} = await zParse(updateTodoSchema, req);
            const todo = await updateTodo(params, body);
            return res.status(200).json(todo);
        } catch (error) {
            next(error)
        }
    })
    .delete(async (req, res, next) => {
        try {
            const {params} = await zParse(deleteTodoSchema, req);
            const todo = await deleteTodo(params);
            return res.status(200).json(todo);
        } catch (error) {
            next(error)
        }
    })


export default router;