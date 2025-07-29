# Vercel Deployment Guide

This guide will walk you through deploying your POS Dashboard with AskYourDatabase chatbot to Vercel.

## Prerequisites

1. **GitHub Account**: You'll need a GitHub account to host your code
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **AskYourDatabase Account**: Get your API key and chatbot ID

## Step 1: Prepare Your Repository

### Option A: Use This Repository (Recommended)
1. **Fork this repository** to your GitHub account
2. **Clone your forked repository** locally
3. **Update environment variables** with your actual AskYourDatabase credentials

### Option B: Create New Repository
1. **Create a new GitHub repository**
2. **Push this code** to your new repository
3. **Update environment variables** with your actual AskYourDatabase credentials

## Step 2: Get Your AskYourDatabase Credentials

### 1. Create AskYourDatabase Account
- Visit [AskYourDatabase](https://www.askyourdatabase.com)
- Sign up for an account
- Complete the onboarding process

### 2. Get Your API Key
- Go to your AskYourDatabase dashboard
- Navigate to **API Keys** section
- Create a new API key
- Copy the API key (starts with `ayd_live_`)

### 3. Create a Chatbot
- In your AskYourDatabase dashboard, create a new chatbot
- Configure it for your POS database
- Note the chatbot ID from the URL (e.g., `.../chatbot/5da7b8cf3a372f5e6e6b64af9ae189c7`)

### 4. Update Environment Variables
Replace the temporary values in `.env.local` with your actual credentials:

```env
AYD_API_KEY=your_actual_api_key_here
CHATBOT_ID=your_actual_chatbot_id_here
NEXT_PUBLIC_CHATBOT_ID=your_actual_chatbot_id_here
```

## Step 3: Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click **"New Project"**
   - Select **"Import Git Repository"**
   - Choose your GitHub repository
   - Click **"Import"**

3. **Configure Project Settings**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `.next` (should auto-detect)

4. **Add Environment Variables**
   - In the **Environment Variables** section, add:
     ```
     AYD_API_KEY=your_actual_api_key_here
     CHATBOT_ID=your_actual_chatbot_id_here
     NEXT_PUBLIC_CHATBOT_ID=your_actual_chatbot_id_here
     ```
   - Make sure to add them to **Production**, **Preview**, and **Development** environments

5. **Deploy**
   - Click **"Deploy"**
   - Wait for the build to complete (usually 2-3 minutes)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set up environment variables
   - Deploy

## Step 4: Configure Custom Domain (Optional)

1. **Go to your project settings** in Vercel dashboard
2. **Navigate to "Domains"** section
3. **Add your custom domain**
4. **Configure DNS** as instructed by Vercel

## Step 5: Test Your Deployment

1. **Visit your deployed URL** (e.g., `https://your-project.vercel.app`)
2. **Test the chatbot** by clicking the floating action button
3. **Verify all features** are working correctly

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation

2. **Environment Variables Not Working**
   - Double-check variable names (case-sensitive)
   - Ensure variables are added to all environments
   - Redeploy after adding variables

3. **Chatbot Not Loading**
   - Verify your API key is correct
   - Check your chatbot ID
   - Ensure your AskYourDatabase account is active

4. **CORS Issues**
   - The application should work without CORS issues
   - If problems occur, check your AskYourDatabase configuration

### Getting Help

- **Vercel Issues**: Check [Vercel Documentation](https://vercel.com/docs)
- **AskYourDatabase Issues**: Visit [AskYourDatabase Support](https://www.askyourdatabase.com/docs)
- **Application Issues**: Check the README.md file

## Post-Deployment

### Monitoring
- **Vercel Analytics**: Monitor performance and usage
- **AskYourDatabase Dashboard**: Track chatbot usage and performance

### Updates
- **Automatic Deployments**: Vercel will automatically deploy when you push to your main branch
- **Manual Deployments**: Use Vercel dashboard or CLI for manual deployments

### Scaling
- **Vercel Pro**: Upgrade for more features and higher limits
- **AskYourDatabase**: Upgrade your plan for more chatbot features

## Security Notes

- **Never commit API keys** to your repository
- **Use environment variables** for all sensitive data
- **Regularly rotate** your API keys
- **Monitor usage** for any suspicious activity

## Cost Considerations

- **Vercel**: Free tier includes generous limits
- **AskYourDatabase**: Check their pricing for chatbot usage
- **Custom Domain**: May have additional costs

Your POS dashboard should now be live and accessible via your Vercel URL! 