require('dotenv/config');
// const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

// const db = mongoose.connection;
const port = process.env.PORT || 3000;
const app = express();

/* middleware */
app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
app.use(express.json());

app.listen(port, () => {
  console.log(`🍽  Hello from the server on port: ${port} 🍽`);
});

/* connect to mongoose */
// mongoose.connect(
//   process.env.DB_CONN,
//   { useNewUrlParser: true },
// );

app.get('/*', (req, res) => {
  /* sends request to index.html for correct react router functionality */
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

/* verify connection */
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => { console.log('⛓  Successful connection to mongodb! ⛓'); });

/* routes */
// const allProjects = require('./routes/allProjects');

// app.use('/projects', allProjects);
