const express = require('express');
const db = require('./config/connection');
const userController = require('./controllers/userController');
const thoughtController = require('./controllers/thoughtController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userController);
app.use(thoughtController);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
