const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Rental = require('../../../models/rentalViewSchema');

//GET POSTS

router.get('/', async (req, res) => {
    console.log('Getting your request');
 await Rental.find()
     .then(info => res.json(info));
});


//ADD POSTS
router.post('/', async (req, res) =>{
 const newRental = await new Rental({
     nameOfApplicant: req.body.nameOfApplicant,
     presentDate: req.body.presentDate,
     DOB: req.body.DOB,
     email: req.body.email,
     cellPhone: req.body.cellPhone,
     ssn: req.body.ssn,
     driverLicense: req.body.driverLicense,
     presentAddress: req.body.presentAddress,
     presentCity: req.body.presentCity,
     presentState: req.body.presentState,
     presentZip: req.body.presentZip,
     priorAddress: req.body.priorAddress,
     priorState: req.body.priorState,
     priorCity: req.body.priorCity,
     priorZip: req.body.priorZip,
     yearsAtPresentAddress: req.body.yearsAtPresentAddress,
     yearsAtPriorAddress: req.body.yearsAtPriorAddress,
     priorLandlord: req.body.priorLandlord,
     landLordPhone: req.body.landLordPhone,
     totalAdults: req.body.totalAdults,
     totalChildren: req.body.totalChildren,
     totalPets: req.body.totalPets,
     petWeight: req.body.petWeight,
     employer: req.body.employer,
     occupation: req.body.occupation,
     currentSalary: req.body.currentSalary,
     yearsWorked: req.body.yearsWorked,
     contactPerson: req.body.contactPerson,
     contactNumber: req.body.contactNumber,
     spouseName: req.body.spouseName,
     spouseDOB: req.body.spouseDOB,
     spousePhone: req.body.spousePhone,
     spouseSsn: req.body.spouseSsn,
     spouseDriverLicense: req.body.spouseDriverLicense,
     spouseEmployer: req.body.spouseEmployer,
     spouseOccupation: req.body.spouseOccupation,
     spouseCurrentSalary: req.body.spouseCurrentSalary,
     spouseYearsWorked: req.body.spouseYearsWorked,
     spouseContactPerson: req.body.spouseContactPerson,
     spouseContactPhone: req.body.spouseContactPhone,
     bankName: req.body.bankName,
     bankBranch: req.body.bankBranch,
     bankPhone: req.body.bankPhone,
     bankAddress: req.body.bankAddress,
     checkingAccount: req.body.checkingAccount,
     savingsAccount: req.body.savingsAccount,
     referenceName: req.body.referenceName,
     relationship: req.body.relationship,
     referenceNumber: req.body.referenceNumber,
     creditGrantor: req.body.creditGrantor,
     grantorAddress: req.body.grantorAddress,
     grantorPhone: req.body.grantorPhone,
     numberOfVehicles: req.body.numberOfVehicles,
     makeModel: req.body.makeModel,
     year: req.body.year,
     color: req.body.color,
     tagNo: req.body.tagNo,
     state: req.body.state
 })
    console.log('Your message is being saved as "NEW RENTAL');
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