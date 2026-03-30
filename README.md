# 🛍️ DeveloperHub Internship Task 1 - MERN eCommerce Platform

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-≥20-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Latest-38B2AC?style=flat&logo=tailwind-css)
![Express.js](https://img.shields.io/badge/Express.js-5-000000?style=flat&logo=express)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)

**A modern, production-ready full-stack eCommerce platform showcasing best practices in MERN development**

[Live Demo](#) • [Documentation](#) • [Contributing](#contributing)

</div>

---

## 📖 About The Project

This is a **comprehensive full-stack eCommerce web application** built with the MERN stack (MongoDB, Express.js, React, Node.js). Developed as part of the DeveloperHub Internship program, this project demonstrates enterprise-level development practices, modern web application architecture, and real-world e-commerce functionality.

The application provides a complete, production-ready shopping experience from browsing dynamic product catalogs to managing a shopping cart, applying discounts, and completing a secure checkout process.

### Why This Project?

This project showcases:

- ✅ Full-stack development expertise
- ✅ RESTful API design patterns
- ✅ Modern React 19 best practices
- ✅ Database design and optimization
- ✅ Responsive & accessible UI/UX
- ✅ Production-level code quality

---

## ✨ Key Features

### 🏪 Product Management

- **Dynamic Product Catalog** - Browse a rich collection of products fetched from MongoDB in real-time
- **Advanced Search & Filtering** - Find products by keyword, category, and apply intelligent sorting (newest, price ascending/descending, name)
- **Detailed Product Pages** - Comprehensive product information with image galleries and related product recommendations

### 🛒 Shopping Experience

- **Intuitive Cart Management** - Add, remove, and modify item quantities with instant total calculations
- **Persistent Cart** - Cart data is maintained across browser sessions for better user experience
- **Real-time Price Updates** - Automatic recalculation of totals with tax and discount considerations

### 💰 Checkout & Payments

- **Complete Checkout Flow** - Multi-step process collecting shipping and billing information
- **Intelligent Order Processing** - Seamless order creation and management
- **Smart Coupon System** - Server-driven validation with automatic field locking after successful application
- **Discount Tracking** - Clear visibility of applied discounts and final pricing

### 🎨 User Interface

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI Components** - Built with Tailwind CSS for a clean, contemporary aesthetic
- **Accessibility First** - WCAG compliant interface ensuring usability for all users
- **Smooth Interactions** - Polished animations and transitions for professional feel

### 🚀 Technical Excellence

- **Serverless Architecture Ready** - Optimized for modern cloud platforms like Vercel
- **Separation of Concerns** - Clean frontend/backend architecture for scalability
- **Production-Grade CORS** - Secure cross-origin resource sharing configuration
- **Environment Safety** - Secure handling of sensitive configuration data

---

## 🛠️ Tech Stack

### Frontend Stack

| Technology             | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| **React 19**           | UI library with latest features and hooks |
| **Vite 8**             | Lightning-fast build tool and dev server  |
| **React Router DOM 7** | Client-side routing and navigation        |
| **Tailwind CSS**       | Utility-first CSS framework for styling   |
| **Axios**              | HTTP client for API communication         |

### Backend Stack

| Technology        | Purpose                                |
| ----------------- | -------------------------------------- |
| **Node.js (≥20)** | JavaScript runtime environment         |
| **Express.js 5**  | Minimalist web application framework   |
| **MongoDB**       | NoSQL database for data persistence    |
| **Mongoose**      | Object Data Modeling (ODM) for MongoDB |
| **CORS + dotenv** | Security and configuration management  |

---

## 📁 Project Structure

```
📦 Task 1
├── 📂 frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page-level components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   ├── styles/             # Tailwind configurations
│   │   └── App.jsx             # Root component
│   ├── public/                 # Static assets
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
│
├── 📂 backend/                  # Express backend server
│   ├── src/
│   │   ├── models/             # Mongoose schemas
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/             # API endpoints
│   │   ├── config/             # Configuration files
│   │   ├── utils/              # Helper functions
│   │   ├── app.js              # Express app setup
│   │   └── server.js           # Local development server
│   ├── api/
│   │   └── index.js            # Vercel serverless entry
│   ├── package.json            # Backend dependencies
│   └── vercel.json             # Vercel deployment config
│
└── 📄 README.md                # Project documentation

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js version 20 or higher
- npm or yarn package manager
- MongoDB database (local or cloud)

### Installation

#### 1️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env
# Edit .env with your MongoDB connection details
```

#### 2️⃣ Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env
# Edit .env with your API base URL
```

### Running Locally

#### Starting the Backend Server

```bash
cd backend
npm run start          # Production mode
# or
npm run dev            # Development mode with hot reload
```

Backend will be available at: `http://localhost:5000`

#### Starting the Frontend Application

```bash
cd frontend
npm run dev
```

Frontend will be available at: `http://localhost:5173`

#### Optional: Seed Sample Data

```bash
cd backend
npm run seed           # Populate database with sample products
```

---

## 📊 API Overview

### Base URL

```
http://localhost:5000/api
```

### Core Endpoints

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| `GET`  | `/health`           | Server health check             |
| `GET`  | `/products`         | Fetch all products with filters |
| `GET`  | `/products/:id`     | Get single product details      |
| `GET`  | `/orders`           | Retrieve all orders             |
| `POST` | `/orders`           | Create new order                |
| `POST` | `/coupons/validate` | Validate and apply coupon code  |

### Query Parameters (Products)

- `keyword` - Search products by name or description
- `category` - Filter by category
- `sort` - Sort results (newest, price_asc, price_desc, name_asc)

---

## 💳 Coupon System

The application includes a server-driven coupon validation system for applying discounts:

### Available Coupons

| Coupon Code | Discount | Status |
| ----------- | -------- | ------ |
| `233606DA`  | 50% off  | Active |
| `233544SA`  | 35% off  | Active |

### Coupon Features

- ✅ Server-side validation
- ✅ Automatic field locking after successful application
- ✅ Real-time discount calculation
- ✅ Secure redemption process
- ✅ Cannot apply multiple coupons

### How to Use

1. Navigate to checkout page
2. Enter coupon code in the discount field
3. Click "Apply Coupon" button
4. View updated total with discount applied
5. Fields automatically lock to prevent duplicate applications

---

## 📦 Available Scripts

### Backend

```bash
npm run start           # Run in production mode
npm run dev            # Run in development mode
npm run seed           # Seed database with sample data
npm run seed:destroy   # Clear database
```

### Frontend

```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run lint           # Check code quality
npm run preview        # Preview production build locally
```

---

## 🌐 Deployment

This project is optimized for production-grade cloud deployments on Vercel with separate frontend and backend projects.

### 🚀 Production Deployment

The complete deployment documentation is organized into separate guides for your convenience:

#### 📘 [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) - **START HERE**
Comprehensive step-by-step guide covering:
- ✅ Backend deployment on Vercel
- ✅ Frontend deployment on Vercel  
- ✅ Environment variables configuration
- ✅ CORS setup between frontend and backend
- ✅ Production verification tests
- ✅ Troubleshooting common issues

#### 🔧 [ENVIRONMENT_VARIABLES_GUIDE.md](./ENVIRONMENT_VARIABLES_GUIDE.md)
Exact environment variables with:
- ✅ Copy-paste ready templates
- ✅ MongoDB setup instructions
- ✅ Variable explanations
- ✅ Common mistakes to avoid
- ✅ Local development setup

#### 📋 [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
Production readiness checklist with:
- ✅ Pre-deployment preparation
- ✅ Configuration verification
- ✅ Testing procedures
- ✅ Security verification
- ✅ Performance checks

### Quick Deployment Overview

| Aspect | Details |
|--------|---------|
| **Frontend** | Vite React SPA on Vercel |
| **Backend** | Node.js Express serverless on Vercel |
| **Database** | MongoDB Atlas (cloud) |
| **Hosting** | Separate Vercel projects |
| **HTTPS** | Automatic with Vercel |
| **CI/CD** | Automatic on Git push |

### Deployment Features

- ✅ Frontend deployment ready (Vite SPA with auto-routing)
- ✅ Backend serverless API support (Vercel Functions)
- ✅ Separate project deployment capability
- ✅ Environment variable configuration (Production/Preview/Development)
- ✅ Automated CI/CD on repository push
- ✅ Production-grade CORS configuration
- ✅ Global CDN distribution
- ✅ Automatic SSL/HTTPS
- ✅ Serverless scaling

### Deployment Order

1. **Deploy Backend First** → Get backend URL
2. **Deploy Frontend** → Connect to backend
3. **Update Backend CORS** → Add frontend URL
4. **Redeploy Backend** → Apply CORS changes

---

## 📋 Verification Checklist

Before deploying to production, verify:

- [ ] Backend health endpoint responds with `status: ok`
- [ ] Product listing endpoint returns data correctly
- [ ] Coupon validation works for all hardcoded codes
- [ ] Frontend loads products from backend successfully
- [ ] Cart functionality operates smoothly end-to-end
- [ ] Checkout flow completes without errors
- [ ] Coupon field locking activates after successful apply
- [ ] Order creation processing succeeds
- [ ] UI is responsive on mobile devices

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Follow existing code style and conventions
- Write meaningful commit messages
- Ensure all tests pass before submitting PR
- Update documentation as needed

---

## 📝 License

This project is open source and available under the MIT License. See the LICENSE file for more details.

---

## 👨‍💼 Author

**DeveloperHub Internship Program**

This project was created as part of the professional internship program to demonstrate full-stack web development expertise.

---

## 🙏 Acknowledgments

- DeveloperHub for the internship opportunity
- React and Node.js communities for excellent tools
- MongoDB for reliable database services
- Tailwind CSS for beautiful styling framework

---

## 📞 Support & Questions

For questions or support:

- 📧 Open an issue in the repository
- 💬 Check existing documentation
- 🔍 Review code comments for implementation details

---

<div align="center">

### ⭐ If you find this project helpful, please star the repository!

**Made with ❤️ by the DeveloperHub Internship Program**

</div>
