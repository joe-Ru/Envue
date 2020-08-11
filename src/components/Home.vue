<template>
    <v-main>
        <v-row>
            <v-col cols="12"><h1>Administrative Page</h1></v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
            <v-col cols="4"></v-col>
            <v-col cols="6">
                <v-radio-group v-model="selected" row>
                    <v-radio label="Manage Volunteers" name="selection" value="Volunteers"></v-radio>
                    <v-radio label="Manage Opportunities" name="selection" value="Opportunities"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <VolunteersPage v-if="selected==='Volunteers'"/>
        <OpportunitiesPage v-if="selected==='Opportunities'"/>
    </v-main>
</template>


<script>
    import VolunteersPage from '@/components/Volunteers'
    import Opportunities from "@/components/Opportunities";
    export default {
        name: "Home",
        components:{
            OpportunitiesPage: Opportunities,
            VolunteersPage: VolunteersPage
        },
        data() {
            return {
                selected: 'Opportunities'
            }
        }

    }
</script>