const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/socket', (req, res) => {
  return res.sendFile(__dirname+'/utils/socket.html');
});

routes.get('/search', SearchController.index);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;
