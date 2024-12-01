<template>
    <table width="80%" align="center" border="1">
        <tr>
            <td>Idiom Id</td>
            <td>Idiom</td>
            <td>definition</td>
            <td>Language</td>
        </tr>
        <tr v-for="idiom in info" :key="idiom.idiomId">
            <td>{{ idiom.idiomId }}</td>
            <td>{{ idiom.idiom }}</td>
            <td>{{ idiom.definition }}</td>
            <td>{{ idiom.language }}</td>
        </tr>
    </table>
    
</template>

<script>

import axios from 'axios';
export default {
    name: 'SearchIdiom',
    data() {
        return {
            idiomId: '',
            idiom: '',
            definition: '',
            language: '',
            info: [],
            
        }
    },
    mounted() {
        axios
            .get("http://192.168.1.136:8080/idiom/getAllIdiom")
            .then(response => this.info = response.data)
            .catch(function(error) {
                console.log(error);
            });
    }
}
</script>

<style></style>