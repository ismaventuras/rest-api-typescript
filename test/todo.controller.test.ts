import prisma from "../src/db/prisma";
import { createTodo, allTodos, deleteTodo, getTodo,updateTodo } from "../src/controllers/todo.controller"
import type {Todo} from '@prisma/client'

beforeAll(async () => {
    await prisma.todo.createMany({
      data: [{ title: 'Todo 1', content:'A task to execute' }, { title: 'Todo 2', content:'A task to execute' }],
    })
    console.log('✨ Seeded db with 2 todos');
});

afterAll(async () => {
    const deleteTodos = prisma.todo.deleteMany();

    await prisma.$transaction([
        deleteTodos
    ]);

    await prisma.$disconnect();
})

test('allTodos: should get all todos', async ()=> {
    const todos = await allTodos();
    expect(todos).toMatchObject<Todo[]>

})

test('createTodo: should create a todo', async () => {
    const todo = await createTodo({title:'test', content:'test'});
    expect(todo).toMatchObject<Todo>
})
test('updateTodo: should update a todo', async () => {
    const todo = await updateTodo({id:1},{title:'test', content:'test'});
    expect(todo).toMatchObject<Todo>
})
test('getTodo: should get a todo', async () => {
    const todo = await getTodo({id:1});
    expect(todo).toMatchObject<Todo>
})
test('deleteTodo: should delete a todo', async () => {
    const todo = await deleteTodo({id:1});
    expect(todo).toMatchObject<Todo>
})

