const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();


const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/tasks', tasksRoutes);


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('DB connect error', err));
