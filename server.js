const express = require('express'),
  app = express(),
  port = process.env.PORT || '3000';

require('./middleware/middleware')(app);
require('./server/routes/api')(app);

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})


