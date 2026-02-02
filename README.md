# 🏡 Haven Homes Elevated

A modern real-estate web app (landing page / UI) built with **TypeScript**, **Vite**, **Tailwind CSS**, and **Supabase** for backend / auth / database.

💡 Hosted live: https://haven-homes-elevated.vercel.app/ — check it out!

---

## 🚀 Features

✔ Built with Vite + TypeScript  
✔ Tailwind CSS for utility-first styling  
✔ Supabase for backend (auth + database)  
✔ Clean component structure  
✔ Ready for deployment

---

## 📦 Getting Started

### 1. Importing the files

Extract the Zip File
Open it on VS code 
Open it's terminal
type:
cd [Your Project Folder Name]

2. Install dependencies
npm install
# or
yarn
# or
pnpm install
3. Set up environment variables
Copy the example .env file and fill in your Supabase keys:

cp .env.example .env
Then add:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
You need a free Supabase project: https://supabase.com

🧠 Development
Start the development server:

npm run dev
Your app will be available at:

http://localhost:xxxx
🛠️ Build
To build for production:

npm run build
To preview locally:

npm run preview
📦 Deployment
This app works great on:

Vercel (recommended)

Netlify

Cloudflare Pages

For Vercel:

Import the Folder

Set environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

Deploy
