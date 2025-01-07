<template>
    <table width="80%" border="1">
        <tr>
            <td>Idiom</td>
            <td>Idiomxxxx</td>
        </tr>
    </table>

    <h1>Examples</h1>
    <table width="80%" align="center" border="1">
        <tr>
            <td width="20%">Example Id</td>
            <td>Example</td>
        </tr>
        <tr v-for="example in examples" :key="example.exampleId">
            <td>{{ example.exampleId }}</td>
            <td>{{ example.example }}</td>
        </tr>
    </table>

    <h1>Update</h1>
    <h1>Delete</h1>
</template>

<script>

import axios from 'axios';
export default {
    name: 'IdiomExample',
    
    data() {
        return {
            exampleId: '',
            idiomId: '',
            examples: [],
        }
    },
    mounted() {
        var id = localStorage.getItem("id");
        // Subject to change
        var url = "http://192.168.100.92:8080/idiomExample/getIdiomExampleByIdiomId";
        axios
            .get(url + "/" + id)
            .then(response => this.examples = response.data)
            .catch(function(error) {
                console.log(error);
            });
    }
    
}
</script>

<style></style>