const express = require('express');
const connectDatabase = require('./database/db.js');
const talentRoutes = require('./routes/talentRoutes.js');
const dotenv = require('dotenv')
const path = require('path');

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files locally

// Connect to Database
connectDatabase(process.env.MONGO_URL);

// Routes
app.use('/api/talent', talentRoutes);

app.get("/",(req,res)=>{
  res.send("Welcome to Talent API")
})
// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
