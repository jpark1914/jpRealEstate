<template>
    <b-container>
        <h1>Hello World</h1>

        <p class="error" v-if="error">{{error}}</p>
        <div class="schedules-container">
        <div class="schedule"
        v-for="(item, index) in schedule"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item._id">
            <b-row align-h="center">
                <b-col cols="4">
                    <h3>{{item.nameOfApplicant}}</h3>
                </b-col>
                <b-col cols="4">
                    {{item.presentDate}}
                </b-col>
                <b-col cols="4">
                    <h3>{{item.DOB}}</h3>
                </b-col>
            </b-row>

            <!--END ROW-->
            <!--SECOND ROW-->

            <b-row align-h="center">
                <b-col cols="4">
                    <h3>{{item.email}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.cellPhone}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.ssn}}</h3>
                </b-col>
            </b-row>

            <!--END ROW-->

            <!--THIRD ROW-->
            <b-row align-h="start">
                <b-col cols="8">
                    <h3>{{item.driverLicense}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--FOURTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.presentAddress}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.presentCity}}</h3>
                </b-col>

                <b-col cols="2">
                    <h3>{{item.presentState}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.presentZip}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--FIFTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.priorAddress}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.priorCity}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.priorState}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.priorZip}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--SIXTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.yearsAtPresentAddress}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.yearsAtPriorAddress}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--SEVENTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.priorLandlord}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.landLordPhone}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->


            <!--EIGHTH ROW-->
            <b-row align-h="center">
                <b-col cols="3">
                    <h3>{{item.totalAdults}}</h3>
                </b-col>
                <b-col cols="3">
                    <h3>{{item.totalChildren}}</h3>
                </b-col>
                <b-col cols="3">
                    <h3>{{item.totalPets}}</h3>
                </b-col>
                <b-col cols="3">
                    <h3>{{item.petWeight}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--NINTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.employer}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.occupation}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--TENTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                   <h3>{{item.currentSalary}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.yearsWorked}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--ELEVENTH ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.contactPerson}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.contactNumber}}</h3>
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
                    <h3>{{item.spouseName}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.spouseDOB}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.spousePhone}}</h3>
                </b-col>
            </b-row>

            <!--END ROW-->

            <!--SECOND ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.spouseSsn}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.spouseDriverLicense}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--THIRD ROW-->
            <b-row align-h="center">
                <b-col cols="4">
                    <h3>{{item.spouseEmployer}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.spouseOccupation}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.spouseCurrentSalary}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--FOURTH ROW-->
            <b-row align-h="center">
                <b-col cols="4">
                    <h3>{{item.spouseYearsWorked}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.spouseContactPhone}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.spouseContactPerson}}</h3>
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
                    <h3>{{item.bankName}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.bankBranch}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--SECOND ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.bankPhone}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.bankAddress}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--THIRD ROW-->
            <b-row align-h="center">
                <b-col cols="6">
                    <h3>{{item.checkingAccount}}</h3>
                </b-col>
                <b-col cols="6">
                    <h3>{{item.savingsAccount}}</h3>
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
                    <h3>{{item.referenceName}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.relationship}}</h3>
                </b-col>
                <b-col cols="4">
                    <h3>{{item.referenceNumber}}</h3>
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
                    <h3>{{item.numberOfVehicles}}</h3>
                </b-col>
                <b-col cols="10">
                    <h3>{{item.makeModel}}</h3>
                </b-col>
            </b-row>
            <!--END ROW-->

            <!--SECOND ROW-->
            <b-row align-h="between">

                <b-col cols="2">
                    <h3>{{item.year}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.color}}</h3>
                </b-col>
                <b-col cols="2">
                    <h3>{{item.tagNo}}</h3>
                </b-col>
            </b-row>
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
                nameOfApplicant: '',
                presentDate: '',
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
        },

    }
</script>

<style scoped>

</style>