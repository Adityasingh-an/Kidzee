require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

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
app.use(cors());

// 📂 Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🎨 EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// 🛣️ API Routes
app.use('/api/gallery', galleryRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/auth', authRoutes);

// 🧑‍💻 Admin Routes (EJS)
app.use('/admin', adminRoutes);



// ================== 🔥 IMPORTANT PART ==================

app.get("/", (req, res) => {
  res.send("API Running");
});

// ======================================================



// 🚀 Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});