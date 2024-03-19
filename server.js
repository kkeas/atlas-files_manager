// start an express server
const express = require('express');
const routes = require('./routes/index');

// const process = require('node:process')

const port = process.env.PORT || 8002;

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// process.on('exit', (code) => {
//   console.log(`About to exit with code: ${code}`);
//   app.close();
// })
