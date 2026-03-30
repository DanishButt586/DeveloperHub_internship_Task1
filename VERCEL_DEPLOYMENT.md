# 🚀 Vercel Deployment Guide - Production Level Setup

Complete step-by-step guide for deploying your MERN eCommerce application on Vercel with separate frontend and backend projects.

---

## 📋 Pre-Deployment Checklist

Before you begin, ensure you have:

- [ ] Vercel account created (https://vercel.com)
- [ ] GitHub account with your project repository
- [ ] MongoDB Atlas (or any MongoDB cloud service) active and connection string ready
- [ ] Both backend and frontend directories properly configured
- [ ] Git repository synchronized with all latest changes
- [ ] Node.js >=20 installed locally

---

## 🔧 PART 1: Backend Deployment on Vercel

### Step 1: Create Backend Project on Vercel

1. Navigate to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository from the list
4. Click **"Import"**

### Step 2: Configure Backend Project Settings

On the **Import Project** screen, configure the following:

#### Project Name

```
developerhub-backend
```

#### Framework Preset

```
Select: "Other"
```

#### Root Directory

```
Select: "backend"
```

#### Build and Development Settings

```
Install Command: npm install
Build Command: (Leave Empty)
Output Directory: (Leave Empty)
Development Command: npm run start
```

**Why empty build command?** - The backend is a Node.js Express app, not a compiled application. Vercel will use the serverless function at `api/index.js` directly.

### Step 3: Set Backend Environment Variables

After clicking **Deploy**, you'll see the environment variables screen. Add the following variables for all three environments (Production, Preview, Development):

#### Required Environment Variables

**MONGO_URI** (From MongoDB Atlas)

```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/developerhub?retryWrites=true&w=majority
```

**DB_NAME**

```
developerhub
```

**NODE_ENV**

```
production
```

**CORS_ORIGIN** (Update after frontend deployment)

```
https://your-frontend-project.vercel.app
```

#### Optional Environment Variables

**MONGO_URI_FALLBACK** (Keep commented initially)

```
# Leave empty unless you need a fallback connection string
```

### Step 3.1: Get MongoDB Connection String

If you don't have a MongoDB URI:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Add database user with username and password
4. Click **"Connect"** → **"Drivers"**
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `/test` with `/developerhub`

**Example MongoDB URI:**

```
mongodb+srv://admin:MyPassword123@cluster0.opqrst.mongodb.net/developerhub?retryWrites=true&w=majority
```

### Step 4: Deploy Backend

Click the **"Deploy"** button and wait for the deployment to complete (typically 2-3 minutes).

Once successful, you'll get a URL like:

```
https://developerhub-backend.vercel.app
```

**Save this URL** - you'll need it for frontend deployment.

### Step 5: Verify Backend Deployment

Test your backend with curl or Postman:

```bash
# Test health endpoint
curl https://developerhub-backend.vercel.app/api/health

# Expected response:
# {"status":"ok"}
```

**Verify coupons were auto-seeded:**

```bash
curl -X POST https://developerhub-backend.vercel.app/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"233606DA"}'

# Expected response:
# {"valid":true,"discountPercentage":50}
```

---

## 🎨 PART 2: Frontend Deployment on Vercel

### Step 1: Create Frontend Project on Vercel

1. Navigate to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository again
4. Click **"Import"**

### Step 2: Configure Frontend Project Settings

On the **Import Project** screen, configure the following:

#### Project Name

```
developerhub-frontend
```

#### Framework Preset

```
Select: "Vite"
```

#### Root Directory

```
Select: "frontend"
```

#### Build and Development Settings

```
Install Command: npm install
Build Command: npm run build
Output Directory: dist
Development Command: npm run dev
```

**Why these settings?**

- Vite is selected for automatic React optimization
- `npm run build` compiles React + Vite code to production bundle
- `dist` folder contains the optimized production build
- Vercel automatically configures SPA routing with `frontend/vercel.json`

### Step 3: Set Frontend Environment Variables

After configuring the above, add the following variables for all three environments (Production, Preview, Development):

#### Required Environment Variables

**VITE_API_BASE_URL** (Use your backend URL from Part 1)

```
https://developerhub-backend.vercel.app/api
```

Replace `developerhub-backend` with your actual backend project name.

### Step 4: Deploy Frontend

Click the **"Deploy"** button and wait for the deployment to complete (typically 3-5 minutes).

Once successful, you'll get a URL like:

```
https://developerhub-frontend.vercel.app
```

### Step 5: Update Backend CORS Settings

Now that your frontend is deployed, update the backend's CORS_ORIGIN:

1. Go to your backend project on Vercel
2. Click **Settings** → **Environment Variables**
3. Edit the `CORS_ORIGIN` variable
4. Change the value to your frontend URL:
   ```
   https://developerhub-frontend.vercel.app
   ```
5. Redeploy the backend to apply changes

**To redeploy backend:**

- Push a small change to the backend code on GitHub, OR
- Go to Deployments, click **"..." on the latest deployment**, select **"Redeploy"**

---

## 🧪 PART 3: Production Verification & Testing

### Backend Verification

Test all critical endpoints:

```bash
# 1. Health Check
curl https://developerhub-backend.vercel.app/api/health
# Expected: {"status":"ok"}

# 2. Get All Products
curl https://developerhub-backend.vercel.app/api/products
# Expected: Array of products with all fields

# 3. Validate Coupon (50% discount)
curl -X POST https://developerhub-backend.vercel.app/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"233606DA"}'
# Expected: {"valid":true,"discountPercentage":50}

# 4. Validate Coupon (35% discount)
curl -X POST https://developerhub-backend.vercel.app/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"233544SA"}'
# Expected: {"valid":true,"discountPercentage":35}

# 5. Validate Invalid Coupon
curl -X POST https://developerhub-backend.vercel.app/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"INVALID123"}'
# Expected: {"valid":false}
```

### Frontend Verification

1. Open `https://developerhub-frontend.vercel.app` in your browser
2. Verify the following:
   - [ ] Homepage loads with product catalog
   - [ ] Search functionality works
   - [ ] Category filtering works
   - [ ] Sorting works (newest, price, name)
   - [ ] Click on a product and see details
   - [ ] Add product to cart
   - [ ] Cart page shows all items with correct quantities
   - [ ] Can update quantities in cart
   - [ ] Can remove items from cart
   - [ ] Proceed to checkout
   - [ ] Enter coupon code `233606DA` and click "Apply Coupon"
   - [ ] Verify 50% discount is applied
   - [ ] Verify coupon input field is locked (disabled)
   - [ ] Verify "Apply Coupon" button is locked (disabled)
   - [ ] Complete checkout with shipping details
   - [ ] Order is created successfully

---

## 📊 Production Configuration Summary

### Backend Configuration (Vercel)

| Setting          | Value                |
| ---------------- | -------------------- |
| Project Name     | developerhub-backend |
| Framework        | Other                |
| Root Directory   | backend              |
| Install Command  | npm install          |
| Build Command    | (empty)              |
| Output Directory | (empty)              |
| Node Version     | 20.x (auto-detected) |

### Frontend Configuration (Vercel)

| Setting          | Value                 |
| ---------------- | --------------------- |
| Project Name     | developerhub-frontend |
| Framework        | Vite                  |
| Root Directory   | frontend              |
| Install Command  | npm install           |
| Build Command    | npm run build         |
| Output Directory | dist                  |
| Node Version     | 20.x (auto-detected)  |

---

## 🌍 Environment Variables Reference

### Backend Environment Variables

```
# Database Configuration
MONGO_URI=mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/developerhub?retryWrites=true&w=majority
DB_NAME=developerhub

# Production Settings
NODE_ENV=production

# CORS Configuration (Update with your frontend URL)
CORS_ORIGIN=https://developerhub-frontend.vercel.app

# Optional Fallback (Leave commented)
# MONGO_URI_FALLBACK=mongodb://backup-connection-string
```

### Frontend Environment Variables

```
# Backend API Configuration
VITE_API_BASE_URL=https://developerhub-backend.vercel.app/api
```

---

## 🔐 Security Best Practices

### ✅ What We've Done

- ✅ CORS is properly configured and restrictive
- ✅ MongoDB requires authentication
- ✅ NODE_ENV is set to production
- ✅ API rate limiting ready (can be added)
- ✅ No sensitive data in frontend
- ✅ No console.logs showing sensitive data
- ✅ HTTPS enforced by Vercel

### ✅ Before Going Live

- [ ] Test with real payment gateway (if applicable)
- [ ] Set up error monitoring (Vercel built-in or Sentry)
- [ ] Enable Vercel Analytics
- [ ] Configure custom domain (optional)
- [ ] Set up automated backups for MongoDB
- [ ] Monitor Vercel deployment logs for errors

---

## 🐛 Troubleshooting

### Issue: "Cannot reach backend from frontend"

**Solution:**

- [ ] Verify your `VITE_API_BASE_URL` in frontend environment variables
- [ ] Check backend `CORS_ORIGIN` matches frontend URL exactly
- [ ] Ensure backend is deployed and healthy (check health endpoint)
- [ ] Clear browser cache and hard refresh

### Issue: "Coupon validation returns CORS error"

**Solution:**

- [ ] Go to backend project settings → Environment Variables
- [ ] Update `CORS_ORIGIN` with your frontend URL
- [ ] Redeploy backend
- [ ] Wait 30 seconds before testing

### Issue: "Products not loading from backend"

**Solution:**

- [ ] Verify MongoDB connection string is correct
- [ ] Check MongoDB Atlas has network access allowed
- [ ] Verify `DB_NAME` environment variable is set to `developerhub`
- [ ] Check backend logs in Vercel dashboard for connection errors

### Issue: "Build fails with 'npm run build' error"

**Solution:**

- [ ] Check frontend dependencies: `npm install`
- [ ] Verify no TypeScript errors: `npm run lint`
- [ ] Clear `node_modules` and `dist` folder locally and rebuild

---

## 📞 Need Help?

- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Documentation: https://docs.mongodb.com
- React + Vite: https://vitejs.dev/guide
- Express.js: https://expressjs.com

---

## ✨ Deployment Complete!

Your production-ready MERN eCommerce application is now live on Vercel with:

- ✅ Scalable serverless backend
- ✅ Optimized frontend SPA
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN distribution
- ✅ Automatic deployments on Git push
- ✅ Production-grade environment management
