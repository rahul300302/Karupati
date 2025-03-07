const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./logger'); // Ensure logger.js is correctly set up

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => {
      logger.info('✅ MongoDB Connected');
      console.log('✅ MongoDB Connected');
  })
  .catch(err => {
      console.error('❌ MongoDB Connection Error:', err);
  });
