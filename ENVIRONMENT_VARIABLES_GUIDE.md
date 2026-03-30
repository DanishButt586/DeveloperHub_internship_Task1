# 🔧 Complete Environment Variables Guide

Copy-paste ready environment variable templates for both frontend and backend deployment on Vercel.

---

## 📌 Important Notes Before You Start

1. **Never commit `.env` files to Git** - Only `.env.example` should be in the repository
2. **Keep your MongoDB password secret** - Don't share it with anyone
3. **Update CORS_ORIGIN** - Must match your frontend URL exactly
4. **Use HTTPS URLs** - Always use HTTPS for production
5. **Test locally first** - Verify everything works before deploying to Vercel

---

## 🔐 Step 1: Get Your MongoDB Connection String

### If you don't have MongoDB yet:

1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free M0 cluster
4. Go to Security → Database Access
5. Click "Add New Database User"
6. Enter username and password (save these!)
7. Click "Add User"
8. Go to Network Access
9. Click "Add IP Address" → enter `0.0.0.0/0` for development (more restricted for production)
10. Go to "Drivers" and copy the connection string

### Your MongoDB Connection String Template:

```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/developerhub?retryWrites=true&w=majority
```

**Example (don't use this!):**
```
mongodb+srv://admin:MySecurePassword123@cluster0.d1a2b3c.mongodb.net/developerhub?retryWrites=true&w=majority
```

**How to get your full connection string:**
1. MongoDB Atlas Dashboard
2. Click "Connect" on your cluster
3. Choose "Connect your Application"
4. Copy the provided connection string
5. Replace `<password>` with your actual password
6. Change `/test` to `/developerhub`

---

## 🚀 Step 2: Backend Environment Variables for Vercel

### Where to add these in Vercel:
1. Go to your backend project
2. Click Settings → Environment Variables
3. Add each variable below for all 3 environments (Production, Preview, Development)

### Backend Variables - Copy Paste Below:

#### Variable 1: MONGO_URI
```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/developerhub?retryWrites=true&w=majority
```

**Example:**
```
mongodb+srv://developerhub_user:SecurePass2024@cluster0.a1b2c3d.mongodb.net/developerhub?retryWrites=true&w=majority
```

---

#### Variable 2: DB_NAME
```
developerhub
```

---

#### Variable 3: NODE_ENV
```
production
```

---

#### Variable 4: CORS_ORIGIN
**Add this AFTER frontend is deployed:**

```
https://your-frontend-project.vercel.app
```

**Example:**
```
https://developerhub-frontend.vercel.app
```

**How to find your frontend URL:**
1. Go to Vercel Dashboard
2. Open frontend project
3. Copy the URL shown at the top

---

### Backend Variables Summary Table

| Variable | Value | Environment | Example |
|----------|-------|-------------|---------|
| MONGO_URI | Your MongoDB connection string | All (Prod, Preview, Dev) | `mongodb+srv://user:pass@cluster.mongodb.net/developerhub?...` |
| DB_NAME | developerhub | All (Prod, Preview, Dev) | `developerhub` |
| NODE_ENV | production | All (Prod, Preview, Dev) | `production` |
| CORS_ORIGIN | Your frontend Vercel URL | All (Prod, Preview, Dev) | `https://developerhub-frontend.vercel.app` |

---

## 🎨 Step 3: Frontend Environment Variables for Vercel

### Where to add these in Vercel:
1. Go to your frontend project
2. Click Settings → Environment Variables
3. Add the variable below for all 3 environments (Production, Preview, Development)

### Frontend Variables - Copy Paste Below:

#### Variable 1: VITE_API_BASE_URL

**Add this AFTER backend is deployed:**

```
https://your-backend-project.vercel.app/api
```

**Example:**
```
https://developerhub-backend.vercel.app/api
```

**How to find your backend URL:**
1. Go to Vercel Dashboard
2. Open backend project
3. Copy the URL shown at the top
4. Add `/api` at the end

---

### Frontend Variables Summary Table

| Variable | Value | Environment | Example |
|----------|-------|-------------|---------|
| VITE_API_BASE_URL | Backend Vercel URL + /api | All (Prod, Preview, Dev) | `https://developerhub-backend.vercel.app/api` |

---

## 🔄 Local Development Environment Variables

### If you're running locally first:

Create `.env` file in the backend directory:

```
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/developerhub?retryWrites=true&w=majority
DB_NAME=developerhub
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

Create `.env` file in the frontend directory:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ Wrong: `CORS_ORIGIN=https://developerhub-frontend.vercel.app/`
- **Issue:** Extra slash at the end
- ✅ **Correct:** `CORS_ORIGIN=https://developerhub-frontend.vercel.app`

### ❌ Wrong: `VITE_API_BASE_URL=https://developerhub-backend.vercel.app`
- **Issue:** Missing `/api` at the end
- ✅ **Correct:** `VITE_API_BASE_URL=https://developerhub-backend.vercel.app/api`

### ❌ Wrong: `mongodb+srv://admin:pass@cluster.mongodb.net/test`
- **Issue:** Database name is `/test` instead of `/developerhub`
- ✅ **Correct:** `mongodb+srv://admin:pass@cluster.mongodb.net/developerhub`

### ❌ Wrong: `NODE_ENV=dev`
- **Issue:** Should be exactly `production` or `development`
- ✅ **Correct:** `NODE_ENV=production`

### ❌ Wrong: Using credentials in CORS_ORIGIN
- **Issue:** `CORS_ORIGIN=admin:password@...` shows secrets
- ✅ **Correct:** Only the URL, like `CORS_ORIGIN=https://developerhub-frontend.vercel.app`

---

## 🧪 Quick Test: Are Your Variables Correct?

### Backend Health Check
After deploying backend with variables:

```bash
curl https://your-backend-url/api/health

# Should return: {"status":"ok"}
```

### Frontend Should Start
After deploying frontend with variables:

```bash
# Just open in browser:
https://your-frontend-url

# It should load and you should see products
```

---

## 📋 Deployment Order

### ⚠️ IMPORTANT: Deploy in this order!

1. **Deploy Backend FIRST** (without CORS_ORIGIN or with placeholder)
2. **Deploy Frontend SECOND** (with backend URL)
3. **Update Backend CORS_ORIGIN** (with frontend URL)
4. **Redeploy Backend** (to apply CORS changes)

---

## 🆘 Quick Reference: Copy-Paste Templates

### Complete Backend Variables Set (Copy All):

```
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/developerhub?retryWrites=true&w=majority

DB_NAME=developerhub

NODE_ENV=production

CORS_ORIGIN=https://your-frontend-project.vercel.app
```

---

### Complete Frontend Variables Set (Copy All):

```
VITE_API_BASE_URL=https://your-backend-project.vercel.app/api
```

---

## ✅ Verification Checklist

- [ ] MongoDB connection string uses `mongodb+srv://` (not `mongodb://`)
- [ ] MongoDB connection string ends with `?retryWrites=true&w=majority`
- [ ] MongoDB database name is `/developerhub` (not `/test`)
- [ ] CORS_ORIGIN is your frontend URL without trailing slash
- [ ] VITE_API_BASE_URL ends with `/api`
- [ ] All variables are set for Production, Preview, AND Development (3 environments total)
- [ ] Backend is deployed and running before updating CORS
- [ ] Frontend URL is confirmed working before using in CORS_ORIGIN

---

## 💡 If You Need Help

### MongoDB Issues?
- Visit: https://www.mongodb.com/cloud/atlas
- Check: Network access whitelist includes your IP
- Check: Database user has correct password entered

### Vercel Deployment Issues?
- Check: All variables are set for all environments
- Check: No extra spaces in variable values
- Check: URLs are correct (copy-paste from Vercel dashboard)

### CORS Errors in Console?
- Check: Backend CORS_ORIGIN matches frontend URL exactly
- Check: Backend has been redeployed after changing CORS
- Check: Frontend VITE_API_BASE_URL ends with `/api`

---

## 🎉 You're All Set!

Your environment variables are now production-ready for Vercel deployment!
