import { createApp } from "vue";

import "vue-toastification/dist/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
const app = createApp(App);

import { createPinia } from "pinia";
app.use(createPinia());

import router from "@/router";
app.use(router);

import Toast, { useToast } from "vue-toastification";
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
});

import api from "@/api/api";
import { currentUserStore } from "@/stores/current-user";
const toast = useToast();
app.use(api, { currentUserStore, router, toast });

import { i18n } from "@/locales/i18n";
app.use(i18n);

app.mount("#app");
