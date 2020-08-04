<template>
    <div id="login">
      <h1>Welcome to Envue</h1>
      <h2>Please, login</h2>
      <input type="text" name="username" v-model="input.username" placeholder="Username" /><br/>
      <input type="password" name="password" v-model="input.password" placeholder="Password" /><br/>
      <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        input: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      login() {
        if(this.input.username != "" && this.input.password != "") {
          if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "Home" });
            this.$session.set('username', this.input.username);
          } else {
            console.log("The username and / or password is incorrect");
          }
        } else {
          console.log("A username and password must be present");
        }
      }
    }
  }
</script>

<style scoped>

</style>
