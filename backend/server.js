const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const postRoutes = require('./routes/posts');

dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the BMC Dining API');
  });

app.use((req, res, next) => {
  console.log(`🔥 Received ${req.method} request to ${req.originalUrl}`);
  next();
});

const PORT = process.env.PORT || 5050;

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('MongoDB connection error:', err));
