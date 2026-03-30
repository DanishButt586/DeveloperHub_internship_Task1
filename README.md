# DeveloperHub Internship Task 1

Production-ready MERN eCommerce web application with dynamic product browsing, product detail pages, cart + checkout, order creation, coupon validation, and separate frontend/backend deployment on Vercel.

## Project Highlights

- Dynamic product catalog from MongoDB
- Search, category filtering, sort, grid/list views
- Product details with related products
- Cart management with quantity updates
- Checkout flow with shipping details
- Order creation and order listing API
- Server-driven coupon validation
- Locked coupon input/apply state after successful coupon apply
- Responsive UI with reusable components
- Separate frontend and backend deployment setup for Vercel

## Tech Stack

### Frontend

- React 19
- Vite 8
- React Router DOM 7
- Axios
- Tailwind CSS

### Backend

- Node.js (>=20)
- Express 5
- MongoDB + Mongoose
- CORS + dotenv

## Repository Structure

```text
Task 1/
├─ backend/
│  ├─ api/index.js                # Vercel serverless entrypoint
│  ├─ src/
│  │  ├─ app.js                   # Express app setup
│  │  ├─ server.js                # Local runtime server
│  │  ├─ config/db.js             # MongoDB connection logic
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  ├─ utils/ensureDefaultCoupons.js
│  │  └─ seeder.js
│  └─ vercel.json
├─ frontend/
│  ├─ src/
│  ├─ .env.example
│  └─ vercel.json
├─ VERCEL_DEPLOYMENT.md
└─ README.md
```

## Local Setup

## 1) Backend

```bash
cd backend
npm install
```

Create `backend/.env` from `backend/.env.example` and set values.

Run backend:

```bash
npm run start
```

Optional seed data:

```bash
npm run seed
```

## 2) Frontend

```bash
cd frontend
npm install
```

Create `frontend/.env` from `frontend/.env.example` and set values.

Run frontend:

```bash
npm run dev
```

## Environment Variables

## Backend (`backend/.env`)

- `MONGO_URI` (required)
- `DB_NAME` (recommended: `developerhub`)
- `NODE_ENV` (recommended: `production` in deploy)
- `CORS_ORIGIN` (required in production, frontend URL)
- `MONGO_URI_FALLBACK` (optional)
- `PORT` (local only, default 5000)

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
DB_NAME=developerhub
NODE_ENV=production
CORS_ORIGIN=https://your-frontend.vercel.app
# MONGO_URI_FALLBACK=mongodb://...
```

## Frontend (`frontend/.env`)

- `VITE_API_BASE_URL` (required)

Example:

```env
VITE_API_BASE_URL=https://your-backend.vercel.app/api
```

## API Endpoints

Base URL: `/api`

- `GET /health` -> health check
- `GET /products` -> list products
- `GET /products/:id` -> product details
- `GET /orders` -> list latest orders
- `POST /orders` -> create order
- `POST /coupons/validate` -> validate coupon code

### Product Query Params

- `keyword`
- `category`
- `sort` (`newest`, `price_asc`, `price_desc`, `name_asc`)

Example:

```http
GET /api/products?category=electronics&sort=price_desc
```

## Coupon Rules

The backend ensures these coupons exist in MongoDB automatically:

- `233606DA` -> 50% discount
- `233544SA` -> 35% discount

Checkout behavior:

- On successful coupon apply, coupon input becomes locked
- Apply button becomes locked
- Discount is reflected in totals

## Vercel Deployment (Separate Projects)

## Backend Project (Root Directory: `backend`)

- Framework Preset: `Other`
- Install Command: `npm install`
- Build Command: leave empty
- Output Directory: leave empty
- Development Command: `npm run start`

Required env vars:

- `MONGO_URI`
- `DB_NAME`
- `NODE_ENV=production`
- `CORS_ORIGIN=https://your-frontend.vercel.app`
- Optional: `MONGO_URI_FALLBACK`

## Frontend Project (Root Directory: `frontend`)

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Development Command: `npm run dev`

Required env var:

- `VITE_API_BASE_URL=https://your-backend.vercel.app/api`

## Deployment Order

1. Deploy backend first.
2. Copy backend URL.
3. Set frontend `VITE_API_BASE_URL`.
4. Deploy frontend.

## Verification Checklist

- Backend `/api/health` responds with `{"status":"ok"}`
- Coupon validation API works for both hardcoded coupons
- Frontend loads products from backend
- Cart and checkout flow works end-to-end
- Coupon lock behavior works after successful apply
- Order creation succeeds

## Scripts

### Backend

- `npm run start` -> start server
- `npm run dev` -> start with nodemon
- `npm run seed` -> seed products + ensure coupons
- `npm run seed:destroy` -> destroy product data

### Frontend

- `npm run dev` -> start dev server
- `npm run lint` -> run ESLint
- `npm run build` -> production build
- `npm run preview` -> preview production build

---

If you want, I can also add a GitHub Actions workflow for automated lint/build checks on every push.
