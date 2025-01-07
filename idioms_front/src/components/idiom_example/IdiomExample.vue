<template>
    <div @click="test">Test</div>
</template>

<script>
    export default {
        name:'IdiomExample',
        data() {
            return {
                unit1: '',
            }
        },
        methods: {
            test() {
                console.log(localStorage.getItem("id"));
            }
        }
    }
</script>

<style></style>