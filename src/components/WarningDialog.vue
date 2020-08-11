<template>
    <v-dialog v-model="warning_dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-list-item-action v-bind="attrs" v-on="on">
                <v-btn color="red darken-1" text>Delete</v-btn>
            </v-list-item-action>
        </template>

        <v-card max-width="250" class="text-left">
            <v-card-title>Warning</v-card-title>
            <v-card-text>
                <v-alert>Once performed, this action cannot be undone. Continue?</v-alert>
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue darken-1" text @click="accept">Ok</v-btn>
                <v-btn color="blue darken-1" text @click="warning_dialog=false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "WarningDialog",
        props:{
            item: Object,
            list: Array,
            parent_dialog: Object
        },
        methods:{
          accept(){
              this.list.splice(this.list.indexOf(this.item), 1);
              this.warning_dialog = false;
              this.parent_dialog = false;
          },
        },
        data(){
            return {
                warning_dialog: false
            }
        }
    }
</script>