<template>
    <div v-on: edit-volunteer-info="editVolunteer">
        <form @submit="editVolunteerInfo">
            <input type="text" v-model="FirstName" name="firstName" placeholder="firstname" required>
            <input type="text" v-model="LastName" name="lastName" placeholder="Last Name" required>
            <input type="text" v-model="Username" name="userName" placeholder="Username" required>
            <input type="text" v-model="Password" name="password" placeholder="Password" required>
            <input type="text" v-model="PreferredLocation" name="location" placeholder="Preferred Locations" required>
            <input type="text" v-model="Skills" name="skills" placeholder="Skills and Interests" required>
            <input type="text" v-model="Availibility" name="availibility" placeholder="Availibility" required>
            <input type="text" v-model="Address" name="address" placeholder="Address" required>
            <input type="text" v-model="Phone" name="phone" placeholder="Phone Numbers" required>
            <input type="text" v-model="Email" name="email" placeholder="Email" required>
            <input type="text" v-model="Education" name="education" placeholder="Educational Background" required>
            <input type="text" v-model="Licenses" name="licenses" placeholder="Current Licenses" required>
            <input type="text" v-model="ECName" name="ecName" placeholder="Emergency Contact Name" required>
            <input type="text" v-model="ECPhone" name="ecPhone" placeholder="Emergency Contact Phone" required>
            <input type="text" v-model="ECEmail" name="ecEmail" placeholder="Emergency Contact Email" required>
            <input type="text" v-model="ECAddress" name="ecAddress" placeholder="Emergency Contact Address" required>
            <input type="text" v-model="DriversLicense" name="driversLicense" placeholder="Drivers License on File" required>
            <input type="text" v-model="SocialSecurity" name="socialSecurity" placeholder="Social Security on File" required>
            <input type="text" v-model="ApprovalStatus" name="approvalStatus" placeholder="Approval Status" required>
            <input type="submit" value="Add Volunteer" class="btn">
            <input type="close-modal" value="Revert to original" class="btn">
        </form>
    </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
export default {
    name: "EditVolunteerInfo",
    data(){
        return{
            FirstName:'',
            LastName:'',
            Username:'',
            Password:'',
            PreferredLocation:'',
            Skills:'',
            Availibility:'',
            Address:'',
            Phone:'',
            Email:'',
            Education:'',
            Licenses:'',
            ECName:'',
            ECPhone:'',
            ECEmail:'',
            ECAddress:'',
            DriversLicense:'',
            SocialSecurity:'',
            ApprovalStatus:'',       
        }
    },
    props: {
            FirstName:String,
            LastName:String,
            Username:String,
            Password:String,
            PreferredLocation:String,
            Skills:String,
            Availibility:String,
            Address:String,
            Phone:String,
            Email:String,
            Education:String,
            Licenses:String,
            ECName:String,
            ECPhone:String,
            ECEmail:String,
            ECAddress:String,
            DriversLicense:String,
            SocialSecurity:String,
            ApprovalStatus:String,  
    },
    methods:{
        editVolunteer(e, firstname, lastname, username, password, preferredlocation, skills, availibility, address, phone, email, education, licenses, ecname, ecphone, ecemail, ecaddress, driverslicense, socialsecurity, approvalstatus){
            e.preventDefault();
            console.log(e.FirstName+" is the name");
            console.log(firstname+" first name");
            console.log(e.firstname+" first name");
            console.log(firstname1+" first name");
            console.log(e.firstname1+" first name");
            const firstname1 = this.firstname;
            const lastname1 = this.LastName;
            const username1 = this.Username;
            const password1 = this.Password;
            const preferredlocation1 = this.PreferredLocation;
            const skills1 = this.Skills;
            const availibility1 = this.Availibility;
            const address1 = this.Address;
            const phone1 = this.Phone;
            const email1 = this.Email;
            const education1 = this.Education;
            const licenses1 = this.Licenses;
            const ecname1 = this.ECName;
            const ecphone1 = this.ECPhone;
            const ecemail1 = this.ECEmail;
            const ecaddress1 = this.ECAddress;
            const driverslicense1 = this.DriversLicense;
            const socialsecurity1 = this.SocialSecurity;
            const approvalstatus1 = this.ApprovalStatus;
            
            //working to this point
            this.$emit('edit-volunteer-info', firstname1, lastname1, username1, password1, preferredlocation1, skills1, availibility1, address1, phone1, email1, education1, licenses1, ecname1, ecphone1, ecemail1, ecaddress1, driverslicense1, socialsecurity1, approvalstatus1);
        }
    }
}
</script>

<style scoped>
form {
    text-align: center;
}

input[type="text"]{
    padding: 5px;
    width: 150px;
    height: 5px;

}
input[type="submit"]{
    text-align: center;

}
</style>