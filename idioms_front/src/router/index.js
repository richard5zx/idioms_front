import {createRouter, createWebHistory} from 'vue-router';
import AddIdiom from '../components/idiom/AddIdiom.vue';
import SearchIdiom from '../components/idiom/SearchIdiom.vue';
import UpdateIdiom from '../components/idiom/UpdateIdiom.vue';
import DeleteIdiom from '../components/idiom/DeleteIdiom.vue';
import IdiomExample from '../components/idiom_example/IdiomExample.vue';

const routes = [
    {path:'/AddIdiom', component:AddIdiom},
    {path:'/SearchIdiom', component:SearchIdiom},
    {path:'/UpdateIdiom', component:UpdateIdiom},
    {path:'/DeleteIdiom', component:DeleteIdiom},
    {path:'/IdiomExample', component:IdiomExample}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;