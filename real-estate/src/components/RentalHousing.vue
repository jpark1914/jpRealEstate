<template>
    <div class="container">
        <h1>Client Info</h1>
        <div class="insert-post">
            <label for="nameOfApplicant">Name of Applicant: </label>
            <input type="text" id="nameOfApplicant" v-model="nameOfApplicant" placeholder="Enter A Name..."/>
            <!--<br/>-->
            <!--<label for="age">Age: </label>-->
            <!--<input type="text" id="age" v-model="age" placeholder="Enter Your Age..."/>-->
            <!--<br/>-->
            <!--<label for="rental">Viewing Address: </label>-->
            <!--<input type="text" id="rental" v-model="rentalHouseAddress" placeholder="The Home You'd Like To View..."/>-->
            <!--<br/>-->
            <!--<label for="email">Email: </label>-->
            <!--<input type="text" id="email" v-model="email" placeholder="Email..."/>-->
            <!--<br/>-->
            <!--<label for="phone">Phone: </label>-->
            <!--<input type="text" id="phone" v-model="phone" placeholder="Phone..."/>-->
            <!--<br/>-->
            <button v-on:click="insertPost">Post</button>
        </div>

        <p class="error" v-if="error">{{error}}</p>
        <div class="schedules-container">
            <div class="schedule"
                 v-for="(item, index) in schedule"
                 v-bind:item="item"
                 v-bind:index="index"
                 v-bind:key="item._id">
                <p class="name">Name: {{item.nameOfApplicant}}</p>
                <hr/>
            </div>
        </div>

    </div>
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
              await RequestMethods.createPost(this.nameOfApplicant);
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
