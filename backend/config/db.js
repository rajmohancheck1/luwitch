
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI ; // Fallback
    // Capture the URI
    console.log('Mongo URI:', uri); // Debug: Log the URI
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
