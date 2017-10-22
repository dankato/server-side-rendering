'use strict';

import express from 'express';
import renderer from './helpers/renderer';

const port = 3000;
const app = express();

app.use(express.static('public'));

// route handler, go back to server to get bundle.js out of public folder using express
app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log(`Listening on ${port}`);
});