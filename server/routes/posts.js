// import server
import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

// declare router using express's router method
const router = express.Router();

// create a route to 'localhost:5000/posts'
router.get('/', getPosts);
router.post('/', createPost);

export default router;