# MERN Portfolio

A full-featured portfolio website built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. This project showcases my personal portfolio, including information about me, my projects, my skills, and a contact form for potential clients or employers.

## Features

- **Responsive Design**: The portfolio is fully responsive and works seamlessly on all devices.
- **Projects Showcase**: Displays a collection of my projects with descriptions and links to GitHub repositories and live demos.
- **Contact Form**: Users can contact me directly through the website using a secure and efficient contact form.
- **Tech Stack**: Built using the MERN stack, providing a robust and scalable structure.
- **Admin Dashboard**: Manage content dynamically without needing to modify the codebase.

## Technologies Used

### Frontend

- **React.js**: For building the user interface and rendering dynamic components.
- **CSS**: For styling the components and layout.
- **Redux Toolkit**: For state management (if used).

### Backend

- **Node.js**: As the server-side runtime environment.
- **Express.js**: For handling routes and backend logic.
- **MongoDB**: As the database to store portfolio details and contact messages.

### Additional Tools

- **Multer**: For file uploads (if implemented).
- **Cloudinary**: For image and asset hosting (if implemented).
- **JWT**: For authentication (if user authentication is needed).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Wcoder547/Mern-Portfolio.git
   cd Mern-Portfolio
   ```

2. **Install dependencies for both frontend and backend**:

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     MONGO_URI=your-mongodb-connection-string
     PORT=your-server-port
     JWT_SECRET=your-jwt-secret
     CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_API_SECRET=your-cloudinary-api-secret
     ```
   - Replace the values with your actual configuration.

4. **Run the application**:

   ```bash
   # Start the backend
   cd backend
   npm run dev

   # Start the frontend
   cd ../frontend
   npm start
   ```

5. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```bash
Mern-Portfolio/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── ...
│
└── README.md
```

## Features to Add (Future Improvements)

- **Blog Section**: To share my thoughts and tutorials on web development.
- **Dark Mode**: To provide a better user experience.
- **Admin Panel**: For easy content management.

## Contact

If you have any questions or want to collaborate, feel free to reach out to me:

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile/)
- **GitHub**: [Wcoder547](https://github.com/Wcoder547)

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the content to match your project details and style! Let me know if you'd like any modifications.
