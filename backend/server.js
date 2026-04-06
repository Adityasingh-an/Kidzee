require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const connectDB = require('./config/db');

// Routes
const galleryRoutes = require('./routes/galleryRoutes');
const videoRoutes = require('./routes/videoRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

const expressLayouts = require('express-ejs-layouts');

const app = express();

// 🔗 Connect MongoDB
connectDB();

// 🧩 Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "*"
}));

// 🔐 Session (ADMIN LOGIN FIX)
app.use(session({
  secret: 'kidzee-secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));

// 📂 Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🎨 EJS setup (admin panel)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// ================== 🛣️ API ROUTES ==================

app.use('/api/gallery', galleryRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/auth', authRoutes);

// 🧑‍💻 Admin Routes (EJS)
app.use('/admin', adminRoutes);

// ================== 🔥 FRONTEND SERVE ==================

// React build serve karega
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ⚡ IMPORTANT (React SPA routing fix)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// ======================================================

// 🚀 Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});