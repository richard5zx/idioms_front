<template>
    <table width="80%" border="3">
        <tr align="center">
            <h1>Idiom</h1>
        </tr>
        <tr align="center">
            <td>{{ this.idiom }}</td>
        </tr>
    </table>

    <table width="80%" align="center" border="1">
        <tr align="center">
            <td width="20%">Example Id</td>
            <td>Examples</td>
        </tr>
        <tr v-for="example in examples" :key="example.exampleId" align="center">
            <td>{{ example.exampleId }}</td>
            <td>{{ example.example }}</td>
        </tr>
    </table>

    <table width="80%" align="center" border="1">
        <tr>
            <td colspan="2" align="center">Update Example</td>
        </tr>
        <tr>
            <td width="25%">Enter example id</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Enter new example</td>
            <td><input type="text"></td>
        </tr>
    </table>

    <table></table>
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
            idiom: ''
        }
    },
    mounted() {
        var id = localStorage.getItem("id");
        // URL subject to change
        var url1 = "http://192.168.100.92:8080/idiomExample/getIdiomExampleByIdiomId";
        axios
            .get(url1 + "/" + id)
            .then(response => this.examples = response.data)
            .catch(function(error) {
                console.log(error);
            })
        // URL subject to change
        var url2 = "http://192.168.100.92:8080/idiom/getIdiomByIdiomId";
        axios
            .get(url2 + "/" + id)
            .then(response => this.idiom = response.data)
            .catch(function(error) {
                console.log(error);
            });
    }
    
}
</script>

<style></style>