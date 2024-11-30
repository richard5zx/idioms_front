<template>
    <table width="80%" border="1">
        <tr>
            <td colspan="2" align="center">Update Idiom</td>
        </tr>
        <tr>
            <td>Idiom Id</td>
            <td><input type="text" v-model="idiom_id" size="70"></td>
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
            <td colspan="2" align="center">
                <button @click="updateIdiom()">Update Idiom</button>
            </td>
        </tr>
        <tr v-if="hasMessage()" colspan="2" align="center">
            <td>
                {{ message }}
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UpdateIdiom',
    data() {
        return {
            idiom_id:'',
            idiom:'',
            definition:'',
            language:'',
            message:''            
        }
    },
    methods: {
        updateIdiom() {
            var url = "http://192.168.1.136:8080/idiom/updateIdiom";
            var data = {
                "idiom_id": this.idiom_id,
                "idiom": this.idiom,
                "definition": this.definition,
                "language": this.language
            };
            axios
                .put(url, data)
                .then(response => this.message = response.data)
                .catch(function (error) {
                    console.log(error);
                });
            //this.clearTable();
        },
        clearTable() {
            this.idiom_id = '';
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

<style></style>