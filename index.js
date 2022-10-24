const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('e-school API Running');
});

app.listen(port, () => {
  console.log('education server is running on port:', port);
})