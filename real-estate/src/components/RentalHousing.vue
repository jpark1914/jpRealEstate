<template>
    <b-container>
        <h1>Client Info</h1>
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

            <b-form>
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
                                  type="date"
                                  v-model="presentDate"
                                  required
                                  placeholder="Date">
                        </b-input>
                        <label for="presentDate">Present Date </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="DOB"
                                  type="date"
                                  v-model="DOB"
                                  required
                                  placeholder="Date Of Birth">
                        </b-input>
                        <label for="DOB">Date Of Birth </label>
                    </b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="4">
                        <b-input  id="email"
                                  type="email"
                                  v-model="email"
                                  required
                                  placeholder="Email">
                        </b-input>
                        <label for="nameOfApplicant">Email </label>
                    </b-col>
                    <b-col cols="4">
                        <b-input  id="cellPhone"
                                  type="tel"
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
                                  placeholder="Social Security Number">
                        </b-input>
                        <label for="ssn">SSN </label>
                    </b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="12">
                        <b-input  id="driverLicense"
                                  type="number"
                                  v-model="driverLicense"
                                  required
                                  placeholder="Driver License Number">
                        </b-input>
                        <label for="driverLicense">Driver License</label>
                    </b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="3">
                        <b-input  id="presentAddress"
                                  type="text"
                                  v-model="presentAddress"
                                  required
                                  placeholder="e.x. 525 Hayden Meadow Drive">
                        </b-input>
                        <label for="presentAddress">Present Address </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="presentCity"
                                  type="text"
                                  v-model="presentCity"
                                  required
                                  placeholder="e.x. Memphis">
                        </b-input>
                        <label for="presentCity">Present City </label>
                    </b-col>

                    <b-col cols="3">
                        <b-input  id="presentState"
                                  type="text"
                                  v-model="presentState"
                                  required
                                  placeholder="e.x. TN">
                        </b-input>
                        <label for="presentCity">Present State </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="presentZip"
                                  type="number"
                                  v-model="presentZip"
                                  required
                                  placeholder="e.x 38102">
                        </b-input>
                        <label for="presentZip">Zip Code </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--NEXT ROW-->
                <b-row align-h="center">
                    <b-col cols="3">
                        <b-input  id="priorAddress"
                                  type="text"
                                  v-model="priorAddress"
                                  required
                                  placeholder="e.x. 3002 Castleman Road">
                        </b-input>
                        <label for="presentCity">Present City </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="priorCity"
                                  type="text"
                                  v-model="priorCity"
                                  required
                                  placeholder="e.x. Memphis">
                        </b-input>
                        <label for="priorCity">Prior City </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="priorState"
                                  type="text"
                                  v-model="priorState"
                                  required
                                  placeholder="e.x. TN">
                        </b-input>
                        <label for="priorState">Prior State </label>
                    </b-col>
                    <b-col cols="3">
                        <b-input  id="priorZip"
                                  type="number"
                                  v-model="priorZip"
                                  required
                                  placeholder="e.x. 38118">
                        </b-input>
                        <label for="Prior Zip">Prior Zip </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--NEXT ROW-->
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
                                  type="number"
                                  v-model="yearsAtPriorAddress"
                                  required
                                  placeholder="10 years 2 months">
                        </b-input>
                        <label for="yearsAtPriorAddress">How Long Have You Lived at Your Prior Address? </label>
                    </b-col>
                </b-row>
                <!--END ROW-->

                <!--NEXT ROW-->
                <b-row align-h="center">
                    <b-col cols="6">
                        <b-input  id="priorLandlord"
                                  type="email"
                                  v-model="priorLandlord"
                                  required
                                  placeholder="">
                        </b-input>
                        <label for="priorLandlord">Prior Landlord </label>
                    </b-col>
                    <b-col cols="6">
                        <b-input  id="landLordPhone"
                                  type="tel"
                                  v-model="landLordPhone"
                                  required
                                  placeholder="e.x 9016345554">
                        </b-input>
                        <label for="landLordPhone">Landlord's Phone </label>
                    </b-col>
                </b-row>
                <!--END ROW-->



            </b-form>


            <!--Submit ENTIRE Form-->
            <b-button type="submit" variant="primary">Submit</b-button>


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
