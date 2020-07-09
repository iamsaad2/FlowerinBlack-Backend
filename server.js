const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('works');
});
//Define Routes
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/flowers', require('./routes/flowers'));
app.use('/api/managers', require('./routes/managers'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
