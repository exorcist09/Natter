# Natter – Real-Time Chat Application

<!-- <div >
  <img src="./frontend/src/assets/logo_readme.jpeg" alt="natter_logo" width="200"/> 
  <h2><strong>Kairo – Visual Job Scheduler & Workflow Automation Tool</strong></h2> 
</div> 
-->


*A sleek, full-stack real-time chat app powered by the MERN stack with live messaging, media uploads, and a modern UI.*

Natter delivers a smooth, RealTime chat experience with instant messaging, media sharing, and a clean, responsive interface. Built with Socket.io for real-time communication and optimized for scalability and performance.

---
## Live Deployment

**Live App:** [Live_Application_Link](https://natter-kvvj.onrender.com/)


##  Features

*  **Real-Time Chat** using Socket.io (typing indicator, online status, room-based messaging)
*  **JWT Authentication** for secure login & registration
*  **Media Sharing** (image/video uploads via Cloudinary)
*  **Modern UI** with TailwindCSS + DaisyUI
*  **Global State Management** via Zustand
*  **Robust Error Handling** on both client & server
*  **Responsive Design** for mobile & desktop
*  **Production Ready**, optimized for Render & scalable backend hosting

---

##  Tech Stack

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| **MongoDB**     | NoSQL database          |
| **Express.js**  | Server-side framework   |
| **React.js**    | Frontend UI             |
| **Node.js**     | Backend runtime         |
| **Socket.io**   | Real-time communication |
| **Cloudinary**  | Media storage/uploads   |
| **TailwindCSS** | Styling                 |
| **DaisyUI**     | UI component library    |
| **Zustand**     | Client-side state       |
| **JWT**         | Authentication          |

---

##  System Architecture

### Frontend

* React + Zustand for reactive state
* Socket.io client for bi-directional event communication
* Axios for API requests
* Cloudinary widget for media uploads

### Backend

* Node.js + Express REST API
* MongoDB + Mongoose
* Socket.io server for real-time events
* Cloudinary SDK for media storage
* JWT-based auth middleware

---

##  Folder Structure

```
natter/
│
├── backend/       # Express API, sockets, models, controllers
├── frontend/      # React app with Zustand & Socket.io client
├── README.md
└── package.json
```

---

## 🛠️ Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/natter.git
cd natter
```

### 2. Backend Setup

```bash
cd backend
npm ci
npm run dev
```

**Create `.env` in /backend:**

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD=your_cloud_name
CLOUDINARY_API=your_api_key
CLOUDINARY_SECRET=your_api_secret
PORT=5000
```

### 3. Frontend Setup

```bash
cd frontend
npm ci
npm run dev
```

**Create `.env` in /frontend:**

```
VITE_BACKEND_URL=http://localhost:5000
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

---


## API Documentation (Basic endpoints to include)

**Auth**

* `POST /api/auth/register` — Register a user
* `POST /api/auth/login` — Log in and receive JWT

**Users**

* `GET /api/users/:id` — Get user profile

**Chats & Messages**

* `GET /api/chats` — List user chats
* `POST /api/chats` — Create a new chat (1:1 or group)
* `GET /api/chats/:id/messages` — Get messages for a chat
* `POST /api/chats/:id/messages` — Send a message to a chat

**Media**

* `POST /api/media/upload` — Upload media (returns Cloudinary URL)

---

##  Useful Scripts

In both `frontend` and `backend` you can run:

```
npm run dev    # start app in development
npm run build  # build for production
npm test       # run tests (if configured)
```

---
