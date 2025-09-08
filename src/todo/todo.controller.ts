import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { AuthGaurdGuard } from 'src/auth-gaurd/auth-gaurd.guard';
import { TodoService } from './todo.service';
import { createTodoDto } from './dto/createTodo.dto';

@UseGuards(AuthGaurdGuard)
@ApiSecurity('bearer')
@Controller('todo')
export class TodoController {
    constructor(readonly todoService: TodoService) {

    }
    @Get()
    async getTodo(@Req() req) {
        const userId = req.userId
        const todos = await this.todoService.getTodos(userId)
        return todos
    }

    @Post()
    async createTodo(@Body() todo: createTodoDto, @Req() req) {
        const userId = req.userId
        const newTodo = await this.todoService.createTodo(todo, userId)
        return newTodo
    }
}
