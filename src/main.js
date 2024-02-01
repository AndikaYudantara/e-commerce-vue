import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

library.add(faShoppingCart, faDollarSign);

const app = createApp(App);
const routes = [
  { path: "/", component: Products },
  { path: "/checkout", component: Checkout },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
