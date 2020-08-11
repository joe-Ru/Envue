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
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </template>
                <template v-slot:top>
                    <v-row class="ma-1">
                        <v-col>
                            <v-text-field placeholder="Search" v-model="search" append-icon="mdi-magnify"></v-text-field>
                        </v-col>
                        <v-col class="py-9">
                            <AddOpportunity/>
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
                    new Opportunity('This One', "7/20/20"),
                    new Opportunity('That One', "4/14/20"),
                    new Opportunity('That One', "7/20/13"),
                    new Opportunity('That One', "1/20/02"),
                    new Opportunity('That One', "7/12/10"),
                    new Opportunity('The Other', "6/31/04")
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