# **Blogify: A Full-Stack MERN Blog Application**

**Welcome to Blogify!**

This project demonstrates a full-stack blog application built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It features a user-friendly interface, robust functionalities, and secure user management.  

---

## **Project Structure**

- **client** → Contains the React frontend codebase.  
- **server** → Houses the Node.js backend responsible for server-side logic and API endpoints.  

---

## **Navigating Blogify**

### 1. **Home Page**

The home page serves as the main entry point for users.  
It displays a list of recent blog posts along with navigation options to explore other sections.

---

### 2. **Admin Dashboard**

Accessible only to authorized admin users.  
The admin dashboard allows management of users, posts, and comments — including viewing, editing, and deleting data.

---

### 3. **Sign Up**

Users can create accounts through email/password or Google OAuth authentication.

---

### 4. **Sign In**

Existing users can log in securely using either their registered email/password or Google OAuth.

---

### 5. **Create Post**

Available only to authenticated users.  
Users can create new blog posts by providing a title, image, content, and optionally, categories or tags.

---

### 6. **Update Post**

Authenticated users can edit their own blog posts — updating titles, images, content, and tags as needed.

---

### 7. **Search**

The search feature allows users to find specific blog posts based on keywords or criteria.  
Advanced filtering and sorting options can be integrated for a better experience.

---

### 8. **Post Details**

Displays the full content of an individual blog post — including the title, image, content, date, reading time, and comments or likes from other users.

---

## **Getting Started**

### 1. **Clone the Repository**

```bash
git clone https://github.com/Chandinipriya6/blogify_app.git

2. Install Dependencies
cd blogify_app
npm install

3. Configure Environment Variables

Create a .env file in the project root directory and add:

MONGODB_URI=mongodb://localhost:27017/<your-database-name>
JWT_SECRET=<your-jwt-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

4. Run the Application
npm start


This will start the development server on http://localhost:3000
 by default.

✅ Now Blogify is ready to explore locally!
You can add or customize features such as comment systems, post categories, likes, or an enhanced admin dashboard.

Technologies Used

Frontend: React.js, React Router, Axios, Tailwind CSS / CSS Modules

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JSON Web Tokens (JWT), Google OAuth

Deployment (optional): Render, Vercel, or any cloud service

Future Enhancements

Add comment replies and like system

Integrate rich text editor for post creation

Add user profile pages and avatars

Implement dark/light theme toggle

Enable pagination and category filters
