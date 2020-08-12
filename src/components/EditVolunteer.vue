<template>
    <v-dialog v-model="edit_dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-list-item-action v-bind="attrs" v-on="on">
                <v-btn text color="primary">
                    Edit
                </v-btn>
            </v-list-item-action>
        </template>

        <v-card max-width="600" class="text-left">
            <v-card-text>
                <v-card-title class="headline">
                    Edit {{parentData.name.First}} {{parentData.name.Last}}
                </v-card-title>
                <v-form
                        ref="form"
                        v-model="valid"
                >
                    <v-expansion-panels :hover=true :multiple=true :flat=true>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Personal Info
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="First Name"
                                                v-model="first_name"
                                                :rules="required"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Last Name"
                                                v-model="last_name"
                                                :rules="required"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                placeholder="Street Number"
                                                v-model="street_number"
                                                :rules="required"
                                        />
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field
                                                placeholder="Street Name"
                                                v-model="street_name"
                                                :rules="required"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field
                                                placeholder="City"
                                                v-model="city"
                                                :rules="required"
                                        />
                                    </v-col>
                                    <v-col cols="5">
                                        <v-select
                                                v-model="state"
                                                :items="states"
                                        ></v-select>
<!--                                        <v-text-field-->
<!--                                                placeholder="State"-->
<!--                                                v-model="state"-->
<!--                                                :rules="required"-->
<!--                                        />-->
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                placeholder="Zip"
                                                v-model="zip"
                                                :rules="validateZip"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Home Number"
                                                v-model="home_number"
                                                :rules="validatePhoneNumber"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Cell Number"
                                                v-model="cell_number"
                                                :rules="validatePhoneNumber"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Work Number"
                                                v-model="work_number"
                                                :rules="validateOptionalPhoneNumber"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Email"
                                                v-model="email"
                                                :rules="validateEmail"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox
                                                v-model="license_on_file"
                                                label="License on File"
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox
                                                v-model="social_on_file"
                                                label="Social on File"
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Emergency Contact Info
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field cols="2"
                                              placeholder="First Name"
                                              v-model="ec_first_name"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field cols="2"
                                              placeholder="Last Name"
                                               v-model="ec_last_name"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                placeholder="Street Number"
                                                v-model="ec_street_number"
                                        />
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field
                                                placeholder="Street Name"
                                                v-model="ec_street_name"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field
                                                placeholder="City"
                                                v-model="ec_city"
                                        />
                                    </v-col>
                                    <v-col cols="5">
                                        <v-select
                                                :items="states"
                                                v-model="ec_state"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                placeholder="Zip"
                                                v-model="ec_zip"
                                                :rules="validateECZip"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Home Number"
                                                v-model="ec_home_phone"
                                                :rules="validateOptionalPhoneNumber"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Work Number"
                                                v-model="ec_work_phone"
                                                :rules="validateOptionalPhoneNumber"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Email"
                                                v-model="ec_email"
                                                :rules="validateOptionalEmail"
                                        />
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Education
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Institution Name"
                                                v-model="ins_name"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Major"
                                                v-model="major"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.education.Type"
                                                placeholder="Degree Type"
                                        />
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Availability
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Monday"
                                                v-model="monday"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Tuesday"
                                                v-model="tuesday"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                lable="Wednesday"
                                                v-model="wednesday"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Thursday"
                                                v-model="thursday"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                placeholder="Friday"
                                                v-model="friday"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3">
                                        <v-text-field
                                                placeholder="Saturday"
                                                v-model="saturday"
                                        />
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                                placeholder="Sunday"
                                                v-model="sunday"
                                        />
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Skills
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-textarea
                                        placeholder="Please list all skills separated by a comma"
                                        v-model="skills"
                                ></v-textarea>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Licenses
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-textarea
                                                placeholder="Please list all licenses separated by a comma"
                                                v-model="licenses"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="closeDialog">
                    Cancel
                </v-btn>
                <v-btn :disabled="!valid" color="primary" text @click="saveEditsVolunteers">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditVolunteer",
        first_name: '',
        methods: {
            closeDialog() {
                this.edit_dialog = false;
            },
            saveEditsVolunteers(){
                this.parentData.name.First = this.first_name;
                this.parentData.name.Last = this.last_name;
                this.parentData.address.StreetNumber = this.street_number;
                this.parentData.address.StreetName = this.street_name;
                this.parentData.address.City = this.city;
                this.parentData.address.State = this.state;
                this.parentData.address.Zip = this.zip;
                this.parentData.numbers.Home = this.home_number;
                this.parentData.numbers.Cell = this.cell_number;
                this.parentData.numbers.Work = this.work_number;
                this.parentData.email = this.email;
                this.parentData.license_on_file = this.license_on_file == "true" ? true : false;
                this.parentData.social_on_file = this.social_on_file == "true" ? true: false;
                this.parentData.emergency_contact.name.First = this.ec_first_name;
                this.parentData.emergency_contact.name.Last = this.ec_last_name;
                this.parentData.emergency_contact.address.StreetNumber = this.ec_street_number;
                this.parentData.emergency_contact.address.StreetName = this.ec_street_name;
                this.parentData.emergency_contact.address.City = this.ec_city;
                this.parentData.emergency_contact.address.State = this.ec_state;
                this.parentData.emergency_contact.address.Zip = this.ec_zip;
                this.parentData.emergency_contact.numbers.Home = this.ec_home_phone;
                this.parentData.emergency_contact.numbers.Work = this.ec_work_phone;
                this.parentData.emergency_contact.email = this.ec_email;
                this.parentData.education.Name = this.ins_name;
                this.parentData.education.Major = this.major;
                this.parentData.education.Type = this.type;
                this.parentData.times.Monday = this.monday;
                this.parentData.times.Tuesday = this.tuesday;
                this.parentData.times.Wednesday = this.wednesday;
                this.parentData.times.Thursday = this.thursday;
                this.parentData.times.Friday = this.friday;
                this.parentData.times.Saturday = this.saturday;
                this.parentData.times.Sunday = this.sunday;
                this.parentData.skills = this.skills.split(",");
                this.parentData.licenses = this.licenses.split(",");
                this.closeDialog();
            }
        },
        props:{
            parentData: Object,
            states: Array
        },
        data(){
            return {
                edit_dialog: false,
                first_name: this.parentData.name.First,
                last_name: this.parentData.name.Last,
                street_number: this.parentData.address.StreetNumber,
                street_name: this.parentData.address.StreetName,
                city: this.parentData.address.City,
                state: this.parentData.address.State,
                zip: this.parentData.address.Zip,
                home_number: this.parentData.numbers.Home,
                cell_number: this.parentData.numbers.Cell,
                work_number: this.parentData.numbers.Work,
                email: this.parentData.email,
                license_on_file: this.parentData.license_on_file,
                social_on_file: this.parentData.social_on_file,
                ec_first_name: this.parentData.emergency_contact.name.First,
                ec_last_name: this.parentData.emergency_contact.name.Last,
                ec_street_number: this.parentData.emergency_contact.address.StreetNumber,
                ec_street_name: this.parentData.emergency_contact.address.StreetName,
                ec_city: this.parentData.emergency_contact.address.City,
                ec_state: this.parentData.emergency_contact.address.State,
                ec_zip: this.parentData.emergency_contact.address.Zip,
                ec_home_phone: this.parentData.emergency_contact.numbers.Home,
                ec_work_phone: this.parentData.emergency_contact.numbers.Work,
                ec_email: this.parentData.emergency_contact.email,
                ins_name: this.parentData.education.Name,
                major: this.parentData.education.Major,
                type: this.parentData.education.Type,
                monday: this.parentData.times.Monday,
                tuesday: this.parentData.times.Tuesday,
                wednesday: this.parentData.times.Wednesday,
                thursday: this.parentData.times.Thursday,
                friday: this.parentData.times.Friday,
                saturday: this.parentData.times.Saturday,
                sunday: this.parentData.times.Sunday,
                skills: this.parentData.skills.join(),
                licenses: this.parentData.licenses.join(),
                valid: true,
                required: [
                    v => !!v || 'This field is required'
                ],
                validateZip: [
                    v => !!v || 'This field is required',
                    v => /^[0-9]{5}(?:-[0-9]{4})?/.test(v) || 'Please enter a valid zip code'
                ],
                validateECZip: [
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
                ]
            }
        }
    }
</script>