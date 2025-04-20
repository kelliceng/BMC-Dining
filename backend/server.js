const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();

// ✅ CORS must be first
app.use(cors({
    origin: '*',  // ← allow all origins for dev
  }));

// ✅ Middleware before routes
app.use(express.json());
app.use('/api/posts', postRoutes);

// ✅ Test route (optional)
app.get('/ping', (req, res) => res.send('pong'));

app.use((req, res, next) => {
    console.log(`🔥 Received ${req.method} request to ${req.originalUrl}`);
    next();
  });

// ✅ Mongo connection + server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5050, () => console.log('✅ Server running on port 5050')))
  .catch(err => console.log(err));
