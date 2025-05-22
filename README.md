# 🎬 Movie List API

A RESTful API built with **Express** and **MongoDB** that allows users to manage a list of movies. It includes full CRUD functionality along with filtering by title and director. The project also includes automated testing using **Jest** and **Supertest**.

---

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) movies
- Filter movies by title or director
- MongoDB database integration via Mongoose
- Environment configuration with dotenv
- Automated tests with Jest and Supertest
- Nodemon for hot-reloading during development

---

## 🧱 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **Jest** & **Supertest** (for testing)
- **Nodemon**
- **dotenv**

---

## 📁 Project Structure

List-API/
│
├── controllers/ # Route logic
├── models/ # Mongoose schemas
├── routes/ # Express route definitions
├── tests/ # Jest + Supertest tests
├── .env # Environment variables
├── index.js # App entry point
├── package.json
└── README.md

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lewy0151/List-API.git
cd List-API
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file
env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
4. Start the server
bash
Copy
Edit
npm start
Server will start on http://localhost:5000.

🧪 Running Tests
bash
Copy
Edit
npm test
Tests use Jest and Supertest and are located in the /tests folder.

📬 API Endpoints
Method	Route	Description
GET	/movies	Get all movies
GET	/movies/title/:title	Get movies by title
GET	/movies/director/:director	Get movies by director
GET	/movies/:id	Get movie by ID
POST	/movies	Create a new movie
PUT	/movies/:id	Update a movie by ID
DELETE	/movies/:id	Delete a movie by ID

🧼 Linting / Formatting
While this project doesn’t use a linter out of the box, it’s recommended to use extensions like Prettier or ESLint in your editor for consistent formatting.

🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

📄 License
This project is open-source and available under the ISC License.
