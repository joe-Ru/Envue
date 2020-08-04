<template>
    <div>
        <form @submit="addOpportunity">
            <input type="text" v-model="title" name="title" placeholder="Add Opportunity"> 
            <input type="submit" value="Add" class="btn">
        </form>
    </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
export default {
    name: "AddOpportunity",
    data(){
        return{
            title:'',
            date:''
        }
    },
    methods:{
        addOpportunity(e){
            e.preventDefault();
            const newOpportunity = this.title;
            this.title='';
            this.$emit('add-opportunity', newOpportunity);
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
