import datatable from "./components/datatable.vue";

export default {
    install(app:any) {
        app.component("vue3datatable", datatable);
    },
};
