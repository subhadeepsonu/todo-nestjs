import { Controller, Get, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    @Get()
    getTodo() {
        return "list of todos"
    }

    @Post()
    createTodo() {
        return "add new todo"
    }
}
