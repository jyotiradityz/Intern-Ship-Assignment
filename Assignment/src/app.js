const express = require('express');
const mongoConnect = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoConnect();
  
app.use(express.json());
app.use('/worko/user', userRoutes);
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;