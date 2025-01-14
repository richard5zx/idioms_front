<template>
    <table width="90%" align="center" border="1">
        <tr align="center">
            <td colspan="2">
                <h1>Idiom</h1>
            </td>
        </tr>
        <tr align="center">
            <td colspan="2">
                <h4>
                    {{ this.idiom }}
                </h4>
            </td>
        </tr>
        <tr align="center">
            <td width="20%">Example Id</td>
            <td>Examples</td>
        </tr>
        <tr v-for="example in examples" :key="example.exampleId" align="center">
            <td>{{ example.exampleId }}</td>
            <td>{{ example.example }}</td>
        </tr>
    </table>

    <table width="90%" align="center" border="1">
        <tr align="center">
            <td>Update Example</td>
            <td>Add Example</td>
            <td>Delete Example</td>
        </tr>
        <tr align="center">
            <td><input type="text" v-model="updateExampleId" placeholder="Id" size="4"></td>
            <td rowspan="2"><input type="text" v-model="addExample" placeholder="New Example" size="35"></td>
            <td rowspan="2"><input type="text" v-model="deleteExampleId" placeholder="Id" size="4"></td>
        </tr>
        <tr align="center">
            <td ><input type="text" v-model="updateExample" placeholder="Updated Example" size="35"></td>
            
        </tr>
        <tr align="center">
            <td>
                <button @click="updateIdiomExample()">Update</button>
            </td>
            <td>
                <button @click="addIdiomExample()">Add</button>
            </td>
            <td>
                <button @click="deleteIdiomExample()">Delete</button>
            </td>
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
            examples: [],
            idiom: '',
            updateExampleId:'',
            updateExample: '',
            addExample: '',
            deleteExampleId: '',
            message:''
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
    }, 
    methods: {
        updateIdiomExample() {
            // URL subject to change
            var url = "http://192.168.100.92:8080/idiomExample/updateIdiomExample";
            var data = {
                "exampleId": this.updateExampleId,
                "example": this.updateExample
            };
            axios
                .put(url, data)
                .then(response => this.message = response.data)
                .catch(function (error) {
                    console.log(error);
                });
            console.log();
            alert("Example Updated");
            this.clearTable();
            this.refreshPage();
        },
        addIdiomExample() {
            var id = localStorage.getItem("id");
            var url = "http://192.168.100.92:8080/idiomExample/createIdiomExample";
            var data = {
                "idiomId": id,
                "example": this.addExample
            };
            axios
                .post(url, data)
                .then(response => this.message = response.data)
                .catch(function (error) {
                    console.log(error);
                });
            console.log();
            alert("Example Added");
            this.clearTable();
            this.refreshPage();
        },
        deleteIdiomExample() {
            var url = "http://192.168.100.92:8080/idiomExample/deleteIdiomExample";
            axios
                .delete(url + "/" + this.deleteExampleId)
                .then(response => this.message = response.data)
                .catch(function (error) {
                    console.log(error);
                });
            console.log();
            alert("Example Deleted");
            this.clearTable();
            this.refreshPage();
        },
        clearTable() {
            this.updateExampleId = '';
            this.updateExample = '';
            this.addExample = '';
            this.deleteExampleId = '';
        },
        refreshPage() {
            this.$router.go(0);
        }
    }
    
}
</script>

<style></style>