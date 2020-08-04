<template>
  <div>
    <h3>Administrator Page</h3>
    <input type="radio" id="volunteers" name="selection" value="Volunteers" v-model="selected">
    <label for="volunteers">Volunteers</label>
    <input type="radio" id="opportunities" name="selection" value="Opportunities" v-model="selected">
    <label for="opportunities">Opportunities</label>
    <br>
    <AddOpportunity v-on:add-opportunity="addOpportunity" />
    <AddVolunteer v-on:add-volunteer="addVolunteer" />
    <input type="text" v-model="search" placeholder="Search title.."/>
    <br>
    <router-link to='/volunteers'>Volunteer info</router-link>
    <router-link to='/opportunities'>Opportunities info</router-link>
    <ul>
      <li v-for="item in filteredList">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
import AddOpportunity from './AddOpportunity';
import AddVolunteer from './AddVolunteer';

  class Volunteer {
    constructor(name) {
      this.name = name;
    }
  }
  class Opportunity {
    constructor(name) {
      this.name = name;
    }
  }
  export default {
    name: "Home",
    components: {
      AddOpportunity,
      AddVolunteer
    },
    data() {
      return {
        search: '',
        selected: '',
        volunteers: [
          new Volunteer('Jeff'),
          new Volunteer('Brian')
        ],
        opportunities: [
          new Opportunity('This One'),
          new Opportunity( 'That One'),
          new Opportunity( 'The Other')
        ]
      }
    },
    methods:{
      addOpportunity(newOpportunity){
        newOpportunity = new Opportunity(newOpportunity);
        this.opportunities = [...this.opportunities, newOpportunity];
      },
      addVolunteer(newVolunteer){
        newVolunteer = new Volunteer(newVolunteer);
        this.volunteers = [...this.volunteers, newVolunteer];
      }
    },
    computed: {
      filteredList() {
        if(this.selected === 'Volunteers'){
          return this.volunteers.filter(volunteer => {
            return volunteer.name.toLowerCase().includes(this.search.toLowerCase())
          });
        }else{
          return this.opportunities.filter(volunteer => {
            return volunteer.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
      }
    }
  }
</script>
<style scoped>

</style>

