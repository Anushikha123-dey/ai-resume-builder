# ai-resume-builder
A full-stack AI-powered resume builder built with React, Node.js, Express, and MongoDB.
# AI Resume Builder

A full-stack web application that helps users create, customize, and manage professional resumes. The project includes user authentication, resume editing, and AI-powered content enhancement.

## Features

- User registration and login with JWT authentication
- Create and manage multiple resumes
- Edit personal information, education, experience, projects, and skills
- Professional summary enhancement using an AI API
- Resume preview and customizable templates
- Profile image uploads using ImageKit
- Persistent data storage with MongoDB Atlas

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- Axios
- Redux Toolkit
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)

**Integrations**
- AI API through the OpenAI-compatible SDK
- ImageKit for image uploads

## Project Structure

```text
ai-resume-builder/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.example
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas database
- ImageKit credentials for image uploads
- Credentials for the configured AI API

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ai-resume-builder
```

### 2. Configure the backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and configure the environment variables required by the application.

### 3. Configure the frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory. Configure `VITE_BASE_URL` to point to the backend API.

For local development:

```env
VITE_BASE_URL=http://localhost:3000
```

### 4. Run the application

Open two terminals from the project root.

**Terminal 1 — Backend**

```bash
cd server
npm run server
```

Use the actual start script defined in `server/package.json` if it differs.

**Terminal 2 — Frontend**

```bash
cd client
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Environment Variables

Configure the required backend environment variables for MongoDB, JWT authentication, ImageKit, and the AI provider. Use the variable names expected by the source code.

The frontend requires `VITE_BASE_URL`.

Never commit real API keys, database credentials, JWT secrets, or private keys.

## Deployment

The application will be deployed with a hosted frontend, a hosted Node.js backend, and MongoDB Atlas for database storage.

Live application: To be added.

## Future Improvements

- Improve AI-powered resume content generation
- Add robust input validation and error handling
- Improve mobile responsiveness and accessibility
- Add more resume templates




