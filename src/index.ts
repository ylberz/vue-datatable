import datatable from "./components/datatable.vue";
import 'bootstrap-icons/font/bootstrap-icons.css';
export default {
    install(app:any) {
        app.component("vue3datatable", datatable);
    },
};
