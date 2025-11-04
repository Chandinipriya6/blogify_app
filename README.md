# **Blogify: A Full-Stack MERN Blog Application**

**Welcome to Blogify!**  

Blogify is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) based blog application that allows users to create, manage, and share blog posts seamlessly.  
It provides a clean interface for reading and writing blogs, along with secure user authentication and responsive design.

---

## 🚀 **Key Features**

- 🔐 **User Authentication** — Secure login and registration using **JWT**  
- ✍️ **Create, Edit & Delete Blogs** — Manage your blogs with an intuitive editor  
- 🖼️ **Image Uploads** — Add images to make blogs more engaging (via **Multer**)  
- 💬 **Comment System** — Readers can comment on posts  
- 📱 **Responsive UI** — Works perfectly across all devices  
- ⚙️ **RESTful APIs** — Built with **Express.js** for efficient backend management  
- 💾 **Database Integration** — All data stored securely in **MongoDB**  

---

## 🧰 **Tech Stack**

| Category | Technology Used |
|-----------|-----------------|
| **Frontend** | React.js, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Authentication** | JWT (JSON Web Token), bcrypt |
| **File Uploads** | Multer |
| **Hosting** | Vercel (Frontend), Render (Backend) |

---

## ⚙️ **Project Structure**

```
Blogify/
│
├── client/             # React frontend
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Page components
│   │   └── App.js
│   └── package.json
│
├── server/             # Express backend
│   ├── routes/         # API routes
│   ├── models/         # Mongoose schemas
│   ├── controllers/    # Logic for each route
│   ├── server.js       # Entry point
│   └── package.json
│
└── README.md
```

---

## 🧑‍💻 **Developed By**
**Pasagada Chandini**

---

## 🪄 **Setup Instructions**

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/blogify.git
cd blogify
```

### 2️⃣ Install Dependencies

For the backend:
```bash
cd server
npm install
```

For the frontend:
```bash
cd ../client
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the **server** folder and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Application
Start the backend:
```bash
cd server
npm start
```

Start the frontend:
```bash
cd ../client
npm start
```

Your app will be running at:  
👉 **Frontend:** http://localhost:3000  
👉 **Backend:** http://localhost:5000  

---

## 🖼️ **Screenshots**

### 🏠 Home Page
![Home Page](https://files.chat.openai.com/file-00000000ffb871fa89e60370a302a9dc)

### 📝 Create Blog
![Create Blog](https://files.chat.openai.com/file-00000000fde471fa89f5d9c767304340)

### 📄 Blog View
![Blog View](https://files.chat.openai.com/file-0000000011d472078e6d6ae2898de48a)

### 🔑 Login Page
![Login](https://files.chat.openai.com/file-000000007060720787b619a86bca82d8)

### 👤 User Dashboard
![Dashboard](https://files.chat.openai.com/file-00000000774071fa8fdb0b17d9ea81ac)

### 📚 All Blogs
![All Blogs](https://files.chat.openai.com/file-00000000fde871faa0ba34956372e6a2)

### 📱 Responsive Design
![Responsive Design](https://files.chat.openai.com/file-000000003b0c71fab9ff2dc144965c35)

### ⚙️ Backend API Running
![Backend API](https://files.chat.openai.com/file-00000000e8fc71faa831e77c066c6054)

---

## 🌟 **Conclusion**

Blogify is a complete, scalable, and user-friendly blogging platform for writers and readers.  
It demonstrates powerful **MERN stack integration**, smooth **CRUD operations**, and secure **user authentication** — making it a perfect project for portfolios and learning full-stack development.
