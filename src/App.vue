<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "test",
                    password: "test"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
};
</script>

<template>
  <div id="app">
  <HelloWorld msg="Testing" />
    <div id="nav">
      <router-link
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
        >Logout</router-link
      >
    </div>
    <router-view @authenticated="setAuthenticated" />
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
