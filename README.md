# MERN Portfolio

A full-featured portfolio website built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. This project serves as a professional portfolio, showcasing details about me, my projects, and my skills, along with an admin dashboard for content management and a secure authentication system.

## Features

- **Responsive Design**: Built with Tailwind CSS and ShadCN UI, ensuring a modern and responsive interface for all devices.
- **Projects Showcase**: A section to display all projects with descriptions, images, and links to live demos and GitHub repositories.
- **Admin Dashboard**: A dedicated dashboard for managing portfolio content, including project listings, contact messages, and more.
- **Authentication**: Secure admin login with JWT-based authentication and a reset password feature.
- **Contact Form**: A form allowing visitors to send messages, integrated with an email service for notifications.

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **Vite**: For fast and efficient development setup.
- **Tailwind CSS**: For styling and designing a modern, responsive layout.
- **ShadCN UI**: For pre-built, accessible, and customizable UI components.
- **Redux Toolkit**: For efficient state management.

### Backend

- **Node.js**: Server-side runtime environment.
- **Express.js**: Framework for building APIs and handling backend logic.
- **MongoDB**: Database to store portfolio data and contact messages.

### Additional Tools

- **Multer**: For file uploads (e.g., profile images, project screenshots).
- **Cloudinary**: For hosting and serving images and other assets.
- **JWT**: For secure authentication and session management.

### Email Configuration

- **SMTP**: For handling contact form submissions and sending reset password emails using Gmail.

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
     PORT=4000
     MONGO_URI=mongodb://127.0.0.1:27017
     PORTFOLIO_URL=http://localhost:5174
     DASHBOARD_URL=http://localhost:5173

     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
     CLOUDINARY_API_SECRET=your-cloudinary-api-secret

     JWT_SECRET_KEY=your-jwt-secret
     JWT_EXPIRES=your-jwt-expiry-time
     COOKIE_EXPIRES=your-cookie-expiry-time

     SMTP_HOST=smtp.your-email-provider.com
     SMTP_PORT=465
     SMTP_SERVICE=gmail
     SMTP_MAIL=your-email@example.com
     SMTP_PASSWORD=your-email-password
     ```

   - Replace placeholders with your actual credentials.

4. **Run the application**:

   ```bash
   # Start the backend
   cd backend
   npm run dev

   # Start the frontend
   cd ../frontend
   npm run dev
   ```

5. **Access the application**:
   - **Portfolio**: Open `http://localhost:5174` in your browser.
   - **Admin Dashboard**: Open `http://localhost:5173` in your browser.

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
│   ├── tailwind.config.js
│   └── ...
│
└── README.md
```

## Features to Add (Future Improvements)

- **Blog Section**: To share articles and tutorials on web development.
- **Dark Mode**: For better user experience.
- **Analytics**: Track visitors and interactions on the portfolio.

## Contact

If you have any questions or would like to collaborate, feel free to reach out to me:

- **Email**: [Malikwaseemshzad@gmail.com](mailto:Malikwaseemshzad@gmail.com)
- **LinkedIn**: [Waseem Malik](https://www.linkedin.com/in/waseemmalik547/)
- **GitHub**: [Wcoder547](https://github.com/Wcoder547)
