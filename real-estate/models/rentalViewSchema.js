const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const rentalViewModel = new Schema({
    nameOfApplicant: String,
    presentDate: Date,
    DOB: Date,
    email: String,
    cellPhone: String,
    ssn: String,
    driverLicense: String,
    presentAddress: String,
    presentCity: String,
    presentState: String,
    presentZip: String,
    priorAddress: String,
    priorCity: String,
    priorState: String,
    priorZip: String,
    yearsAtPresentAddress: String,
    yearsAtPriorAddress: String,
    priorLandlord: String,
    landLordPhone: String,
    totalAdults: String,
    totalChildren: String,
    totalPets: String,
    petWeight: String,
    employer: String,
    occupation: String,
    currentSalary: String,
    yearsWorked: String,
    contactPerson: String,
    contactNumber: String,


    //Spouse Information

    spouseName: String,
    spouseDOB: Date,
    spousePhone: String,
    spouseSsn: String,
    spouseDriverLicense: String,
    spouseEmployer: String,
    spouseOccupation: String,
    spouseCurrentSalary: String,
    spouseYearsWorked: String,
    spouseContactPerson: String,
    spouseContactPhone: String,


    //Bank Information

    bankName: String,
    bankBranch: String,
    bankPhone: String,
    bankAddress: String,
    checkingAccount: String,
    savingsAccount: String,

    //Personal Credit References

    referenceName: String,
    relationship: String,
    referenceNumber: String,
    creditGrantor: String,
    grantorAddress: String,
    grantorPhone:String,

    //Other Information

    numberOfVehicles: String,
    makeModel: String,
    year: String,
    color: String,
    tagNo: String,
    state: String,






});

module.exports = mongoose.model('rental', rentalViewModel);