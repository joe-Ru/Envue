<template>
  <div id="app">
    <v-app>
      <v-content>
        <router-view @authenticated="setAuthenticated"/>
        <Footer :authenticated="authenticated"/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
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
      Footer: Footer
      // Navigation: Navigation
    },
  }
</script>

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
