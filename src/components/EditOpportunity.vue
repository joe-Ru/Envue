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
                    <v-text-field cols="2" name="add-opp-name" placeholder="Center Name" :value="parentData.name"></v-text-field>
                    <v-date-picker name="center-date"></v-date-picker>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="edit_dialog=false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="test">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditOpportunity",
        props:{
            parentData: Object,
            edit: Boolean,
        },
        data(){
            return{
                edit_dialog : false
            }
        }
    }
</script>

<style scoped>

</style>