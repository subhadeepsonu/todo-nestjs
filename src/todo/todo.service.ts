import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';
@Injectable()
export class TodoService {
    private readonly todos: Todo[] = []
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
