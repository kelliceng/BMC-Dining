# BMC Dining App

A full-stack web application that allows students at Bryn Mawr College to submit and view dining experiences. 
Users can upload photos, tag dining locations, and browse a gallery of recent submissions.

## Features

- Upload dining location, name, and an image
- View all user-submitted posts in a gallery
- Developer mode for removing entries (for testing)
- Backend API with media storage and MongoDB integration

## Tech Stack

**Frontend**
- React
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose

**Media Storage**
- Cloudinary

**Deployment**
- Frontend: Vercel
- Backend: Render

## Demo

- Frontend: [Live App](http://localhost:3000/)
- API Server: [Render Deployment](https://bmc-dining-backend.onrender.com)

## Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/kelliceng/BMC-Dining.git
cd BMC-Dining

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Add environment variables in a .env file in the backend folder
# Required variables:
# CLOUDINARY_CLOUD_NAME=
# CLOUDINARY_API_KEY=
# CLOUDINARY_API_SECRET=
# MONGO_URI=

# Start the backend server
npm start

# In a new terminal, start the frontend
cd ../frontend
npm start
