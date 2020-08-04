<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view @authenticated="setAuthenticated" />
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'App',
      data() {
        return {
          authenticated: false,
          mockAccount: {
            username: "somename",
            password: "password"
          }
        }
      },
      mounted() {
        if(!this.authenticated) {
          this.$router.replace({ name: "Login" });
        }
      },
      methods: {
        setAuthenticated(status) {
          this.authenticated = status;
        },
        logout() {
          this.authenticated = false;
        }
      },
      components: {
        // Navigation: Navigation
      },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
