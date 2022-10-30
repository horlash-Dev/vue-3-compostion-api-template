import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "/assets/vendor/jquery/jquery.js";
import "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "/assets/vendor/jquery-easing/jquery.easing.js";

import Login from "@/views/auth/Login.vue";

const app = createApp(Login);

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

app.mount("#loginpg");
