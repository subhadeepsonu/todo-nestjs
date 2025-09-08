import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TodoService {
    private readonly todos: Todo[] = []
    constructor(private prisma: PrismaService) { }
    getTodos(): Todo[] {
        return this.todos;
    }
    createTodo(todo: Todo): Todo {
        this.todos.push({
            ...todo
        })
        return todo
    }
}
