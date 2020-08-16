<template>
    <v-dialog v-model="edit_dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs"
                    v-on="on" icon="true">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Edit Opportunity</span>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field cols="2" 
                    name="add-opp-name" 
                    placeholder="Center Name" 
                    :value="parentData.name" 
                    v-model="opp_name"></v-text-field>
                    <v-date-picker name="center-date" v-model="opp_date"></v-date-picker>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="edit_dialog=false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="saveNewOpportunity">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditOpportunity",
        methods: {
            closeDialog(){
                this.edit_dialog = false;
            },
            saveNewOpportunity(){
                this.parentData.name = this.opp_name;
                this.parentData.date = this.opp_date;
                this.closeDialog();
            }
        },
        props:{
            parentData: Object,
            edit: Boolean,
        },
        data(){
            return{
                edit_dialog : false,
                opp_name: this.parentData.name,
            } 
        }
    }
</script>

<style scoped>

</style>