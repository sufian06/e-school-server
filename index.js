const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('e-school API Running');
});

app.get('/courses', (req, res) => {
  res.send(categories);
})

app.get('/course/:name', (req, res) => {
  const name = req.params.name;
  const selectedCourse = categories.find(course => course.name == name);
  res.send(selectedCourse);
})

app.listen(port, () => {
  console.log('education server is running on port:', port);
})