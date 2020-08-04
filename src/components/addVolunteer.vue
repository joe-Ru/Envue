<template>
    <div>
        <form @submit="addVolunteer">
            <input type="text" v-model="title" name="title" placeholder="Add Volunteer">
            <input type="submit" value="Add" class="btn">
        </form>
    </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
export default {
    name: "AddVolunteer",
    data(){
        return{
            title:'',
            availibility:''
        }
    },
    methods:{
        addVolunteer(e){
            e.preventDefault();
            const newVolunteer = this.title;
            console.log("title is "+newVolunteer);
            this.title='';
            this.$emit('add-volunteer', newVolunteer);
        }
    }
}
</script>

<style scoped>
form {
    text-align: center;
}

input[type="text"]{
    padding: 5px;
    width: 150px;
    height: 5px;

}
input[type="submit"]{
    text-align: center;

}
</style>
