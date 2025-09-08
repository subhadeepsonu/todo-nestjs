import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Todo } from './todo.interface';
@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) { }
    async getTodos(id: string) {
        const todos = await this.prisma.todo.findMany({
            where: {
                userId: id
            }
        })
        return todos
    }
    async createTodo(todo: Todo, id: string) {
        const createTodo = await this.prisma.todo.create({
            data: {
                name: todo.name,
                description: todo.description,
                userId: id,
            }
        })
        return createTodo
    }
}
