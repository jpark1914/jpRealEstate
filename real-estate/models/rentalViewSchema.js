const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const rentalViewModel = new Schema({
    presentDate: Date,
    nameOfApplicant: String,
    DOB: Date,
    email: String,
    cellPhone: Number,
    ssn: Number,
    driverLicense: Number,
    presentAddress: String,
    presentCity: String,
    presentState: String,
    presentZip: Number,
    priorAddress: String,
    priorCity: String,
    priorState: String,
    priorZip: Number,
    yearsAtPresentAddress: Number,
    yearsAtPriorAddress: Number,
    priorLandlord: String,
    landLordPhone: Number,
    totalAdults: Number,
    totalChildren: Number,
    totalPets: Number,
    petWeight: [],
    employer: String,
    occupation: String,
    currentSalary: String,
    yearsWorked: Number,
    contactPerson: String,
    contactNumber: Number,


    //Spouse Information

    spouseName: String,
    spouseDOB: Date,
    spousePhone: Number,
    spouseSsn: Number,
    spouseDriverLicense: Number,
    spouseEmployer: String,
    spouseOccupation: String,
    spouseCurrentSalary: String,
    spouseYearsWorked: Number,
    spouseContactPerson: String,
    spouseContactPhone: Number,


    //Bank Information

    bankName: String,
    bankBranch: String,
    bankPhone: Number,
    bankAddress: String,
    checkingAccount: Number,
    savingsAccount: Number,

    //Personal Credit References

    referenceName: [String],
    relationship: [String],
    referenceNumber: [String],
    creditGrantor: [String],
    grantorAddress: [String],
    grantorPhone:[Number],

    //Other Information

    numberOfVehicles: Number,
    makeModel: [String],
    year: [Number],
    color: [String],
    tagNo: [Number],
    state: [String],






});

module.exports = mongoose.model('rental', rentalViewModel);