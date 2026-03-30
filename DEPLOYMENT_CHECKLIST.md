# 📋 Vercel Deployment Checklist - Production Ready

Use this checklist to ensure everything is properly configured before deploying to Vercel.

---

## ✅ Pre-Deployment Preparation

### Local Testing

- [ ] Run `npm install` in both backend and frontend directories
- [ ] Backend runs successfully: `npm run start` from backend folder
- [ ] Frontend runs successfully: `npm run dev` from frontend folder
- [ ] No console errors during local testing
- [ ] All lint checks pass: `npm run lint` (frontend)
- [ ] Frontend builds successfully: `npm run build` (frontend)

### Git Repository

- [ ] All changes committed and pushed to GitHub
- [ ] No uncommitted files: `git status` shows clean working tree
- [ ] Repository is public (for easy Vercel integration)
- [ ] Latest version is on the main/master branch

### MongoDB Setup

- [ ] MongoDB Atlas account created
- [ ] Database cluster created (M0 free tier is fine)
- [ ] Database user created with strong password
- [ ] Network access whitelist configured
- [ ] Connection string copied: `mongodb+srv://...`
- [ ] Replaced `<username>` and `<password>` in connection string

### Vercel Account

- [ ] Vercel account created at https://vercel.com
- [ ] GitHub account linked to Vercel
- [ ] Repository imported and visible in Vercel dashboard
- [ ] Organization or personal settings configured

---

## 🚀 Backend Deployment

### Vercel Project Configuration

- [ ] Project name set to: `developerhub-backend`
- [ ] Framework preset set to: `Other`
- [ ] Root directory set to: `backend`
- [ ] Install command: `npm install`
- [ ] Build command: **LEAVE EMPTY**
- [ ] Output directory: **LEAVE EMPTY**
- [ ] Development command: `npm run start`

### Environment Variables (Backend)

- [ ] `MONGO_URI` = Your MongoDB connection string (from MongoDB Atlas)
- [ ] `DB_NAME` = `developerhub`
- [ ] `NODE_ENV` = `production`
- [ ] `CORS_ORIGIN` = `https://your-frontend-vercel-url.vercel.app` (or temp placeholder)
- [ ] All variables set for: Production, Preview, AND Development (all 3)

### Backend Post-Deployment

- [ ] Deployment completed without errors
- [ ] Backend URL note: `https://developerhub-backend.vercel.app` (or your project name)
- [ ] Health check passes: `curl https://your-backend-url/api/health`
- [ ] Coupons seeded: Verify 233606DA and 233544SA exist (check MongoDB or test endpoint)
- [ ] Test coupon validation endpoint works
- [ ] Logs show "Backend initialized" message

---

## 🎨 Frontend Deployment

### Vercel Project Configuration

- [ ] Project name set to: `developerhub-frontend`
- [ ] Framework preset set to: `Vite`
- [ ] Root directory set to: `frontend`
- [ ] Install command: `npm install`
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Development command: `npm run dev`

### Environment Variables (Frontend)

- [ ] `VITE_API_BASE_URL` = Your backend Vercel URL + /api
  - Example: `https://developerhub-backend.vercel.app/api`
- [ ] Variables set for: Production, Preview, AND Development (all 3)

### Frontend Post-Deployment

- [ ] Deployment completed without errors
- [ ] Frontend URL: `https://developerhub-frontend.vercel.app` (or your project name)
- [ ] Frontend loads without errors
- [ ] Network tab shows API calls going to correct backend URL
- [ ] No CORS errors in browser console

---

## 🔄 Backend CORS Update (Important!)

### Update CORS for Deployed Frontend

- [ ] Note down your frontend Vercel URL
- [ ] Go to backend project → Settings → Environment Variables
- [ ] Edit `CORS_ORIGIN` variable
- [ ] Update value to: `https://your-frontend-vercel-url.vercel.app`
- [ ] Click Save
- [ ] Redeploy backend (Deployments tab → Latest → Redeploy)
- [ ] Wait 30-60 seconds for redeploy to complete

---

## 🧪 Production Testing & Verification

### Backend API Tests

```bash
# Test 1: Health Check
curl https://your-backend-url/api/health
Expected: {"status":"ok"}
Status: [ ] PASS [ ] FAIL

# Test 2: Get Products
curl https://your-backend-url/api/products
Expected: Array of products
Status: [ ] PASS [ ] FAIL

# Test 3: Coupon Validation (50% discount)
curl -X POST https://your-backend-url/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"233606DA"}'
Expected: {"valid":true,"discountPercentage":50}
Status: [ ] PASS [ ] FAIL

# Test 4: Coupon Validation (35% discount)
curl -X POST https://your-backend-url/api/coupons/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"233544SA"}'
Expected: {"valid":true,"discountPercentage":35}
Status: [ ] PASS [ ] FAIL
```

### Frontend Functionality Tests

In browser, navigate to your frontend URL and verify:

#### Product Browsing

- [ ] Homepage loads without errors
- [ ] Products display correctly from backend
- [ ] Search functionality works
- [ ] Category filtering works
- [ ] Sorting works (newest, price ascending/descending, name)

#### Product Details

- [ ] Can click on product and see details page
- [ ] Related products display
- [ ] Product images load
- [ ] "Add to Cart" button works

#### Shopping Cart

- [ ] Can add products to cart
- [ ] Cart page displays all items
- [ ] Quantities can be updated
- [ ] Item quantities update correctly
- [ ] Can remove items from cart
- [ ] Cart total calculates correctly
- [ ] Cart persists on page refresh

#### Checkout & Coupons

- [ ] Can proceed to checkout
- [ ] Shipping form displays
- [ ] Can enter coupon code "233606DA"
- [ ] Click "Apply Coupon" button
- [ ] Verify 50% discount applied
- [ ] Verify coupon input field becomes DISABLED/LOCKED
- [ ] Verify "Apply Coupon" button becomes DISABLED/LOCKED
- [ ] Final total shows correct discount
- [ ] Can complete order submission
- [ ] Order confirmation displays

#### Error Handling

- [ ] Invalid coupon code shows error message
- [ ] Cannot apply duplicate coupons
- [ ] API errors display gracefully
- [ ] No console errors or warnings

---

## 🔐 Security Verification

- [ ] No sensitive data in frontend code
- [ ] No API keys hardcoded anywhere
- [ ] HTTPS is being used (should be automatic with Vercel)
- [ ] CORS is restrictive (not allowing all origins)
- [ ] MongoDB requires authentication (not open access)
- [ ] Environment variables are NOT committed to git
- [ ] No console.log() statements exposure sensitive data

---

## 📊 Performance Checks

### Frontend Performance

- [ ] Frontend loads in under 3 seconds
- [ ] Initial page is interactive quickly
- [ ] No major layout shifts (CLS)
- [ ] Images are optimized
- [ ] Bundle size is reasonable (check with `npm run build`)

### Backend Performance

- [ ] API responses are under 1 second
- [ ] Database queries are indexed
- [ ] No N+1 query problems
- [ ] Coupons apply instantly

---

## 📝 Logging & Monitoring

### Vercel Logs

- [ ] Checked backend deployment logs - no errors
- [ ] Checked frontend deployment logs - no errors
- [ ] Watched real-time logs during user testing
- [ ] No warnings about deprecated modules

### Error Tracking (Optional)

- [ ] Set up Sentry or similar error tracking (optional)
- [ ] Browser console shows no JavaScript errors
- [ ] Network tab shows successful API calls (status 200)

---

## 🎉 Final Sign-Off

### Marketing & Sharing

- [ ] Frontend URL is ready for sharing
- [ ] README has been updated if needed
- [ ] GitHub repository is properly documented
- [ ] Deployment instructions are clear

### Team Communication

- [ ] Team informed of live URLs
- [ ] Documentation updated
- [ ] Backup/recovery plan documented
- [ ] Support contacts identified

---

## 📞 Rollback Plan (If Needed)

If something goes wrong in production:

1. Go to Vercel → Your Project → Deployments
2. Find the last working deployment
3. Click "..." → "Promote to Production"
4. Tell team to use previous URL while investigating

---

## ✨ Deployment Complete!

- [ ] Backend is production-ready and live
- [ ] Frontend is production-ready and live
- [ ] All tests pass
- [ ] Documentation is complete
- [ ] Team is notified
- [ ] You deserve a break! 🎉

---

**Deployment Date:** ******\_\_\_******  
**Backend URL:** ******\_\_\_******  
**Frontend URL:** ******\_\_\_******  
**Deployed By:** ******\_\_\_******  
**Notes:** ******\_\_\_******
