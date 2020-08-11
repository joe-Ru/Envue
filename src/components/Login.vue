<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>
                                    Welcome to Envue
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            prepend-icon="mdi-account"
                                            v-model="input.username"
                                            type="text"
                                    ></v-text-field>
                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            v-model="input.password"
                                            type="password"
                                    ></v-text-field>
                                    <v-alert type="error" text v-if="loginIncorrect" >The username or password is incorrect</v-alert>
                                    <a hre="#" class="subtitle-2" color="primary">Reset Password</a>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        v-on:click="login()"
                                >
                                    Login
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                },
                loginIncorrect: false,
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$mockAccount.username && this.input.password == this.$mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "Home" });
                        this.$session.set('username', this.input.username);
                    } else {
                        this.loginIncorrect = true;
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>