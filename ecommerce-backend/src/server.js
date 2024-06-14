const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// loading env variable from env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;


//Making a mongoDb connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
