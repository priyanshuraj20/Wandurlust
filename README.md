# 🏕️ WanderLust

WanderLust is a **full-stack travel & rental platform** inspired by Airbnb, where users can explore, list, and book stays from around the world.  
Built with **Node.js, Express, MongoDB, and EJS**, this project demonstrates CRUD operations, authentication, and image handling.

---

## 🚀 Features

- 🏠 **Property Listings** — View all available rentals with images, price, and location.
- ✏ **CRUD Operations** — Create, read, update, and delete listings.
- 🔑 **User Authentication** — Login, register, and protected routes.
- 📸 **Image Uploads** — Cloudinary integration for image storage.
- ⭐ **Reviews & Ratings** — Users can post and delete reviews.
- 📱 **Responsive UI** — Mobile-friendly design.

---

## 🛠 Tech Stack

**Frontend:**
- HTML, CSS, Bootstrap
- EJS (Embedded JavaScript Templates)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose ODM)

**Other Tools:**
- Cloudinary (Image hosting)
- Passport.js (Authentication)

---

## 📂 Project Structure
WanderLust/
│── public/ # Static files (CSS, JS, images)
│── routes/ # Express routes
│── models/ # Mongoose models
│── views/ # EJS templates
│── utils/ # Utility functions
│── app.js # Main server file
│── package.json
│── README.md


---

## ⚙️ Installation & Setup

1. **Clone the repository**
```sh
git clone https://github.com/<your-username>/WanderLust.git
cd WanderLust

Install dependencies:
npm install

Create a .env file in the root:
DATABASE_URL=mongodb+srv://<your-db-connection>
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret

Run the application: npm start
http://localhost:8080

