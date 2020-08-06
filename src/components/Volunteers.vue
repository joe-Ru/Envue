<template>
    <div>
        <h3>Volunteers</h3>
        <AddVolunteerInfo v-on:add-volunteer-info="addVolunteerInfo" />
        <br>
        <input type="text" v-model="search" placeholder="Search First Name.."/>
        <ul>
            <li class="l1" v-for="item in filteredList1">
                {{ item.FirstName }}, {{ item.Availibility }}, {{item.Phone}}, {{item.Email}}
                <button v-on:click="deleteVolunteer(item.FirstName)" >Delete Volunteer</button>
                <button v-on:click="editVolunteer(item)">Edit contact</button>    
            </li>  
        </ul>
        <router-link to='/home'>Homepage</router-link>
    </div>
</template>
<script>
import AddVolunteerInfo from './AddVolunteerInfo';
import { Promise } from 'q';
  class Volunteer {
    constructor(FirstName, LastName, Username, Password, PreferredLocation, Skills, Availibility, Address, Phone, Email, Education, Licenses, ECName, ECPhone, ECEmail, ECAddress, DriversLicense, SocialSecurity, ApprovalStatus) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Username = Username;
        this.Password = Password;
        this.PreferredLocation = PreferredLocation;
        this.Skills = Skills;
        this.Availibility = Availibility;
        this.Address = Address;
        this.Phone = Phone;
        this.Email = Email;
        this.Education = Education;
        this.Licenses = Licenses;
        this.ECName = ECName;
        this.ECPhone = ECPhone;
        this.ECEmail = ECEmail;
        this.ECAddress = ECAddress;
        this.DriversLicense = DriversLicense;
        this.SocialSecurity = SocialSecurity;
        this.ApprovalStatus = ApprovalStatus;
    }
  }
  export default {
    name: "Home",
    components: {
      AddVolunteerInfo,
    },
    data() {
      return {
        search: '',
        selected: '',
        volunteers: [
          new Volunteer('Steph', 'Curry', 'StephCurry', 'Password', 'Main Location', 'Basketball',  'M W F', '123 Main Street', '800-000-0000', 'S.Curry@emial.com', 'HighSchool', 'forklift license', 'Ayesha Curry', '800-000-0003', 'AyeshaCurry@email.com', '', 'No', 'Yes', 'Approved'),
          new Volunteer('LeBron', 'James', 'TheKing123', 'Password', 'Beach Location', 'Basketball', 'T Th', '456 that avenue', '800-000-0001', 'The_King@emial.com', 'HighSchool', 'bailer license', 'Savannah Brinson', '800-000-0004', 'TheQueen@email.com', '', 'Yes', 'Yes', 'Pending'),
          new Volunteer('Markelle', 'Fultz', 'MarkFultz22', 'Password', 'Secondary Location', 'Basketball', 'M T F', '42 Wallaby Way', '800-000-0002', 'M.Fultz@emial.com', 'Some College', 'None', 'Steve Clifford', '800-000-0005', 'Coach_clifford@email.com', '', 'Yes', 'No', 'Denied'),
        ],
      }
    },
    methods:{
        addVolunteerInfo(firstname, lastname, username, password, preferredlocation, skills, availibility, address, phone, email, education, licenses, ecname, ecphone, ecemail, ecaddress, driverslicense, socialsecurity, approvalstatus){
            var newVolunteer = new Volunteer(firstname, lastname, username, password, preferredlocation, skills, availibility, address, phone, email, education, licenses, ecname, ecphone, ecemail, ecaddress, driverslicense, socialsecurity, approvalstatus);
            this.volunteers = [...this.volunteers, newVolunteer];
      },
      deleteVolunteer(FirstName){
          console.log("first name is "+FirstName);
          if(confirm('Are you sure you want to delete '+FirstName+'\'s contact?')){
            this.volunteers = this.volunteers.filter(volunteer => volunteer.FirstName !== FirstName);
          }
      },
      editVolunteer(volunteer){
          console.log(volunteer.FirstName);
          $emit('edit-volunteer-info')
          this.$router.replace({ name: "Edit" });
      }
    },
    
    //TODO: Change the function, it checks for literally any letter on the name. Example: Because 'n' is in LeBron, it displays that as well.
    computed: {
        filteredList1() {
            return this.volunteers.filter(volunteer => {
                return volunteer.FirstName.toLowerCase().includes(this.search.toLowerCase())
            });
        },
        filteredList2() {
            return this.volunteers.filter(volunteer => {
                return volunteer.Availibility.toLowerCase().includes(this.search2.toLowerCase())
            });
        },
        /*
        filteredList3() {
            return this.volunteers.filter(volunteer => {
                return volunteer.Phone.includes(this.search3)
            });
        },/*
        filteredList4() {
            return this.volunteers.filter(volunteer => {
                return volunteer.Email.toLowerCase().includes(this.search.toLowerCase())
            });
        }*/
    }
}

</script>
<style scoped>


/*<li class="l2" v-for="item in filteredList2">{{ item.availibility }}</li>
<li class="l3" v-for="item in filteredList3">{{ item.phone }}</li>
<li class="l4" v-for="item in filteredList4">{{ item.email }}</li>
*/</style>
