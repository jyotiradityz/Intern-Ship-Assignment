# Worko User Management API

This project is a Node.js application that provides a RESTful API for managing users. The application follows the MVC (Model-View-Controller) architecture and includes basic authentication, validation, and CRUD operations.

## Features

- MVC Architecture
- RESTful API for User Resource
- CRUD Operations
- Basic Authentication
- Data Validation
- NoSQL Database Integration (MongoDB)
- Environment-based Configuration
- Unit Testing

## Technologies Used

- Node.js
- Express
- Joi (Validation)
- MongoDB (NoSQL Database)
- Mongoose (ODM for MongoDB)
- dotenv


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/jyotiradityz/Intern-Ship-Assignment
    cd Intern-Ship-Assignment
    ```

2. Install dependencies:
    ```sh
    npm install
    npm i nodemon
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/your_url
    JWT_SECRET=<your_string>
    ```

4. Run the application:
    ```sh
    cd Assignments
    cd src
    nodemon app.js
    ```

### Running Tests

To run unit tests with coverage:
First create demo user and get the authToken
update the value of authToken in userController.test.js for tests
```sh
cd ..
npm test
```

### Tests Result
![image](https://github.com/jyotiradityz/Intern-Ship-Assignment/assets/101706279/49e90187-04c5-4011-87de-b9aab4cf7a18)

