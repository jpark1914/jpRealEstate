<template>

<!--NEXT ROW-->
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
                      type="number"
                      v-model="ssn"
                      required
                      placeholder="Social Security Number">
            </b-input>
            <label for="ssn">SSN </label>
        </b-col>
    </b-row>
    <!--END ROW-->











    <!--NEXT ROW-->
    <b-row align-h="center">
        <b-col cols="6">
            <b-input  id="email"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Email">
            </b-input>
            <label for="nameOfApplicant">Email </label>
        </b-col>
        <b-col cols="6">
            <b-input  id="ssn"
                      type="number"
                      v-model="ssn"
                      required
                      placeholder="Social Security Number">
            </b-input>
            <label for="ssn">SSN </label>
        </b-col>
    </b-row>
    <!--END ROW-->










    <!--NEXT ROW-->
    <b-row align-h="center">
        <b-col cols="12">
            <b-input  id="email"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Email">
            </b-input>
            <label for="nameOfApplicant">Email </label>
        </b-col>
    </b-row>
    <!--END ROW-->








</template>

<script>
    export default {
        name: "formRowTemplate"
    }
</script>

<style scoped>

</style>