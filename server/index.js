const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 8080;

const app = express();

const dogs = [
  {name: 'Pippa', color: 'white'},
  {name: 'Prairie', color: 'tri-colored'},
  {name: 'Hiro', color: 'golden'}
];

app.use(morgan('dev'));
app.use(cors());


app.get('/dogs', (req, res) => {
  res.json(dogs);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})