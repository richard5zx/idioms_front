import {createRouter, createWebHistory} from 'vue-router';
import AddIdiom from '../components/idiom/AddIdiom.vue';
import SearchIdiom from '../components/idiom/SearchIdiom.vue';
import UpdateIdiom from '../components/idiom/UpdateIdiom.vue';
import DeleteIdiom from '../components/idiom/DeleteIdiom.vue';
import AddExample from '../components/idiom_example/AddExample.vue';
import SearchExample from '../components/idiom_example/SearchExample.vue';
import UpdateExample from '../components/idiom_example/UpdateExample.vue';
import DeleteExample from '../components/idiom_example/DeleteExample.vue';

const routes = [
    {path:'/AddIdiom', component:AddIdiom},
    {path:'/SearchIdiom', component:SearchIdiom},
    {path:'/UpdateIdiom', component:UpdateIdiom},
    {path:'/DeleteIdiom', component:DeleteIdiom},

    {path:'/AddExample', component:AddExample},
    {path:'/SearchExample', component:SearchExample},
    {path:'/UpdateExample', component:UpdateExample},
    {path:'/DeleteExample', component:DeleteExample},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;