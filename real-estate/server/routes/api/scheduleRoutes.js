const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Rental = require('../../../models/rentalViewSchema');

//GET POSTS

router.get('/', async (req, res) => {
 console.log(Rental);
 await Rental.find()
     .then(info => res.json(info));
});


//ADD POSTS
router.post('/', async (req, res) =>{
 const newRental = await new Rental({
  name: req.body.name,
  age: req.body.age,
  rentalHouseAddress: req.body.rentalHouseAddress,
  timeOfViewing: req.body.timeOfViewing,
  email: req.body.email,
  phone: req.body.phone,
 })
 await newRental.save()
     .then(() => res.send('POST request is okay from scheduleRoutes in routes/scheduleRoutes.js'));

});

router.delete('/', async (req, res) => {
  await Rental.findByIdAndRemove(req.body._id, function(err) {
  if(err) {
   throw err;
  }
  res.json({result: 'DELETED'});
 })
});

module.exports = router;