# 🚀 Admin Dashboard

A modern Admin Dashboard built with **React, Tailwind CSS, Vite, and the GitHub REST API**.  
Demonstrates real-world frontend skills — API integration, custom hooks, search/filtering, loading skeletons, and data visualization.

🔗 **Live Demo:** https://admin-dashboard-pied-psi-20.vercel.app/

---

## ✨ Features

- 🔐 Login UI with inline field validation
- 📊 Dashboard with live stats cards from GitHub API
- 📈 Interactive bar chart (Recharts) built from real API data
- 👥 User management table with avatars, type badges, and profile links
- 🔍 Real-time search & filtering
- ⏳ Skeleton loading states
- ❌ Error state with retry button
- 🧩 Custom `useUsers` hook for clean data fetching
- 🔒 Environment-based API config with `.env`
- 📱 Responsive layout

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Routing | React Router DOM |
| Data Fetching | Axios, Custom Hook |
| Charts | Recharts |
| API | GitHub REST API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Chart.jsx           # Bar chart using real API data
│   └── DashboardCard.jsx   # Reusable stats card
├── hooks/
│   └── useUsers.js         # Custom hook for GitHub API fetching
├── layout/
│   └── DashboardLayout.jsx # Sidebar + navbar layout
├── pages/
│   ├── Dashboard.jsx       # Overview with cards and chart
│   ├── Login.jsx           # Login with validation
│   └── Users.jsx           # Users table with search
├── App.jsx
└── main.jsx
```

---

## ⚙️ Run Locally

```bash
git clone https://github.com/megha-2003-dev/admin-dashboard.git
cd admin-dashboard
npm install
```

Create a `.env` file:
```
VITE_API_BASE_URL=https://api.github.com
```

```bash
npm run dev
```

---

## 📡 API Used

**GitHub REST API** — `https://api.github.com/users`  
Returns real GitHub user profiles including avatars, usernames, type, and profile URLs. No authentication required.

---

## 👩‍💻 Author

**Megha Sharma**  
GitHub: https://github.com/megha-2003-dev

---

⭐ If you found this project useful, consider giving it a star!
