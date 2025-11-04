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
**Pasagada Chandini priya**

---

## 🪄 **Setup Instructions**

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Chandinipriya6/blogify_app
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
![WhatsApp Image 2025-11-04 at 16 54 04_51c73e2c](https://github.com/user-attachments/assets/7820b1a7-6135-4c9c-a3e6-3b78bb4535a9)

### 📝 Create Blog
<img width="1856" height="834" alt="image" src="https://github.com/user-attachments/assets/f14a3ba7-424a-428a-aaab-b860c2f123be" />

### 🔑 Login Page
![WhatsApp Image 2025-11-04 at 16 56 28_2c00a5f8](https://github.com/user-attachments/assets/b034235a-5ec5-419d-b3fc-4435af4b2938)

### 📚 All Blogs
![WhatsApp Image 2025-11-04 at 16 56 44_d2548c20](https://github.com/user-attachments/assets/3ff70fc9-cd6a-41b0-83bf-2e88fcb082c7)

![WhatsApp Image 2025-11-04 at 16 57 18_82134d42](https://github.com/user-attachments/assets/78657a70-0d4d-4fcf-8d64-7ad3824a8959)

![WhatsApp Image 2025-11-04 at 16 57 34_fbc5ba3c](https://github.com/user-attachments/assets/bb1be2fc-37d9-4a52-a510-8ed99536eb62)

![WhatsApp Image 2025-11-04 at 16 57 57_56cd33bc](https://github.com/user-attachments/assets/b41d5c14-1808-46e8-8dfc-acf3a215e6fe)

![WhatsApp Image 2025-11-04 at 16 58 11_862d4dfa](https://github.com/user-attachments/assets/96da30b6-0bdd-4716-9205-b8918030ca2b)

---

## 🌟 **Conclusion**

Blogify is a complete, scalable, and user-friendly blogging platform for writers and readers.  
It demonstrates powerful **MERN stack integration**, smooth **CRUD operations**, and secure **user authentication** — making it a perfect project for portfolios and learning full-stack development.
