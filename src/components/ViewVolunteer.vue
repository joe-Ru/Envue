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
                          <div class="display-1">{{item.education.Name}} - {{item.education.Major}} | {{item.education.Type}}</div>
                          <div>{{item.email}} | {{item.numbers.Home}}</div>
                            {{item.address.StreetNumber}} {{item.address.StreetName}}<br>
                            {{item.address.City}}, {{item.address.State}} {{item.address.Zip}}
                      </v-col>
                  </v-row>
                    <v-row>
                        <v-col cols="5">
                          <div class="ma-0">{{item.license_on_file ? 'License on file' : 'License not on file'}} |
                              {{item.social_on_file ? 'Social on file' : 'Social not on file'}}</div>
                          <v-select
                                  v-model="status"
                                  :items="statuses"
                                  single-line
                                  @change="changeStatus"
                                  solo-inverted
                          ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="ma-0 pa-0">
                            <strong class="title">Available Times</strong>
                        </v-col>
                        <v-col class="ma-0 pa-0">Monday</v-col>
                        <v-col class="ma-0 pa-0">Tuesday</v-col>
                        <v-col class="ma-0 pa-0">Wednesday</v-col>
                        <v-col class="ma-0 pa-0">Thursday</v-col>
                        <v-col class="ma-0 pa-0">Friday</v-col>
                        <v-col class="ma-0 pa-0">Saturday</v-col>
                        <v-col class="ma-0 pa-0">Sunday</v-col>
                    </v-row>
                    <v-row class="text-left">
                        <v-col class="ma-0 pa-0">{{item.times.Monday}}</v-col>
                        <v-col class="ma-0 pa-0">{{item.times.Tuesday}}</v-col>
                        <v-col class="ma-0 pa-0">{{item.times.Wednesday}}</v-col>
                        <v-col class="ma-0 pa-0">{{item.times.Thursday}}</v-col>
                        <v-col class="ma-0 pa-0">{{item.times.Friday}}</v-col>
                        <v-col class="ma-0 pa-0">{{item.times.Saturday}}</v-col>
                        <v-col class="ma-0 pa-0">{{item.times.Sunday}}</v-col>
                    </v-row>
                    <br/>
                    <v-row>
                        <v-col cols="12" class="ma-0 pa-0">
                            <strong class="title">Skills</strong>
                        </v-col>
                        <v-col class="ma-0 pa-0">
                            <span v-for="skill in item.skills" :key="skill">{{skill}} </span>
                        </v-col>
                    </v-row>
                    <br/>
                    <v-row>
                        <v-col cols="12" class="ma-0 pa-0">
                            <strong class="title">Licenses</strong>
                        </v-col>
                        <v-col class="ma-0 pa-0">
                            <span v-for="license in item.licenses" :key="license">{{license}} </span>
                        </v-col>
                    </v-row>
                    <br/>
                    <v-row>
                        <v-col cols="12" class="ma-0 pa-0">
                            <strong class="title">Emergency Contact</strong>
                        </v-col>
                        <v-col class="ma-0 pa-0">
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
                <WarningDialog :item="item" :list="list" :parentDialog="view_volunteer_dialog"/>
                <EditVolunteer :states="states" :parent-data="item"/>
                <v-btn color="blue darken-1" text @click="view_volunteer_dialog=false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    import EditVolunteer from "@/components/EditVolunteer";
    import WarningDialog from "@/components/WarningDialog";
    export default {
        name: "ViewVolunteer",
        components: {WarningDialog, EditVolunteer},
        props:{
            item: Object,
            list: Array,
            states: Array
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