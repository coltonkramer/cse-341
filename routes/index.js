// import './server.js'
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Romy Painter');
});

module.exports = routes
