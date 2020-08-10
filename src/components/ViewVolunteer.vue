<template>
    <v-dialog v-model="view_volunteer_dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-list-item-action v-bind="attrs" v-on="on">
                <v-list-item-icon>
                    <v-icon :color=getStatusColor(item.status)>mdi-face</v-icon>
                </v-list-item-icon>
            </v-list-item-action>
        </template>

        <v-card max-width="600" class="text-left">
            <v-card-text>
                <div>
                  <v-row>
                      <v-col>
                          <div class="display-3 text--primary">{{item.name.First}} {{item.name.Last}}</div>
                          <div>{{item.email}} | {{item.numbers.Home}}</div>
                          <div>{{item.education.Name}} - {{item.education.Major}} | {{item.education.Type}}</div>
                          <div>{{item.license_on_file ? 'License on file' : 'License not on file'}} |
                              {{item.social_on_file ? 'Social on file' : 'Social not on file'}}</div>
                      </v-col>
                    <v-col cols="4">
                        <v-select v-model="status" :items="statuses" single-line hint="Volunteer Status"
                                  persistent-hint @change="changeStatus"></v-select>
                    </v-col>
                  </v-row>

                    <v-row>
                        <v-col>
                            {{item.address.StreetNumber}} {{item.address.StreetName}}<br>
                            {{item.address.City}}, {{item.address.State}} {{item.address.Zip}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <p><strong>Available Times</strong></p>
                    </v-row>
                    <v-row>
                        <v-col>Monday</v-col>
                        <v-col>Tuesday</v-col>
                        <v-col>Wednesday</v-col>
                        <v-col>Thursday</v-col>
                        <v-col>Friday</v-col>
                        <v-col>Saturday</v-col>
                        <v-col>Sunday</v-col>
                    </v-row>
                    <v-row class="text-center">
                        <v-col>{{item.times.Monday}}</v-col>
                        <v-col>{{item.times.Tuesday}}</v-col>
                        <v-col>{{item.times.Wednesday}}</v-col>
                        <v-col>{{item.times.Thursday}}</v-col>
                        <v-col>{{item.times.Friday}}</v-col>
                        <v-col>{{item.times.Saturday}}</v-col>
                        <v-col>{{item.times.Sunday}}</v-col>
                    </v-row>
                    <v-row>
                        <p><strong>Skills</strong></p>
                    </v-row>
                    <v-row>
                        <v-col>
                            <span v-for="skill in item.skills" :key="skill">{{skill}} </span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p><strong>Licences</strong></p>
                    </v-row>
                    <v-row>
                        <v-col>
                            <span v-for="license in item.licenses" :key="license">{{license}} </span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p><strong>Emergency Contact</strong></p>
                    </v-row>
                    <v-row>
                        <v-col>
                            {{item.emergency_contact.name.First}} {{item.emergency_contact.name.Last}}<br/>
                            {{item.emergency_contact.address.StreetNumber}} {{item.emergency_contact.address.StreetName}}<br/>
                            {{item.emergency_contact.address.City}}, {{item.emergency_contact.address.State}} {{item.emergency_contact.Zip}}<br/>
                            Home: {{item.emergency_contact.numbers.Home}} | Work: {{item.emergency_contact.numbers.Work}}<br/>
                            Email: {{item.emergency_contact.email}}
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <EditVolunteer :parent-data="item"/>
                <v-btn color="blue darken-1" text @click="view_volunteer_dialog=false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    import EditVolunteer from "@/components/EditVolunteer";
    export default {
        name: "ViewVolunteer",
        components: {EditVolunteer},
        props:{
            item: Object
        },
        methods:{
            getStatusColor(status){
                switch(status){
                    case 'pending':
                        return 'blue';
                    case 'disapproved':
                        return 'grey';
                    case 'inactive':
                        return 'black';
                }
                return 'green';

            },
            closeDialog(){
                this.view_volunteer_dialog = false;
            },
            changeStatus(){
                this.item.status = this.status.toLowerCase();
            }
        },
        data(){
            return{
                view_volunteer_dialog: false,
                status: this.item.status.charAt(0).toUpperCase() + this.item.status.slice(1),
                statuses: ['Pending','Approved','Disapproved','Inactive']
            }
        }
    }
</script>