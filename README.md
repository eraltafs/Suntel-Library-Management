# Suntel Library Management System — Backend

A secure **Library Management System backend** built with **Node.js, Express, MongoDB, JWT Authentication, and Role-Based Access Control (RBAC)**.

This service provides APIs for user authentication and book management with protected routes and admin-only operations.

---

## Features

* JWT-based authentication
* Role-based authorization (Admin / User)
* Secure password hashing using bcrypt
* CRUD operations for books
* Borrow / Return book functionality
* Middleware-based route protection
* Modular architecture (controller → service → model)
* Error handling with structured responses

---

## Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcrypt
* dotenv

---

## Project Structure

```
backend/
│
├── config/
│   └── db.js
│
├── middleware/
│   ├── authenticate.middleware.js
│   └── authorize.middleware.js
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.js
│   │   ├── auth.routes.js
│   │   ├── auth.service.js
│   │   └── user.model.js
│   │
│   └── book/
│       ├── book.controller.js
│       ├── book.routes.js
│       ├── book.service.js
│       └── book.model.js
│
├── server.js
├── package.json
└── README.md
```

---

## Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Installation

Clone repository:

```
git clone https://github.com/your-username/Suntel-Library-Management.git
```

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Or production mode:

```
npm start
```

---

## Authentication Flow

```
Register User
   ↓
Login
   ↓
Receive JWT Token
   ↓
Attach token in Authorization header
   ↓
Access protected routes
```

Header format:

```
Authorization: Bearer <token>
```

---

## Role-Based Access Control (RBAC)

| Endpoint             | Access Level        |
| -------------------- | ------------------- |
| View Books           | Authenticated Users |
| Add Book             | Admin Only          |
| Update Book          | Admin Only          |
| Delete Book          | Admin Only          |
| Borrow / Return Book | Authenticated Users |

---

## API Endpoints

### Auth Routes

#### Register User

POST `/auth/register`

```
{
  "username": "admin",
  "password": "123456",
  "role": "admin"
}
```

---

#### Login

POST `/auth/login`

```
{
  "username": "admin",
  "password": "123456"
}
```

Response:

```
{
  "token": "JWT_TOKEN"
}
```

---

### Book Routes

#### Get All Books

GET `/books`

Requires authentication

---

#### Add Book (Admin Only)

POST `/books`

```
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "publishedYear": 2018
}
```

---

#### Update Book

PUT `/books/:id`

Admin only

---

#### Delete Book

DELETE `/books/:id`

Admin only

---

#### Borrow / Return Book

PATCH `/books/:id/status`

Automatically toggles:

```
available → borrowed
borrowed → available
```

---

## Error Handling

Standard response format:

```
{
  "message": "Access denied"
}
```

Common errors handled:

* Invalid credentials
* Unauthorized access
* Token expired
* Resource not found
* Validation failure

---

## Security Measures

* Password hashing using bcrypt
* JWT expiration enabled
* Protected routes via middleware
* Role-based authorization layer
* Input validation before DB operations

---

## Testing APIs

Use:

* Postman
* Thunder Client
* cURL

Example:

```
GET /books
Authorization: Bearer <token>
```

---

## Future Improvements (Optional Enhancements)

* Refresh token support
* Search & filter books
* Audit logging system
* Docker deployment support
* Pagination support
* Rate limiting middleware

---

## Author

Altaf Khan
Backend Developer (Node.js / Express)
