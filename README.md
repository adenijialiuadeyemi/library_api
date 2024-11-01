# Library Management System - Backend API

This project is part of my **Internpulse internship**, where I was tasked with building a backend API for a **Library Management System**. The API allows users to **create**, **retrieve**, **update**, and **delete** books in the library catalog. It follows RESTful principles and is implemented using **Node.js**, **Express**, and **MongoDB**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)

## Features

- **Create a Book**: Add a new book by providing its title, author, genre, and publication date.
- **Retrieve Books**: Fetch details of all books or a specific book by its ID.
- **Update a Book**: Modify information about a book, such as availability status, title, or genre.
- **Delete a Book**: Remove a book from the library when it is lost, damaged, or no longer available.
- **Error Handling**: Appropriate HTTP status codes and error messages are returned for various error scenarios (e.g., 404 Not Found, 400 Bad Request).
- **Unit Testing**: The API is tested using Jest and Supertest for each endpoint.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building the API.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: MongoDB Object Data Modeling (ODM) for better interaction with the database.
- **Jest**: JavaScript testing framework for unit tests.
- **Supertest**: HTTP assertions for API testing.

## Installation

### Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/) on your machine.
- **MongoDB**: You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or install MongoDB locally.

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/adenijialiuadeyemi/library-api.git
    cd library-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Setup environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    ```

4. **Start the server**:
    ```bash
    npm run dev
    ```

The API will be running at [http://localhost:5555](http://localhost:5555).

## API Endpoints

### Create Book
- **URL**: `/api/books`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Fiction",
        "publicationDate": "1925-04-10",
        "availability": true
    }
    ```
- **Response**:
    ```json
    {
        "book": { ... }
    }
    ```

### Get All Books
- **URL**: `/api/books`
- **Method**: `GET`
- **Response**:
    ```json
    [
        {
            "_id": "bookId",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Fiction",
            "publicationDate": "1925-04-10",
            "availability": true,
            "createdAt": "2024-01-01T00:00:00.000Z",
            "updatedAt": "2024-01-01T00:00:00.000Z"
        },
        ...
    ]
    ```

### Get Book by ID
- **URL**: `/api/books/:id`
- **Method**: `GET`
- **Response**:
    ```json
    {
        "_id": "bookId",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Fiction",
        "publicationDate": "1925-04-10",
        "availability": true,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
    ```

### Update Book by ID
- **URL**: `/api/books/:id`
- **Method**: `PUT`
- **Request Body**:
    ```json
    {
        "title": "The Great Gatsby - Revised",
        "availability": false
    }
    ```
- **Response**:
    ```json
    {
        "message": "Book updated successfully",
        "book": { ... }
    }
    ```

### Delete Book by ID
- **URL**: `/api/books/:id`
- **Method**: `DELETE`
- **Response**:
    ```json
    {
        "message": "Book deleted successfully!"
    }
    ```

## Running Tests

To run the tests, use the following command:

```bash
npm test

## Error Handling

The API uses proper error handling for various scenarios:

- **400 Bad Request**: If required fields are missing or invalid.
- **404 Not Found**: If a book is not found.
- **500 Internal Server Error**: For unexpected server errors.

## Deployment

You can deploy the API to any platform supporting Node.js, such as:

- **Render**
- **Heroku**
- **Vercel**
- **DigitalOcean**

### To deploy:

1. Push the project to a GitHub repository.
2. Follow the platform’s steps for deployment.
3. Make sure to set environment variables like `MONGO_URI` on the hosting platform.

## Author

- **Name**: Adeniji Aliu Adeyemi
- **Role**: Backend Developer
- **Contact**: [adenijialiuadeyemi@gmail.com](mailto:adenijialiuadeyemi@gmail.com)
- **GitHub**: [https://github.com/yourusername](https://github.com/adenijialiuadeyemi)
- **LinkedIn**: [https://linkedin.com/in/yourprofile](https://linkedin.com/in/AdenijiAliuAde1)

## License

This project is licensed under the MIT License.
