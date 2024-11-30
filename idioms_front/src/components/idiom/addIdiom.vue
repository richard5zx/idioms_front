<template>
    <table width="80%" border="1">
        <tr>
            <td colspan="2" align="center">Add Idiom</td>
        </tr>
        <tr>
            <td>Idiom</td>
            <td><input type="text" v-model="idiom" size="70"></td>
        </tr>
        <tr>
            <td>Definition</td>
            <td><input type="text" v-model="definition" size="70"></td>
        </tr>
        <tr>
            <td>Language</td>
            <td><input type="text" v-model="language" size="70"></td>
        </tr>
        <tr>
            <td colspan=2 align="center">
                <button @click="addIdiom()">Add Idiom</button>
            </td>
        </tr>
        <tr>
            <td v-if="hasMessage()" colspan=2 align=center>
                {{ message }} + Add New Idiom
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddIdiom',

    data() {
        return {
            idiom: '',
            definition: '',
            language: '',
            message: ''
        }
    },
    methods: {
        addIdiom() {
            var url = "http://192.168.122.1:8080/idiom/createIdiom";
            var data = {
                "idiom": this.idiom,
                "definition": this.definition,
                "language": this.language
            };
            axios
                .post(url, data)
                .then(response => this.message = response.data)
                .catch(function (error) {
                    console.log(error);
                });
            this.clearTable();
        },
        clearTable() {
            this.idiom = '';
            this.definition = '';
            this.language = '';
        },
        hasMessage() {
            if(this.message == '') {
                return false;
            }
            return true;
        }
    }
}
</script>

<style>
table {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
</style>