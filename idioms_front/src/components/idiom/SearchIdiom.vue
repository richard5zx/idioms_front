<template>
    <table width="80%" align="center" border="1">
        <tr>
            <td colspan="4" align="center">Search Idioms</td>
        </tr>
        <tr>
            <td colspan="2">Enter Idiom (TBC)</td>
            <td colspan="1"><input type="text" v-model="idiomId" size="40"></td>
            <td colspan="1"><button>Search</button></td>
        </tr>
        <tr>
            <td width="20%">Idiom Id</td>
            <td>Idiom</td>
            <td>Definition</td>
            <td>Language</td>
        </tr>
        <tr v-for="idiom in paginatedIdioms" :key="idiom.idiomId">
            <td>{{ idiom.idiomId }}</td>
            <td>{{ idiom.idiom }}</td>
            <td>{{ idiom.definition }}</td>
            <td>{{ idiom.language }}</td>
        </tr>
    </table>
    <div id="nav" class="nav">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage == 1">Prev</button>
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: currentPage == page }">
            {{ page }}
        </button>
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage == totalPages">Next</button>
    </div>
    
    <table width="80%" align="center" border="1">
        <tr>
            <td colspan="3" align="center">Select Idiom Id</td>
        </tr>
        <tr>
            <td align="center">Enter Idiom Id</td>
            <td><input type="text" v-model="idiomIdSearch" size="40"></td>
            <td><button @click="GoToIdiom()">Go to Idiom</button></td>
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
            idioms: [],
            currentPage: 1,
            pageSize: 4,
            idiomIdSearch: ''
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.idioms.length / this.pageSize);
        },
        paginatedIdioms() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.idioms.slice(start, end);
        }
    },
    mounted() {
        // Subject to change
        var url = "http://192.168.100.92:8080/idiom/getAllIdiom";
        axios
            .get(url)
            .then(response => this.idioms = response.data)
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        GoToIdiom() {
            // Create Session
            localStorage.setItem("id", this.idiomIdSearch);
            
            // Vue Redirection
            this.$router.push({path: '/IdiomExample'});
        }
    }
}
</script>

<style>
    .nav {
        display: flex;
        justify-content: center;
    }
</style>