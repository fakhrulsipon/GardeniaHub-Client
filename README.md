# ​ GardeniaHub – Gardening Community & Resource Hub

**Live Demo:** https://gardeniahub-auth.web.app/

---

##  Project Overview
GardeniaHub is a vibrant platform for gardening enthusiasts to explore, share tips, enroll in gardening events, and connect with a like-minded community. It’s designed for clarity, engagement, and ease-of-use with role-based access and secure authentication.

---

##  Features Highlight
-  Explore and browse various gardening tips and articles  
-  Enroll in events with seat limitations  
-  Role-based access: Admin & User dashboards  
-  Secure login with Firebase Authentication  
-  Responsive UI with Light/Dark theme toggle

---

##  Technologies Used
- **Frontend:** React.js, Tailwind CSS, DaisyUI  
- **Backend:** Firebase Authentication, Firestore Database  
- **UX Enhancements:** React Hook Form, React Router  
- **Design & UI:** Responsive layouts, Theme toggler

---

##  Dependencies
- react  
- react-dom  
- react-router-dom  
- tailwindcss  
- daisyui  
- firebase  
- react-hook-form  

Firebase (Authentication)

MongoDB & Express.js (Backend & Database)

📦 How to Run Locally
# 1️⃣ Clone the repository
git clone https://github.com/fakhrulsipon/gardeniahub.git
cd GardeniaHub-Client

# 2️⃣ Install frontend dependencies
npm install

# 3️⃣ Add environment variables
# ➜ Create a .env file with:
# - VITE_FIREBASE_API_KEY
# - VITE_FIREBASE_AUTH_DOMAIN
# - VITE_MONGODB_URI
# - VITE_STRIPE_PUBLIC_KEY

# 4️⃣ Start development server
npm run dev

# 5️⃣ Run backend separately if using decoupled server
cd GardeniaHub_Server
npm install
nodemon index.js


