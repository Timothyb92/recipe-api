# Recipe API

## Project Description

The Recipe API is a Node.js application built using Express.js and MongoDB. It provides endpoints to manage recipes, including creating, reading, updating, and deleting recipe data.

## Features

- **Create Recipe:** Add new recipes with ingredients and instructions.
- **Read Recipe:** Retrieve detailed information about recipes.
- **Update Recipe:** Modify existing recipes.
- **Delete Recipe:** Remove recipes from the database.

## Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/recipe-api.git
   cd recipe-api
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environmental variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string.

## Running the Application

1. **Start the server:**
   ```sh
   npm start
   ```
2. **Access the API:**
   This application is backend only, and API endpoints can be consumed with HTTP request tools such as Postman

## Project Structure

- **src/**
  - **controllers/**: Contains the logic for handling requests and responses.
  - **models/**: Defines the schema for the Recipe model.
  - **routes/**: Defines the API endpoints.
  - **app.js**: Initializes the Express app and middleware.
  - **server.js**: Starts the server.

## API Endpoints

- **GET /recipes**: Retrieve all recipes.
- **GET /recipes/:id**: Retrieve a specific recipe by ID.
- **POST /recipes**: Create a new recipe.
- **PUT /recipes/:id**: Update an existing recipe by ID.
- **DELETE /recipes/:id**: Delete a recipe by ID.
