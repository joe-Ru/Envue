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
  <HelloWorld />

  <div class="scanlines"></div>
<div class="scanline"></div>
<div class="flicker"></div>
<div class="body"></div>
    <div id="nav">
    <pre>
 <h2> <span class="w">Hi there<span class="lg"></span></span> </h2>
</pre>
<span class="w"><router-link
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
        >Logout</router-link><span class="lg"></span></span>
      
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>


<style>
@import '../src/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
