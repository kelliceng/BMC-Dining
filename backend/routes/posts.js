const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Post = require('../models/Post');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'dining_app',
    allowed_formats: ['jpg', 'png'],
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
      console.log('🔥 Received POST');
      console.log('Body:', req.body);
      console.log('File:', req.file);
  
      const newPost = new Post({
        name: req.body.name,
        location: req.body.location,
        imageUrl: req.file.path  // already a hosted Cloudinary URL
      });
  
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      console.error('❌ POST /api/posts error:', err.message);
      res.status(500).json({ error: err.message });
    }
  });

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.delete('/:id', async (req, res) => {
    const devToken = req.headers['x-dev-token'];
    
    if (devToken !== process.env.DEV_SECRET) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(204).end(); // success, no content
    } catch (err) {
      console.error('❌ Delete error:', err.message);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

module.exports = router;
