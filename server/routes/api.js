const axios = require('axios'),
  API = 'https://jsonplaceholder.typicode.com';

module.exports = app => {

  app.get('/api', (req, res) => {
    res.status(200).send('api works dude');
  })

  app.get('/posts', (req, res) => {
    axios.get(`${API}/posts`)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
  })
}
