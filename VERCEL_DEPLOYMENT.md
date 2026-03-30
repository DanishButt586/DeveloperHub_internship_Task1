# Vercel Deployment Guide (Frontend + Backend Separate)

## 1) Backend Deployment (Project root: backend)

### Vercel Project Setup Options

- Framework Preset: Other
- Root Directory: backend
- Build Command: leave empty
- Install Command: npm install
- Output Directory: leave empty
- Development Command: npm run start

### Required Backend Environment Variables

Set these in Vercel for Production, Preview, and Development:

- MONGO_URI=your_mongodb_connection_string
- DB_NAME=developerhub
- NODE_ENV=production
- CORS_ORIGIN=https://your-frontend.vercel.app

Optional:

- MONGO_URI_FALLBACK=your_optional_non_srv_mongodb_uri

### Notes

- Backend serverless entrypoint is api/index.js.
- Required coupons are auto-upserted at startup:
  - 233606DA => 50%
  - 233544SA => 35%

## 2) Frontend Deployment (Project root: frontend)

### Vercel Project Setup Options

- Framework Preset: Vite
- Root Directory: frontend
- Build Command: npm run build
- Install Command: npm install
- Output Directory: dist
- Development Command: npm run dev

### Required Frontend Environment Variables

Set this in Vercel for Production, Preview, and Development:

- VITE_API_BASE_URL=https://your-backend.vercel.app/api

### Notes

- Frontend SPA rewrites are configured in frontend/vercel.json.

## 3) Post-Deployment Verification

Backend checks:

- GET /api/health returns status ok
- POST /api/coupons/validate with 233606DA returns discountPercentage 50
- POST /api/coupons/validate with 233544SA returns discountPercentage 35

Frontend checks:

- Cart coupon input locks after successful coupon apply
- Apply button locks after successful coupon apply
- Checkout totals update with coupon discount
