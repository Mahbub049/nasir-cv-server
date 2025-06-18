const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
app.use('/api/profile', require('./routes/profile'));
app.use('/api/education', require('./routes/education'));
app.use('/api/experience', require('./routes/experience'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/admin-roles', require('./routes/adminRoles'));
app.use('/api/memberships', require('./routes/memberships'));
app.use('/api/achievements', require('./routes/achievements'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/publications', require('./routes/publications'));
app.use('/api/projects', require('./routes/projects'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
