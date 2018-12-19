<template>
    <b-container>
        <h1>Future Tenant Information</h1>
        <!--<div class="insert-post">-->
            <!--<label for="nameOfApplicant">Name of Applicant: </label>-->
            <!--<input type="text" id="nameOfApplicant" v-model="nameOfApplicant" placeholder="Enter A Name..."/>-->
            <!--<br/>-->
            <!--<label for="makeModel">List All Your Make/Models... </label>-->
            <!--<input type="text" id="makeModel" v-model="makeModel" placeholder="(ex. 'Chyrsler/Sebring; Volkswagen/Beetle') "/>-->

            <!--<br/>-->
            <!--<label for="phone">Phone: </label>-->
            <!--<input type="text" id="phone" v-model="phone" placeholder="Phone..."/>-->
            <!--<br/>-->
            <!--<button v-on:click="insertPost">Post</button>-->
        <!--</div>-->

        <!--FIRST ROW-->
            <b-form @submit="insertPost">
                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="nameOfApplicant"
                                      type="text"
                                      v-model="nameOfApplicant"
                                      required
                                      placeholder="Name">
                        </b-input>
                        <label for="nameOfApplicant">Name of Applicant </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="presentDate"
                                  type="text"
                                  v-model="presentDate"
                                  required
                                  placeholder="Date">
                        </b-input>
                        <label for="presentDate">Present Date </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="DOB"
                                  type="text"
                                  v-model="DOB"
                                  required
                                  placeholder="Date Of Birth">
                        </b-input>
                        <label for="DOB">Date Of Birth </label>
                    </b-col>
                </b-row>

                <!--END ROW-->
                <!--SECOND ROW-->

                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="email"
                                  type="text"
                                  v-model="email"
                                  required
                                  placeholder="Email">
                        </b-input>
                        <label for="nameOfApplicant">Email </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="cellPhone"
                                  type="text"
                                  v-model="cellPhone"
                                  required
                                  placeholder="Cell Phone">
                        </b-input>
                        <label for="cellPhone">Cell Phone </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="ssn"
                                  type="text"
                                  v-model="ssn"
                                  required
                                  placeholder="e.x, 777-77-7777">
                        </b-input>
                        <label for="ssn">SSN </label>
                    </b-col>
                </b-row>

                <!--END ROW-->

                <!--THIRD ROW-->
                <b-row align-h="start">
                    <b-col cols="8">
                        <b-input  id="driverLicense"
                                  type="text"
                                  v-model="driverLicense"
                                  required
                                  placeholder='e.x. 192837456'>
                        </b-input>
                        <label for="driverLicense">Driver License</label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--FOURTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="presentAddress"
                                  type="text"
                                  v-model="presentAddress"
                                  required
                                  placeholder="e.x. 525 Hayden Meadow Drive">
                        </b-input>
                        <label for="presentAddress">Present Address </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="presentCity"
                                  type="text"
                                  v-model="presentCity"
                                  required
                                  placeholder="e.x. Memphis">
                        </b-input>
                        <label for="presentCity">Present City </label>
                    </b-col>

                    <b-col cols="2">
                        <b-input  id="presentState"
                                  type="text"
                                  v-model="presentState"
                                  required
                                  placeholder="e.x. TN">
                        </b-input>
                        <label for="presentCity">Present State </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="presentZip"
                                  type="text"
                                  v-model="presentZip"
                                  required
                                  placeholder="e.x 38102">
                        </b-input>
                        <label for="presentZip">Zip Code </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--FIFTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="priorAddress"
                                  type="text"
                                  v-model="priorAddress"
                                  required
                                  placeholder="e.x. 3002 Castleman Road">
                        </b-input>
                        <label for="presentCity">Prior City </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="priorCity"
                                  type="text"
                                  v-model="priorCity"
                                  required
                                  placeholder="e.x. Memphis">
                        </b-input>
                        <label for="priorCity">Prior City </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="priorState"
                                  type="text"
                                  v-model="priorState"
                                  required
                                  placeholder="e.x. TN">
                        </b-input>
                        <label for="priorState">Prior State </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="priorZip"
                                  type="text"
                                  v-model="priorZip"
                                  required
                                  placeholder="e.x. 38118">
                        </b-input>
                        <label for="Prior Zip">Prior Zip </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--SIXTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="yearsAtPresentAddress"
                                  type="text"
                                  v-model="yearsAtPresentAddress"
                                  required
                                  placeholder="e.x. 3 years 2 months">
                        </b-input>
                        <label for="yearsAtPresentAddress">How Long Have You Lived at Your Present Address? </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="yearsAtPriorAddress"
                                  type="text"
                                  v-model="yearsAtPriorAddress"
                                  required
                                  placeholder="10 years 2 months">
                        </b-input>
                        <label for="yearsAtPriorAddress">How Long Have You Lived at Your Prior Address? </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--SEVENTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="priorLandlord"
                                  type="text"
                                  v-model="priorLandlord"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="priorLandlord">Prior Landlord </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="landLordPhone"
                                  type="text"
                                  v-model="landLordPhone"
                                  required
                                  placeholder="e.x 9016345554">
                        </b-input>
                        <label for="landLordPhone">Landlord's Phone </label>
                    </b-col>
                </b-row>
                <!--END ROW-->


                <!--EIGHTH ROW-->
                <b-row align-h="center">
                    <b-col cols="3">
                        <b-input  id="totalAdults"
                                  type="text"
                                  v-model="totalAdults"
                                  required
                                  placeholder="2">
                        </b-input>
                        <label for="totalAdults">How Many Adults Will Be In This Unit? </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="totalChildren"
                                  type="text"
                                  v-model="totalChildren"
                                  required
                                  placeholder="1">
                        </b-input>
                        <label for="totalChildren">How Many Children Will Be In This Unit? </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="totalPets"
                                  type="text"
                                  v-model="totalPets"
                                  required
                                  placeholder="2">
                        </b-input>
                        <label for="totalPets">How Many Pets Will Be In This Unit? </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="petWeight"
                                  type="text"
                                  v-model="petWeight"
                                  required
                                  placeholder="60lbs, 12lbs">
                        </b-input>
                        <label for="petWeight">Weight Of Pets </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--NINTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="employer"
                                  type="text"
                                  v-model="employer"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="employer">Employer </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="occupation"
                                  type="text"
                                  v-model="occupation"
                                  required
                                  placeholder="e.x. Warehouse Associate">
                        </b-input>
                        <label for="occupation">Occupation </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--TENTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="currentSalary"
                                  type="text"
                                  v-model="currentSalary"
                                  required
                                  placeholder="$13.50/hr or $35,000">
                        </b-input>
                        <label for="currentSalary">Current Salary </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="yearsWorked"
                                  type="text"
                                  v-model="yearsWorked"
                                  required
                                  placeholder="2 years 10 months">
                        </b-input>
                        <label for="yearsWorked">How Long Have You Been Employed </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--ELEVENTH ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="contactPerson"
                                  type="text"
                                  v-model="contactPerson"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="contactPerson">Contact Person </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="contactNumber"
                                  type="text"
                                  v-model="contactNumber"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="contactNumber">Telephone NO. </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <hr/>
                <!--===============================
                            SPOUSE INFORMATION
                ===================================-->
                <h1>Spouse Information</h1>


                <!--FIRST ROW-->
                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="spouseName"
                                  type="text"
                                  v-model="spouseName"
                                  required
                                  placeholder="e.x. Jane Doe">
                        </b-input>
                        <label for="spouseName">Name of Spouse </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="spouseDOB"
                                  type="text"
                                  v-model="spouseDOB"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spouseDOB">Spouse Date Of Birth </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="spousePhone"
                                  type="text"
                                  v-model="spousePhone"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spousePhone">Telephone No. </label>
                    </b-col>
                </b-row>

                <!--END ROW-->

                <!--SECOND ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="spouseSsn"
                                  type="text"
                                  v-model="spouseSsn"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spouseSsn">Social Security No. </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="spouseDriverLicense"
                                  type="text"
                                  v-model="spouseDriverLicense"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spouseDriverLicense">Driver's License No. </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--THIRD ROW-->
                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="spouseEmployer"
                                  type="text"
                                  v-model="spouseEmployer"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spouseEmployer">Employer </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="spouseOccupation"
                                  type="text"
                                  v-model="spouseOccupation"
                                  required
                                  placeholder="e.x. County Clerk">
                        </b-input>
                        <label for="spouseOccupation">Occupation </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="spouseCurrentSalary"
                                  type="text"
                                  v-model="spouseCurrentSalary"
                                  required
                                  placeholder="$13.50/hr or $35,000">
                        </b-input>
                        <label for="spouseCurrentSalary">Current Salary </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--FOURTH ROW-->
                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="spouseYearsWorked"
                                  type="text"
                                  v-model="spouseYearsWorked"
                                  required
                                  placeholder="2 years 10 months">
                        </b-input>
                        <label for="spouseYearsWorked">How long? </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="spouseContactPerson"
                                  type="text"
                                  v-model="spouseContactPerson"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spouseContactPerson">Contact Person </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="spouseContactPhone"
                                  type="text"
                                  v-model="spouseContactPhone"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="spouseContactPhone">Telephone No. </label>
                    </b-col>
                </b-row>
                <!--END ROW-->


                <hr/>
                <!--===============================
                            BANKING INFORMATION
                ===================================-->
                <h1>Banking Information</h1>

                <!--FIRST ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="bankName"
                                  type="text"
                                  v-model="bankName"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="bankName">Bank Name </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="bankBranch"
                                  type="text"
                                  v-model="bankBranch"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="bankBranch">Bank Branch </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--SECOND ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="bankPhone"
                                  type="text"
                                  v-model="bankPhone"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="bankPhone">Telephone No. </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="bankAddress"
                                  type="text"
                                  v-model="bankAddress"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="bankAddress">Bank Address </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--THIRD ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="checkingAccount"
                                  type="text"
                                  v-model="checkingAccount"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="checkingAccount">Checking Account Number </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="savingsAccount"
                                  type="text"
                                  v-model="savingsAccount"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="savingsAccount">Savings Account Number</label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <hr/>
                <!--===============================
                           PERSONAL REFERENCES
                ===================================-->
                <h1>Personal Credit References</h1>
                <!--FIRST ROW-->
                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="referenceName"
                                  type="text"
                                  v-model="referenceName"
                                  required
                                  placeholder="Jane Doe, Don Quixote,etc...">
                        </b-input>
                        <label for="referenceName">Name of Reference(s) </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="relationship"
                                  type="text"
                                  v-model="relationship"
                                  required
                                  placeholder="Coworker, Father, etc...">
                        </b-input>
                        <label for="relationship">Relationship(s) </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="referenceNumber"
                                  type="text"
                                  v-model="referenceNumber"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="referenceNumber">Reference Number</label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--===============================
                        PERSONAL REFERENCES
                ===================================-->
                <h1>Vehicle Information</h1>

                <!--FIRST ROW-->
                <b-row align-h="start">
                    <b-col cols="2">
                        <b-input  id="numberOfVehicles"
                                  type="text"
                                  v-model="numberOfVehicles"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="numberOfVehicles">Number Of Vehicles </label>
                    </b-col>
                    <b-col cols="10">
                        <b-input  id="makeModel"
                                  type="text"
                                  v-model="makeModel"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="makeModel">List Makes and Models </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--SECOND ROW-->
                <b-row align-h="between">

                    <b-col cols="2">
                        <b-input  id="year"
                                  type="text"
                                  v-model="year"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="year">Year(s) </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="color"
                                  type="text"
                                  v-model="color"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="color">Color(s) </label>
                    </b-col>
                    <b-col cols="2">
                        <b-input  id="tagNo"
                                  type="text"
                                  v-model="tagNo"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="tagNo">Tag Number(s) </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>


        <p class="error" v-if="error">{{error}}</p>
        <div class="schedules-container">
            <div class="schedule"
                 v-for="(item, index) in schedule"
                 v-bind:item="item"
                 v-bind:index="index"
                 v-bind:key="item._id">
                <p class="name">Name: {{item.nameOfApplicant}}</p>
                <p class="car">Make/Model: {{item.makeModel}}</p>
                <hr/>
            </div>
        </div>
    </b-container>


</template>

<script>
    import RequestMethods from '../RequestMethods'
    export default {
      name: 'RentalHousing',
        data(){
          return{
              schedule: [],
              error: '',
              presentDate: '',
              nameOfApplicant: '',
              DOB: '',
              email: '',
              cellPhone: '',
              ssn: '',
              driverLicense: '',
              presentAddress: '',
              presentCity: '',
              presentState: '',
              presentZip: '',
              priorAddress: '',
              priorCity: '',
              priorState: '',
              priorZip: '',
              yearsAtPresentAddress: '',
              yearsAtPriorAddress: '',
              priorLandlord: '',
              landLordPhone: '',
              totalAdults: '',
              totalChildren: '',
              totalPets: '',
              petWeight: '',
              employer: '',
              occupation: '',
              currentSalary: '',
              yearsWorked: '',
              contactPerson: '',
              contactNumber: '',
              spouseName: '',
              spouseDOB: '',
              spousePhone: '',
              spouseSsn: '',
              spouseDriverLicense: '',
              spouseEmployer: '',
              spouseOccupation: '',
              spouseCurrentSalary: '',
              spouseYearsWorked: '',
              spouseContactPerson: '',
              spouseContactPhone: '',
              bankName: '',
              bankBranch: '',
              bankPhone: '',
              bankAddress: '',
              checkingAccount: '',
              savingsAccount: '',
              referenceName: '',
              relationship: '',
              referenceNumber: '',
              creditGrantor: '',
              grantorAddress: '',
              grantorPhone: '',
              numberOfVehicles: '',
              makeModel: '',
              year: '',
              color: '',
              tagNo: '',
              state: '',
          }
        },
        async created() {
          try{
              this.schedule = await RequestMethods.getPosts();
          }catch (err) {
              this.error = err.message;
          }
        } ,

        methods: {
          async insertPost() {
              await RequestMethods.createPost(this.nameOfApplicant,
                  this.presentDate,
                  this.nameOfApplicant,
                  this.DOB,
                  this.email,
                  this.cellPhone,
                  this.ssn,
                  this.driverLicense,
                  this.presentAddress,
                  this.presentCity,
                  this.presentState,
                  this.presentZip,
                  this.priorAddress,
                  this.priorCity,
                  this.priorZip,
                  this.yearsAtPresentAddress,
                  this.yearsAtPriorAddress,
                  this.priorLandlord,
                  this.landLordPhone,
                  this.totalAdults,
                  this.totalChildren,
                  this.totalPets,
                  this.petWeight,
                  this.employer,
                  this.occupation,
                  this.currentSalary,
                  this.yearsWorked,
                  this.contactPerson,
                  this.contactNumber,
                  this.spouseName,
                  this.spouseDOB,
                  this.spousePhone,
                  this.spouseSsn,
                  this.spouseDriverLicense,
                  this.spouseEmployer,
                  this.spouseOccupation,
                  this.spouseCurrentSalary,
                  this.spouseYearsWorked,
                  this.spouseContactPerson,
                  this.spouseContactPhone,
                  this.bankName,
                  this.bankBranch,
                  this.bankPhone,
                  this.bankAddress,
                  this.checkingAccount,
                  this.savingsAccount,
                  this.referenceName,
                  this.relationship,
                  this.referenceNumber,
                  this.creditGrantor,
                  this.grantorAddress,
                  this.grantorPhone,
                  this.numberOfVehicles,
                  this.makeModel,
                  this.year,
                  this.color,
                  this.tagNo,
                  this.state
              );
              this.schedule = await RequestMethods.getPosts();
          },
            async deletePost(id) {
              await RequestMethods.deletePost(id);
              this.schedule = await RequestMethods.getPosts();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
