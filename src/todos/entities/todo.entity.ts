/** In memory version */
// export interface Todo {
//   id: number,
//   description: string,
//   title: string,
//   priority: number,
//   updatedAt: number,
// }


import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  description: string;

  @Column()
  title: string;

  @Column({ default: 1 })
  priority: number;

  @Column({ default: Date.now() })
  updatedAt: number;
}
// The Todo entity represents a task with an ID, title, and completion status.
// The @Entity() decorator marks this class as a database entity.
// The @PrimaryGeneratedColumn() decorator indicates that the id field is the primary key and will be auto-generated.
// The @Column() decorator is used to define the properties of the entity.
// The isDone property has a default value of false, indicating that the task is not completed by default.
// This entity will be used with TypeORM to interact with the database.