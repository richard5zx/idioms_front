<template>
    <table width="80%" align="center" border="1">
        <tr>
            <td colspan="4" align="center">Search Idioms</td>
        </tr>
        <tr>
            <td>Idiom Id</td>
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
    <div id="nav">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage == 1">Prev</button>
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: currentPage == page }">
            {{ page }}
        </button>
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage == totalPages">Next</button>
    </div>
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
            pageSize: 5,
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
        }
    }
}
</script>

<style>
</style>