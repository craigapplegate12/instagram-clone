const Router = require('express').Router();

Router.get('/home', (req, res) => {
    const memoryStore = service.getMemoryStore();
    return res.send(memoryStore);
  });
  
  Router.post('/home', (req, res) => {
    Object.keys(req.body).forEach(key => service.addToMemoryStore(key, req.body[key]));
    const memoryStore = service.getMemoryStore();
    return res.send(memoryStore);
  });
  
  Router.put('/home', (req, res) => {
    Object.keys(req.body).forEach(key => service.updateMemoryStore(key, req.body[key]));
    const memoryStore = service.getMemoryStore();
    return res.send(memoryStore);
  });
  
  Router.delete('/home', (req, res) => {
    req.body.forEach(key => service.deleteFromMemoryStore(key));
    const memoryStore = service.getMemoryStore();
    return res.send(memoryStore);
  });

  module.exports = Router;