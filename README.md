# Social Media Management System

A full-stack social media management application built using **Spring Boot, React, and MySQL**. The system allows users to register, manage their profiles, create posts, view posts, and interact with the application through a RESTful backend and responsive frontend.

---

## 📌 Project Overview

The **Social Media Management System** is a full-stack web application developed to demonstrate the integration of a **React frontend** with a **Spring Boot REST API** and a **MySQL database**.

The project follows a layered architecture where:

* **React** handles the user interface and client-side interactions.
* **Spring Boot** provides REST APIs and handles business logic.
* **MySQL** stores and manages application data.
* **Git & GitHub** are used for version control and project management.

The project was developed as a practical implementation of Java full-stack development concepts.

---

## 🎥 Project Demo

A complete walkthrough of the Social Media Management System demonstrating the application's main features and functionality.

[▶️ Watch Project Demo](docs/project-demo.mp4)

---

## 🗄️ Database Design

The application uses **MySQL** for persistent data storage.

The database is designed to manage users, profiles, posts, and their associated information.

### Entity Relationship Diagram

![Database ER Diagram](docs/Database%20ER%20diagram.png)

---

## 🛠️ Tech Stack

### Backend

* **Java**
* **Spring Boot**
* **Spring Web / REST API**
* **Spring Data JPA**
* **Hibernate**
* **Maven**

### Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**

### Database

* **MySQL**

### Development & Version Control

* **IntelliJ IDEA**
* **Visual Studio Code**
* **Git**
* **GitHub**

---

## ✨ Features

### 👤 User Management

* User registration
* User information management
* User-based data handling

### 📝 Post Management

* Create posts
* View all posts
* View posts belonging to a particular user
* Store post information in the database

### 👨‍💼 Profile Management

* Create and manage user profiles
* Retrieve profile information
* Update profile-related information

### 🔗 Backend Integration

* RESTful API architecture
* React frontend communicates with Spring Boot backend
* Backend communicates with MySQL database
* CRUD operations using Spring Data JPA

---

## 🏗️ Application Architecture

The application follows a basic three-layer full-stack architecture:

```text
┌───────────────────────────────┐
│        React Frontend         │
│                               │
│  Pages / Components / UI      │
└───────────────┬───────────────┘
                │
                │ HTTP Requests
                ▼
┌───────────────────────────────┐
│       Spring Boot Backend     │
│                               │
│ Controllers                   │
│ Services                      │
│ Repositories                  │
│ Entities                      │
└───────────────┬───────────────┘
                │
                │ JPA / Hibernate
                ▼
┌───────────────────────────────┐
│          MySQL Database       │
│                               │
│ Users / Profiles / Posts      │
└───────────────────────────────┘
```

### Application Flow

```text
User
  ↓
React Frontend
  ↓
REST API Request
  ↓
Spring Boot Controller
  ↓
Service Layer
  ↓
Repository Layer
  ↓
MySQL Database
  ↓
Response
  ↓
React Frontend
  ↓
User
```

---

## 📁 Project Structure

```text
Social-media-management-system/
│
├── sms-backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── mits/
│   │   │   │           └── socialmediamanagementsystem/
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── sms-frontend/
│   │
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── docs/
│   ├── Database ER diagram.png
│   └── project-demo.mp4
│
├── .gitignore
└── README.md
```

---

## 🔌 Backend API Structure

The backend is organized using a layered Spring Boot architecture.

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
Entity
     ↓
MySQL
```

### Main Backend Components

#### Controllers

Responsible for handling HTTP requests and returning API responses.

Examples include:

* `UserController`
* `ProfileController`
* `PostController`

#### Services

Contains the application's business logic.

Examples:

* `UserService`
* `ProfileService`
* `PostService`

#### Repositories

Responsible for database interaction using Spring Data JPA.

Examples:

* `UserRepo`
* `ProfileRepo`
* `PostRepo`

#### Entities

Represent the application's database tables.

Examples:

* `UserEntity`
* `ProfileEntity`
* `PostEntity`

---

## 🚀 How to Run the Project

### Prerequisites

Make sure the following are installed:

* Java JDK
* Maven
* Node.js and npm
* MySQL
* Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/JonnagaddalaVaishnavi/socialmedia-management-system.git
```

Navigate into the project:

```bash
cd socialmedia-management-system
```

---

### 2. Configure MySQL

Create the required MySQL database.

Then configure the database connection in the Spring Boot application's configuration file.

For example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

> **Important:** Never commit actual database passwords, API keys, tokens, or other secrets to GitHub.

---

### 3. Start the Backend

Navigate to the backend:

```bash
cd sms-backend
```

Run the Spring Boot application using Maven:

```bash
mvn spring-boot:run
```

Or run the main Spring Boot application directly from IntelliJ IDEA.

---

### 4. Start the Frontend

Open another terminal and navigate to:

```bash
cd sms-frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The Vite development server will provide the local frontend URL in the terminal.

---

## 🔄 Frontend-Backend Communication

The frontend communicates with the Spring Boot backend through HTTP requests.

The general flow is:

```text
React Component
      ↓
HTTP Request
      ↓
Spring Boot REST Controller
      ↓
Service Layer
      ↓
Repository
      ↓
MySQL
      ↓
JSON Response
      ↓
React Component
      ↓
UI Update
```

This separation allows the frontend and backend to be developed and maintained independently.

---

## 🧪 Development Approach

The project was developed incrementally by implementing and testing individual modules.

### Development stages

1. Database design
2. Spring Boot project setup
3. Entity creation
4. Repository implementation
5. Service layer implementation
6. REST controller implementation
7. API testing
8. React frontend development
9. Frontend-backend integration
10. Debugging and testing
11. Git version control
12. GitHub project management

---

## 📚 Key Concepts Practiced

Through this project, the following concepts were implemented and practiced:

### Java

* Object-Oriented Programming
* Classes and Objects
* Exception Handling
* Collections
* Interfaces
* Java application structure

### Spring Boot

* Spring Boot project structure
* REST APIs
* Controllers
* Services
* Repositories
* Dependency Injection
* Spring Data JPA
* Hibernate
* Entity relationships
* HTTP methods
* JSON request/response handling

### React

* Components
* JSX
* Props
* State
* Hooks
* Forms
* Event handling
* API integration
* Frontend routing and page structure

### MySQL

* Database creation
* Tables
* Primary keys
* Foreign keys
* CRUD operations
* SQL queries
* Relationships

### Git & GitHub

* Git initialization
* Branch management
* Commits
* Remote repositories
* Push and pull operations
* Merge conflicts
* GitHub repository management

---

## 🔮 Future Improvements

The project can be extended with additional features such as:

* User authentication and authorization
* Password encryption
* Role-based access control
* Like and comment functionality
* Follow/unfollow functionality
* Image and media upload
* Notifications
* Search functionality
* Pagination
* Improved UI/UX
* Unit and integration testing
* Deployment to a cloud platform

---

## 🎯 Project Objective

The main objective of this project is to gain practical experience in **Java full-stack development** by building and integrating:

```text
Java
  +
Spring Boot
  +
REST APIs
  +
React
  +
MySQL
```

The project demonstrates how a modern web application can be structured using separate frontend, backend, and database layers.

---

## 👩‍💻 Developer

**J Vaishnavi**

MCA Student | Java Full-Stack Developer

### Profiles

* GitHub: [JonnagaddalaVaishnavi](https://github.com/JonnagaddalaVaishnavi)
* LinkedIn: [J Vaishnavi](https://linkedin.com/in/j-vaishnavi0)
* LeetCode: [vaishnavi_leet](https://leetcode.com/u/vaishnavi_leet/)

---

## ⭐ Acknowledgement

This project was developed as part of my learning journey in **Java Full-Stack Development**, with a focus on building practical applications using Spring Boot, React, and MySQL.

---

## 📄 License

This project is intended primarily for educational and portfolio purposes.
