const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    mongo_url = "mongodb+srv://aman:12345@cluster0.vn81b.mongodb.net/talenthub"
    console.log(mongo_url)
    await mongoose.connect(mongo_url);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = connectDatabase;
