<template>
        <v-footer static class="font-weight-medium" color="primary" dark flat>
            <v-col class="text-center" cols="12">
                <v-btn v-if="authenticated" >
                    <router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link>
                </v-btn>
            </v-col>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Envue</strong>
            </v-col>
        </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            authenticated: Boolean
        },
        methods: {
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style scoped>

</style>