import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
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
    getTodo() {
        return this.todoService.getTodos()
    }

    @Post()
    createTodo(@Body() todo: createTodoDto) {
        return this.todoService.createTodo(todo)
    }
}
