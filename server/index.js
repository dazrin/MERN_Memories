// dependancies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// use express as our server
const app = express();

app.use('/posts', postRoutes);

// allows our server to use our dependancies
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// declaring MongoDB database connection string and port
const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.uvzzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect server to database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    mongoose.set('useFindAndModify', false);
