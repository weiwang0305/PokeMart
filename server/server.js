const path = require('path');
const express = require('express');
const app = express();

const leaderList = [
  { name: 'Anna', id: 'a0' },
  { name: 'Ben', id: 'b0' },
  { name: 'Clara', id: 'c0' },
  { name: 'David', id: 'd0' },
];

app.get('/', (req, res) => {
  return res.status(200).send(leaderList);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
