# MySchool Backend API

## Overview

This project is a backend API for the MySchool application, allowing private schools to maintain records of students and teachers. It provides functionality to create, read, update, and delete records of students, teachers, and other staff members. It also allows storing and retrieving student scores for various subjects.

## Features

- User registration with encrypted passwords and expiration.
- CRUD operations for student details.
- CRUD operations for class details.
- Retrieval of student scores by subject and class.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **bcrypt** for password hashing

## Endpoints

### User API

- **POST /api/users/register**
  - Register a user with user ID and password.

### Student API

- **POST /api/students**
  - Add student details.

### Class API

- **POST /api/classes**
  - Add or update class details.
- **GET /api/classes/scores**
  - Get student scores for a particular subject in a class.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file with your MongoDB URI and server port.
4. Run the server with `npm start` OR `nodemon server.js`.
