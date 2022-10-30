import { createApp } from "vue";
import { createPinia } from "pinia";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import VueSmoothScroll from "vue3-smooth-scroll";

 import "/assets/vendor/jquery/jquery.js"
 import "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
 import "/assets/vendor/jquery-easing/jquery.easing.js"


import "animate.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const optionLoa = {
  // default false
  color: "#fff",
  loader: "dots",
  width: 80,
  height: 80,
  backgroundColor: "#000",
  opacity: 0.9,
   zIndex: 9999,
   blur: '5px',
   
};
app.use(createPinia());
app.use(router);
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  timeout: 3000,
  icon: true,
  position: "top-center",
  rtl: true,
  draggable: true,
});

app.use(VueLoading, optionLoa);
app.use(VueSmoothScroll)
app.mount("#app");
