import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  // Constructor injection of the Todo repository
  // This allows us to interact with the database using TypeORM
  // The @InjectRepository decorator is used to inject the repository for the Todo entity
  // The Repository<Todo> type is a TypeORM repository that provides methods for CRUD operations on the Todo entity
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
  ) {}
  // In-memory storage for demonstration purposes
  // private todos: Todo[] = [];
  private idCounter = 1;

  findAll(): Promise<Todo[]> {
    return this.todoRepo.find();
  }


  async create(dto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepo.create({
      ...dto,
      updatedAt: Date.now(),
    });
    return this.todoRepo.save(todo);
  }

  async update(id: number, updates: Partial<Todo>): Promise<Todo | null> {
    const todo = await this.todoRepo.findOneBy({ id });
    if (!todo) return null;
  
    // Merge updates
    Object.assign(todo, updates, { updatedAt: Date.now() });
  
    return this.todoRepo.save(todo);
  }
  
  async delete(id: number): Promise<boolean> {
    const result = await this.todoRepo.delete(id);
    return result.affected > 0;
  }
}

