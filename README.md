🏕️ WanderLust   ##  Live Demo  
See it in action: [Live Demo on Render](https://wandurlust-tlqq.onrender.com)


WanderLust is a full-stack travel & rental platform inspired by Airbnb, where users can explore, list, and book stays from around the world.
Built with Node.js, Express, MongoDB, and EJS, this project demonstrates CRUD operations, authentication, and image handling.

🌐 Live Demo: WanderLust on Render

🚀 Features

🏠 Property Listings — Browse rentals with images, price, and location.

✏ CRUD Operations — Create, read, update, and delete listings.

🔑 User Authentication — Login, register, and access protected routes.

📸 Image Uploads — Cloudinary integration for image storage.

⭐ Reviews & Ratings — Post, update, and delete reviews.

🗺 Interactive Maps — Location maps via Map API.

📱 Responsive UI — Mobile-friendly design.

🔒 Security — Sanitized inputs, password hashing, and session security.

🛠 Tech Stack

Frontend:

HTML, CSS, Bootstrap

EJS (Embedded JavaScript Templates)

Backend:

Node.js

Express.js

Database:

MongoDB (Mongoose ODM)

Other Tools:

Cloudinary (Image hosting)

Passport.js (Authentication)

Map API (for location display)

📂 Project Structure
WanderLust/
│── public/         # Static files (CSS, JS, images)
│── routes/         # Express routes
│── models/         # Mongoose models
│── views/          # EJS templates
│── utils/          # Utility functions
│── middleware.js   # Custom middlewares
│── app.js          # Main server file
│── package.json
│── README.md

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/<your-username>/WanderLust.git
cd WanderLust


Install dependencies

npm install


Set up environment variables
Create a .env file in the root directory:

DATABASE_URL=mongodb+srv://<your-db-connection>
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
MAP_API_KEY=your_map_api_key
SESSION_SECRET=your_secret


Run the application

npm start


Visit: http://localhost:8080

📸 Screenshots

(Add images to make it visually appealing)
Example:


📌 Future Improvements

Booking & payment integration

Advanced search & filters

Email notifications

Multi-language support

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

📄 License

This project is licensed under the MIT License
.
