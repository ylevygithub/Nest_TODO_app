# 📝 NestJS To-Do App

A simple To-Do REST API built with **NestJS**, **SQLite**, and **TypeORM**. This project supports creating, reading, updating, and deleting to-do items, with persistent storage using a lightweight SQLite database.

---

## 🚀 Features

- Create new to-do items with title, description, and priority
- Read all to-dos or a single to-do by ID
- Update to-dos partially (PATCH)
- Delete to-dos
- Auto-managed `updatedAt` timestamp
- Persistent storage using SQLite
- DTOs and validation using `class-validator`

---

## 🧱 Tech Stack

- **NestJS** – backend framework
- **TypeORM** – database ORM
- **SQLite** – local file-based database
- **Class-validator** – input validation
- **Postman** – manual API testing

---

## Project Structure

src/
├── todos/
│   ├── dto/
│   │   ├── create-todo.dto.ts
│   │   └── update-todo.dto.ts
│   ├── todo.entity.ts
│   ├── todos.controller.ts
│   ├── todos.module.ts
│   └── todos.service.ts
├── app.module.ts
└── main.ts

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/ylevygithub/nest-todo-app.git
cd nest-todo-app

# 2. Install dependencies
npm install

# 3. Start the app
npm run start

```

---

## Example API Usage (Postman)

- Use this as a base : http://localhost:3005/api/todos/

### Get All Todos
#### Get  /api/todos

### Create a todo
#### Post  /api/todos

{
  "title": "Write blog post",
  "description": "Write about NestJS and TypeORM",
  "priority": 1
}

### Update a todo
#### Patch  /api/todos/2          (2 being the id as an example)

{
  "description": "This is the updated description",
  "title": "Task 2 updated",
  "priority": 1,
}

### Delete a todo
#### Delete api/todos/2

---

Have Fun !
