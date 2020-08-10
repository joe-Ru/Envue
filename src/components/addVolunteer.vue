<template>
    <v-dialog v-model="add_dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Add Volunteer
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">New User</span>
            </v-card-title>
            <v-card-text>
                <form>
                    <v-expansion-panels :hover=true :multiple=true :flat=true>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Personal Info</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field cols="2" v-model="first_name" name="first_name" placeholder="First Name"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field cols="2" v-model="last_name" name="last_name" placeholder="Last Name"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field v-model="street_number" name="street_number" placeholder="Street Number"></v-text-field>
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field v-model="street_name" name="street_name" placeholder="Street Name"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field v-model="city" name="city" placeholder="City"></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field v-model="state" name="state" placeholder="State"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field v-model="zip" name="zip" placeholder="Zip"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="home_phone" name="home_phone" placeholder="Home Phone"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="cell_phone" name="cell_phone" placeholder="Cell Phone"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="work_phone" name="work_phone" placeholder="Work Phone"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="email" name="email" placeholder="Email"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox v-model="license_on_file" name="license_on_file" label="License on File"></v-checkbox>
                                        <v-checkbox v-model="social_on_file" name="social_on_file" label="Social on File"></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Emergency Contact Info</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field cols="2" v-model="ec_first_name" name="ec_first_name" placeholder="First Name"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field cols="2" v-model="ec_last_name" name="ec_last_name" placeholder="Last Name"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field v-model="ec_street_number" name="ec_street_number" placeholder="Street Number"></v-text-field>
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field v-model="ec_street_name" name="ec_street_name" placeholder="Street Name"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field v-model="ec_city" name="ec_city" placeholder="City"></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field v-model="ec_state" name="ec_state" placeholder="State"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field v-model="ec_zip" name="ec_zip" placeholder="Zip"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="ec_home_phone" name="ec_home_phone" placeholder="Home Phone"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="ec_work_phone" name="ec_work_phone" placeholder="Work Phone"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="ec_email" name="ec_email" placeholder="Email"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Education</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="institution" name="institution" placeholder="Institution"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="major" name="major" placeholder="Major"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="degree_type" name="degree_type" placeholder="Degree Type"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Availability</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field v-model="monday" name="monday" placeholder="Monday"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="tuesday" name="tuesday" placeholder="Tuesday"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="wednesday" name="wednesday" placeholder="Wednesday"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="thursday" name="thursday" placeholder="Thursday"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="friday" name="friday" placeholder="Friday"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3">
                                        <v-text-field v-model="saturday" name="saturday" placeholder="Saturday"></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field v-model="sunday" name="sunday" placeholder="Sunday"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Skills</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-textarea v-model="skills" name="skills" color="primary" placeholder="List skills here. Separated them with commas"></v-textarea>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Licenses</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-textarea v-model="licenses" name="licenses" color="primary" placeholder="List licenses here. Separated them with commas"></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="saveNewVolunteer">Save</v-btn>
                <v-btn color="blue darken-1" text @click="add_dialog = false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "AddVolunteer",
        methods: {
            saveNewVolunteer(){
                let volunteer = {
                    name: {first: this.first_name, last: this.last_name},
                    license_on_file: this.license_on_file,
                    social_on_file: this.social_on_file,
                    status: 'approved',
                    licenses: this.licenses,
                    skills: this.skills,
                    times: {monday: this.monday, tuesday: this.tuesday, wednesday: this.wednesday,
                        thursday: this.thursday, friday: this.friday, saturday: this.saturday, sunday: this.sunday},
                    address: {
                        street_number: this.street_number, street_name: this.street_name,
                        city: this.city, state: this.state, zip: this.zip
                    },
                    numbers: {
                        home_phone: this.home_phone, cell_phone: this.cell_phone, work_phone: this.work_phone
                    },
                    email: this.email,
                    education: {institution: this.institution, major: this.major, degree_type: this.degree_type},
                    emergency_contact: {
                        name: {first_name: this.ec_first_name, last_name: this.ec_last_name},
                        address: {
                            street_number: this.ec_street_number, street_name: this.ec_street_name, city: this.ec_city,
                            state: this.ec_state, zip: this.ec_zip
                        },
                        numbers: {home_phone: this.ec_home_phone, work_phone: this.ec_work_phone},
                        email: this.ec_email
                    }
                }
                this.$emit('saveNewVolunteer', volunteer);
                this.closeDialog();
            },
            closeDialog(){
                this.add_dialog = false;
            },
        },
        data(){
            return{
                add_dialog: false,
                first_name: '', last_name: '', street_number: '', street_name: '',
                city: '', state: '', zip: '', home_phone: '', cell_phone: '', work_phone: '',
                email: '', license_on_file: false, social_on_file: false, ec_first_name: '',
                ec_last_name: '', ec_street_number: '', ec_street_name: '', ec_city: '', ec_state: '',
                ec_zip: '', ec_home_phone: '', ec_cell_phone: '', ec_work_phone: '', ec_email: '',
                institution: '', major: '', degree_type: '', monday: '', tuesday: '', wednesday: '',
                thursday: '', friday: '', saturday: '', sunday: '', skills: '', licenses: '',
            }
        }
    }
</script>