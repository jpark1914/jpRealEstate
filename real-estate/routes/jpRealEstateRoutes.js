const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Rental = require('../models/rentalViewSchema');

//GET Posts

router.get('/', async (req, res) => {
 await Rental.find()
     .then(info => res.json(info));
});