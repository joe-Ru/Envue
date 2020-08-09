<template>
    <div>
        <form @submit="addVolunteerInfo">
            <input type="text" v-model="FirstName" name="firstName" placeholder="First Name" required>
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
            <input type="reset" value="Clear info" class="btn">
        </form>
    </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
export default {
    name: "AddVolunteerInfo",
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
    methods:{
        addVolunteerInfo(e){
            e.preventDefault();
            const firstname = this.FirstName;
            const lastname = this.LastName;
            const username = this.Username;
            const password = this.Password;
            const preferredlocation = this.PreferredLocation;
            const skills = this.Skills;
            const availibility = this.Availibility;
            const address = this.Address;
            const phone = this.Phone;
            const email = this.Email;
            const education = this.Education;
            const licenses = this.Licenses;
            const ecname = this.ECName;
            const ecphone = this.ECPhone;
            const ecemail = this.ECEmail;
            const ecaddress = this.ECAddress;
            const driverslicense = this.DriversLicense;
            const socialsecurity = this.SocialSecurity;
            const approvalstatus = this.ApprovalStatus;
            this.FirstName='';
            this.LastName='';
            this.Username='';
            this.Password='';
            this.PreferredLocation='';
            this.Availibility='';
            this.Address='';
            this.Phone='';
            this.Email='';
            this.Education='';
            this.Licenses='';
            this.ECName='';
            this.ECPhone='';
            this.ECEmail='';
            this.ECAddress='';
            this.DriversLicense='';
            this.SocialSecurity='';
            this.ApprovalStatus='';
            this.$emit('add-volunteer-info', firstname, lastname, username, password, preferredlocation, skills, availibility, address, phone, email, education, licenses, ecname, ecphone, ecemail, ecaddress, driverslicense, socialsecurity, approvalstatus);
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