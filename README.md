# User Management API

This is a simple Node.js + Express + MongoDB backend application for user management. It provides APIs for user signup, signin, fetching user details, and updating user information.

## Features

- User Signup
- User Signin (JWT-based authentication)
- Fetch User Details
- Update User Details
- Password is hashed before storing
- Optional fields: address, phone

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- bcrypt (for password hashing)
- JSON Web Token (JWT) for authentication

## Installation

1. Clone the repository:

git clone <repository_url>
cd <repository_folder>

### 2.Install dependencies:
npm install

### 3.Create a .env file in the root directory and set environment variables:
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>


### 4. Start the server:
npm run dev
