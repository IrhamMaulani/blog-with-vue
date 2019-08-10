import BlogList from "./components/BlogList.vue";
import NotFound from './components/NotFound.vue';
import DataTable from './components/DataTable.vue';
import AddBlog from './components/AddBlog.vue';
import BlogContent from './components/BlogContent.vue';

export default [{
        path: '/',
        component: BlogList
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/data',
        component: DataTable
    },
    {
        path: '/add-blog',
        component: AddBlog
    },
    {
        path: '/blog/:id',
        component: BlogContent
    }
]