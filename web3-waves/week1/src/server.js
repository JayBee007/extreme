const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.sendFile('public/index.html', { root: __dirname});
});

app.listen(5000, () => {
  console.log('server running')
})