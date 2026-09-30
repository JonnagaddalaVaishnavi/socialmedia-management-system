# Social Media Management System

A full-stack Social Media Management System built using **React.js**, **Spring Boot**, and **MySQL**. The application provides a platform for users to register, manage their profiles, create posts, and interact with the system through a responsive web interface.

## 🚀 Project Overview

The **Social Media Management System** is a full-stack web application designed to demonstrate the development of a modern client-server application.

The frontend is developed using **React.js**, while the backend is implemented using **Java Spring Boot** and follows a layered architecture with controllers, services, repositories, and entities. MySQL is used for persistent data storage.

The project helped me gain practical experience in:

* Full-stack application development
* REST API development
* Frontend-backend integration
* Database connectivity
* CRUD operations
* User and profile management
* Git and GitHub version control

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* Axios / Fetch API

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs
* Maven

### Database

* MySQL

### Tools & Development

* IntelliJ IDEA
* Visual Studio Code
* MySQL
* Git
* GitHub

---

## ✨ Features

### 👤 User Management

* User registration
* User login
* User information management
* User-specific data handling

### 🧑‍💼 Profile Management

* Create and manage user profiles
* Retrieve profile information
* Update profile-related information

### 📝 Post Management

* Create posts
* Retrieve posts
* Retrieve posts belonging to a specific user
* Store post information in the database

### 🔗 Frontend–Backend Integration

The React frontend communicates with the Spring Boot backend through REST APIs.

```text
React Frontend
      │
      │ HTTP Requests
      ▼
Spring Boot REST API
      │
      ▼
Service Layer
      │
      ▼
Repository Layer
      │
      ▼
MySQL Database
```

---

## 🏗️ Project Structure

```text
socialmedia-management-system/
│
├── sms-backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/mits/socialmediamanagementsystem/
│   │   │   │       ├── controller/
│   │   │   │       ├── entity/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   └── pom.xml
│
├── sms-frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── auth/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── .gitignore
```

---

## 🔌 Backend API Structure

The backend exposes REST APIs for different parts of the application.

### User APIs

Used for user registration and user-related operations.

```text
/api/users
```

### Profile APIs

Used to create and retrieve user profile information.

```text
/api/profiles
```

### Post APIs

Used for post-related operations such as creating and retrieving posts.

```text
/api/posts
```

The frontend consumes these APIs to display and manage application data.

---

## ⚙️ How to Run the Project

### Prerequisites

Make sure the following are installed:

* Java JDK 17 or compatible version
* Maven
* Node.js
* npm
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

Then configure your database connection in:

```text
sms-backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

> Do not commit real database passwords or other sensitive credentials to GitHub.

---

### 3. Run the Backend

Navigate to the backend:

```bash
cd sms-backend
```

Run the Spring Boot application using Maven:

```bash
./mvnw spring-boot:run
```

On Windows:

```cmd
mvnw.cmd spring-boot:run
```

The backend will normally run on:

```text
http://localhost:8080
```

---

### 4. Run the Frontend

Open another terminal and navigate to:

```bash
cd sms-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🔄 Application Flow

```text
          USER
           │
           ▼
    React Frontend
           │
           │ REST API Requests
           ▼
    Spring Boot Backend
           │
           ▼
      Controllers
           │
           ▼
        Services
           │
           ▼
      Repositories
           │
           ▼
      MySQL Database
```

Data retrieved from the backend is returned to the React frontend and displayed through the application's UI.

---

## 🧪 Development Approach

The backend follows a layered architecture:

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
Database
```

This separation helps keep API handling, business logic, database operations, and data models organized independently.

The frontend is structured using reusable React components and page-specific components.

---

## 📚 What I Learned

Through this project, I gained hands-on experience with:

* Building REST APIs using Spring Boot
* Connecting Spring Boot applications with MySQL
* Implementing CRUD operations
* Using Spring Data JPA
* Structuring backend applications using layered architecture
* Building user interfaces with React
* Connecting React applications with REST APIs
* Handling frontend and backend communication
* Working with JSON data
* Debugging API integration issues
* Using Git and GitHub for version control

---

## 🔮 Future Improvements

Possible future enhancements include:

* Authentication and authorization
* Improved validation and error handling
* Image upload and storage improvements
* Like and comment functionality
* Search and filtering
* Notifications
* Pagination
* Improved responsive design
* Deployment to a cloud platform

---

## 👩‍💻 Developer

**J Vaishnavi**

Full Stack Developer | Java | Spring Boot | React | MySQL

### Connect with me

* GitHub: [JonnagaddalaVaishnavi](https://github.com/JonnagaddalaVaishnavi)
* LinkedIn: [J Vaishnavi](https://www.linkedin.com/in/j-vaishnavi0/)

---

## ⭐ Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.
