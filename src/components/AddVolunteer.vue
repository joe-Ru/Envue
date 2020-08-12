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
                                        <v-text-field
                                                cols="2"
                                                v-model="first_name"
                                                name="first_name"
                                                placeholder="First Name"
                                                :rules="required"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                cols="2"
                                                v-model="last_name"
                                                name="last_name"
                                                placeholder="Last Name"
                                                :rules="required"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="street_number"
                                                name="street_number"
                                                placeholder="Street Number"
                                                :rules="required"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field
                                                v-model="street_name"
                                                name="street_name"
                                                placeholder="Street Name"
                                                :rules="required"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field
                                                v-model="city"
                                                name="city"
                                                placeholder="City"
                                                :rules="required"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-select
                                                :items="states"
                                                v-model="state"
                                                :rules="required"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="zip"
                                                name="zip"
                                                placeholder="Zip"
                                                :rules="validateZip"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="home_phone"
                                                name="home_phone"
                                                placeholder="Home Phone"
                                                :rules="validatePhoneNumber"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="cell_phone"
                                                name="cell_phone"
                                                placeholder="Cell Phone"
                                                :rules="validatePhoneNumber"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="work_phone"
                                                name="work_phone"
                                                placeholder="Work Phone"
                                                :rules="validateOptionalPhoneNumber"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="email"
                                                name="email"
                                                placeholder="Email"
                                                :rules="validateEmail"
                                        ></v-text-field>
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
                                        <v-text-field
                                                cols="2"
                                                v-model="ec_first_name"
                                                name="ec_first_name"
                                                placeholder="First Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                cols="2"
                                                v-model="ec_last_name"
                                                name="ec_last_name"
                                                placeholder="Last Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="ec_street_number"
                                                name="ec_street_number"
                                                placeholder="Street Number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field
                                                v-model="ec_street_name"
                                                name="ec_street_name"
                                                placeholder="Street Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field
                                                v-model="ec_city"
                                                name="ec_city"
                                                placeholder="City"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-select
                                                v-model="ec_state"
                                                :items="states"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="ec_zip"
                                                name="ec_zip"
                                                placeholder="Zip"
                                                :rules="validateOptionalZip"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="ec_home_phone"
                                                name="ec_home_phone"
                                                placeholder="Home Phone"
                                                :rules="validateOptionalPhoneNumber"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="ec_work_phone"
                                                name="ec_work_phone"
                                                placeholder="Work Phone"
                                                :rules="validateOptionalPhoneNumber"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="ec_email"
                                                name="ec_email"
                                                placeholder="Email"
                                                :rules="validateOptionalEmail"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Education</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="institution"
                                                name="institution"
                                                placeholder="Institution"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="major"
                                                name="major"
                                                placeholder="Major"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="degree_type"
                                                name="degree_type"
                                                placeholder="Degree Type"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Availability</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="monday"
                                                name="monday"
                                                placeholder="Monday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="tuesday"
                                                name="tuesday"
                                                placeholder="Tuesday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="wednesday"
                                                name="wednesday"
                                                placeholder="Wednesday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="thursday"
                                                name="thursday"
                                                placeholder="Thursday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="friday"
                                                name="friday"
                                                placeholder="Friday"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3">
                                        <v-text-field
                                                v-model="saturday"
                                                name="saturday"
                                                placeholder="Saturday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                                v-model="sunday"
                                                name="sunday"
                                                placeholder="Sunday"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Skills</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-textarea
                                        v-model="skills"
                                        name="skills"
                                        color="primary"
                                        placeholder="List skills here. Separated them with commas"
                                ></v-textarea>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Licenses</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-textarea
                                                v-model="licenses"
                                                name="licenses"
                                                color="primary"
                                                placeholder="List licenses here. Separated them with commas"
                                        ></v-textarea>
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
        props: {
            states: Array
        },
        methods: {
            saveNewVolunteer(){
                let volunteer = {
                    name: {First: this.first_name, Last: this.last_name},
                    license_on_file: this.license_on_file,
                    social_on_file: this.social_on_file,
                    status: 'approved',
                    licenses: this.licenses,
                    skills: this.skills,
                    times: {Monday: this.monday, Tuesday: this.tuesday, Wednesdayednesday: this.wednesday,
                        Thursday: this.thursday, Friday: this.friday, Saturday: this.saturday, Sunday: this.sunday},
                    address: {
                        StreetNumber: this.street_number, StreetName: this.street_name,
                        City: this.city, State: this.state, Zip: this.zip
                    },
                    numbers: {
                        Home: this.home_phone, Cell: this.cell_phone, Work: this.work_phone
                    },
                    email: this.email,
                    education: {Name: this.institution, Major: this.major, Type: this.degree_type},
                    emergency_contact: {
                        name: {First: this.ec_first_name, Last: this.ec_last_name},
                        address: {
                            StreetNumber: this.ec_street_number, StreetName: this.ec_street_name, City: this.ec_city,
                            State: this.ec_state, Zip: this.ec_zip
                        },
                        numbers: {Home: this.ec_home_phone, Work: this.ec_work_phone},
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
                required: [
                    v => !!v || 'This field is required'
                ],
                validateZip: [
                    v => !!v || 'This field is required',
                    v => /^[0-9]{5}(?:-[0-9]{4})?/.test(v) || 'Please enter a valid zip code'
                ],
                validateOptionalZip: [
                    v => /^([0-9]{5}(?:-[0-9]{4})?)?/.test(v) || 'Please enter a valid zip code'
                ],
                validatePhoneNumber: [
                    v => !!v || 'This field is required',
                    v => /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(v) || 'Please enter a valid phone number'
                ],
                validateOptionalPhoneNumber: [
                    v => /^(\D?(\d{3})\D?\D?(\d{3})\D?(\d{4}))?$/.test(v) || 'Please enter a valid phone number'
                ],
                validateEmail: [
                    v => !!v || 'This field is required',
                    v => /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{3}.?[A-z]{0,3}$/.test(v) ||
                        'Please enter a valid email address'
                ],
                validateOptionalEmail: [
                    v => /^([0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{3}.?[A-z]{0,3})?$/.test(v) ||
                        'Please enter a valid email address'
                ],
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