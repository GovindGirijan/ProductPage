const express = require('express');

const routing = express.Router();
const notesController = require('../Controller/myNotes');

routing.get('/list', notesController.getproducts);

routing.post('/add', notesController.addproduct);

routing.put('/modify', notesController.updateproduct);

routing.delete('/delete', notesController.deleteproduct);

routing.all('*', notesController.invalid);

module.exports = routing;
