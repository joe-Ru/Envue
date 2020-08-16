<template>
    <v-main>
        <v-row>
            <v-col cols="4"></v-col>
            <v-data-table :search="search" :headers="headers" :items="opportunities" :items-per-page="53"
            class="elevation-1">
                <template v-slot:item="row">
                    <tr>
                        <td>{{row.item.name}}</td>
                        <td>{{row.item.date}}</td>
                        <td>
                            <EditOpportunity :parentData="row.item"/>
                            <v-btn class="mx-2" icon="true" color="primary" @click="edit_dialog=false">
                                <v-icon v-on:click="deleteOpportunity(row.item)">mdi-delete</v-icon>
                            </v-btn>
                            <v-btn v-on:click="viewMatches(row.item)">View Opportunity Matches</v-btn>
                        </td>
                    </tr>
                </template>
                <template v-slot:top>
                    <v-row class="ma-1">
                        <v-col>
                            <v-text-field placeholder="Search" v-model="search" append-icon="mdi-magnify"></v-text-field>
                        </v-col>
                        <v-col class="py-9">
                            <AddOpportunity v-on:addNewOpportunity="addNewOpportunity"/>
                        </v-col>
                    </v-row>
                </template>
            </v-data-table>
        </v-row>
    </v-main>
</template>

<script>
    import AddOpportunity from "@/components/AddOpportunity";

    import EditOpportunity from "@/components/EditOpportunity";

    class Opportunity {
        constructor(name, date) {
            this.name = name;
            this.date = date;
        }
    }
    class Volunteer {
        constructor(name, availibility){
            this.name = name;
            this.availibility = availibility;
        }
    }
    export default {
        name: "Opportunities",
        components: {
            AddOpportunity,
            EditOpportunity
        },
        index: 0,
        data() {
            return {
                headers: [
                    {
                        text: 'Center',
                        align: 'start',
                        sortable: true,
                        value: 'name',
                    },
                    {
                        text: 'Date',
                        align: 'start',
                        sortable: true,
                        value: 'date',
                    },
                ],
                opportunity_dialog: false,
                edit: false,
                add: false,
                search: '',     
                selected: 'Opportunities',
                opportunities: [
                    new Opportunity('This One', "2020-07-20"),
                    new Opportunity('That One', "2020-04-14"),
                    new Opportunity('That One', "2013-07-20"),
                    new Opportunity('That One', "2002-01-20"),
                    new Opportunity('That One', "2010-07-12"),
                    new Opportunity('The Other', "2004-06-31")
                ],
                volunteers:[
                    new Volunteer('Michael Jordan', ['8-8', null, null, '8-8', '8-8', null, '8-8']),
                    new Volunteer('Larry Bird', [null, '8-8', '8-8', '8-8', null, null, null]),
                    new Volunteer('Allen Iverson', ['8-8', '8-8', '8-8', '8-8', '8-8', '8-8', '8-8']),
                    new Volunteer('Magic Johnson', [null, null, null, null, null, null, null]),
                    new Volunteer('Scottie Pippen', [null, '8-8', '8-8', '8-8', '8-8', '8-8', null]),
                    new Volunteer("Shaquille O'neal", ['8-8', null, '8-8', null, '8-8', null, '8-8']),
                    new Volunteer('Kobe Bryant', [null, '8-8', null, '8-8', null, '8-8', null]),
                    new Volunteer('Wilt Chamberain', ['8-8', null, '8-8', '8-8', '8-8', '8-8', '8-8']),
                    new Volunteer('Lebron James', ['8-8', null, null, null, null, null, '8-8']),
                    new Volunteer('Dirk Nowitski', ['8-8', null, null, '8-8', '8-8', null, '8-8']),
                    
                ]
            }
        },
        add_dialog: false,
        edit_dialog: false,
        methods:{
            editItem(item){
                alert('edit selected');
                return item;
            },

            deleteItem(item){
                alert('delete selected');
                return item;
            },
            openViewOpportunityDialog(){
                this.add_dialog = true;
            },
            closeDialog(){
                // EditOpportunity.add_dialog = false;
                this.dialog = false;
                this.edit = false;

            },
            save(){
                //save actions
                this.closeDialog();
            },
            //added delete functionality
            deleteOpportunity(opportunity){
                //console.log(opportunity.name+' is the name and the date is '+opportunity.date);
                if(confirm('Are you sure you wish to delete "'+opportunity.name+'" from the list?')){
                    this.opportunities = this.opportunities.filter(opportunities => opportunities !== opportunity);
                }
            },
            //added add functionality
            addNewOpportunity(opportunity){
                var date = opportunity.date.split('-');
                if (date[1]<=9){
                    date[1]= date[1]% 10;
                }
                if(date[2]<=9){
                    date[2] = date[2]%10;
                }
                opportunity.date = date[1] + '/' +date[2] + '/' + date[0]%100;
                console.log(opportunity.date);
                this.opportunities.push(new Opportunity(
                    opportunity.name,
                    opportunity.date
                ));
            },
            viewMatches(opportunity){
                var date = opportunity.date.split('/');
                var sum = 0;
                for(var i=0;i<3;i++){
                    sum+=parseInt(date[i]);
                }
                sum = sum%7;
                var pplAvailable = [];
                for(var j = 0;j<this.volunteers.length-1;j++){
                    if(this.volunteers[j].availibility[sum] != null){
                        //console.log(this.$volunteers[i].name.First);
                        pplAvailable.push(this.volunteers[j].name);
                    }
                }
                //stores all matches in the pplAvailable array and displayed in the console
                for(var k = 0;k<pplAvailable.length;k++){
                    console.log(pplAvailable[k]);
                }
                alert(' volunteers matching the date are: '+pplAvailable);
                console.log('date is '+date);

            }
        },
        computed: {
            filteredList() {
                    return this.opportunities.filter(volunteer => {
                        return volunteer.name.toLowerCase().includes(this.search.toLowerCase())
                    })
            },
        }
    }
</script>

<style scoped>

</style>