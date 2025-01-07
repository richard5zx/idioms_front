<template>
    <table width="40%" border="1">
        <tr>
            <td colspan="2" align="center">Delete Idiom</td>
        </tr>
        <tr>
            <td>Idiom Id</td>
            <td><input type="text" v-model="idiomId"></td>
        </tr>
        <tr>
            <td colspan=2 align="center">
                <button @click="deleteIdiom()">Delete Idiom</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'
    export default {
        name:'DeleteIdiom',
        
        data() {
            return {
                idiomId: ''
            }
        },
        methods: {
            deleteIdiom() {
                // Subject to change
                var url = "http://192.168.100.92:8080/idiom/deleteIdiom";
                axios
                    .delete(url + "/" + this.idiomId)
                    .then(response => this.message = response.data)
                    .catch(function (error) {
                        console.log(error);
                    });
                var message = "Idiom Id:" + this.idiomId + " is deleted"
                alert(message);
                this.clearTable();
            },
            clearTable() {
                this.idiomId = '';
            },
        }
    }
</script>

<style>
</style>