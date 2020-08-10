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
                <v-form>
                    <v-expansion-panels :hover=true :multiple=true :flat=true>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Personal Info
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <label for="first_name">First Name</label>
                                        <input
                                                id="first_name"
                                                type="text"
                                                v-model="parentData.name.First"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.name.Last"
                                                label="Last Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="parentData.address.StreetNumber"
                                                label="Street Number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field
                                                v-model="parentData.address.StreetName"
                                                lable="Street Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field
                                                v-model="parentData.address.City"
                                                label="City"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                                v-model="parentData.address.State"
                                                label="State"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="parentData.address.Zip"
                                                label="Zip"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.numbers.Home"
                                                label="Home Number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.numbers.Cell"
                                                label="Cell Number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.numbers.Work"
                                                label="Work Number"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.email"
                                                label="Email Address"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox
                                                v-model="parentData.license_on_file"
                                                label="License on File"
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox
                                                v-model="parentData.social_on_file"
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
                                                  v-model="parentData.emergency_contact.name.First"
                                                  label="First Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field cols="2"
                                                  v-model="parentData.emergency_contact.name.Last"
                                                  label="Last Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="parentData.emergency_contact.address.StreetNumber"
                                                label="Street Number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="8" >
                                        <v-text-field
                                                v-model="parentData.emergency_contact.address.StreetName"
                                                label="Street Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field
                                                v-model="parentData.emergency_contact.address.City"
                                                label="City"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                                v-model="parentData.emergency_contact.address.State"
                                                label="State"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field
                                                v-model="parentData.emergency_contact.address.Zip"
                                                label="Zip"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.emergency_contact.numbers.Home"
                                                label="Home Number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.emergency_contact.numbers.Work"
                                                lablel="Work Number"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.emergency_contact.email"
                                                label="Email"
                                        ></v-text-field>
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
                                                v-model="parentData.education.Name"
                                                label="Institution Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.education.Major"
                                                label="Major"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.education.Type"
                                                label="Degree Type"
                                        ></v-text-field>
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
                                                v-model="parentData.times.Monday"
                                                label="Monday"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.times.Tuesday"
                                                label="Tuesday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.times.Wednesday"
                                                lable="Wednesday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.times.Thursday"
                                                label="Thursday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                                v-model="parentData.times.Friday"
                                                label="Friday"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3">
                                        <v-text-field
                                                v-model="parentData.times.Saturday"
                                                label="Saturday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field
                                                v-model="parentData.times.Sunday"
                                                label="Sunday"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Skills
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-text-field v-for="sk in parentData.skills" :key="sk" placeholder="skill" :value="sk"></v-text-field>
                                <v-btn color="primary">Add New Skill</v-btn><!--------TODO: Add Skill function------>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Licenses
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col>
                                        <v-text-field placeholder="license" v-for="lic in parentData.licenses" :key="lic" :value="lic"></v-text-field>
                                        <v-btn color="primary">Add New License</v-btn><!----TODO: Add License function---->
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
                    Back
                </v-btn>
<!--                <v-btn color="primary" text @click="saveEditsVolunteers">-->
<!--                    Save-->
<!--                </v-btn>-->
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
            }


        },
        props:{
            parentData: Object
        },
        data:() => ({
                edit_dialog: false,
                // first_name: '',

        })
    }
</script>