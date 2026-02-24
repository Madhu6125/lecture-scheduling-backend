# ✅ **Backend README**
📁 `lecture-scheduling-backend/README.md`

```md
# Lecture Scheduling Module – Backend

This is the backend API for the Lecture Scheduling Module.  
It handles course management, lecture scheduling, instructor assignment, and validation rules.

## Live API
https://lecture-scheduling-backend-cj8a.onrender.com

---

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Core Business Rule
An instructor cannot be assigned more than one lecture on the same date.  
The backend validates this rule before saving lecture schedules.

---

## API Responsibilities
- Admin authentication
- Instructor authentication
- Course creation
- Lecture scheduling
- Instructor assignment
- Date clash prevention
- Fetch instructor-specific lectures

---

## Environment Variables
Sensitive data (MongoDB URI, secrets) are stored in `.env` file.  
The `.env` file is excluded from the repository and configured securely on Render.

Example:

MONGO_URI=your_mongodb_connection_string
PORT=5000


---

## Run Backend Locally

```bash
npm install
npm start

**Notes**
Database dump is shared separately as per instructions.
Backend is deployed on Render with production environment variables configured.


---

