<template>
  <div class="container" ref="secLogin">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="submitForm">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="form.email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        v-model="form.password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Go Home
                    </button>
                    <hr />
                    <a href="#" class="btn btn-google btn-user btn-block">
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="#" class="btn btn-facebook btn-user btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </a>
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class="small" href="#">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="/register/">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useToast } from "vue-toastification";
import { ref, reactive, onMounted } from "vue";
import { useLoading } from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const loader = useLoading();
const toast = useToast();

const secLogin = ref(true);

const pageLoad = () => {
  const page = loader.show({
    container: secLogin.value,
    width: 150,
    height: 150,
    opacity: 1,
    backgroundColor: "#4e73df",
    color: "#fff",
  });

  setTimeout(() => {
    page.hide();
  }, 2000);
};
const form = reactive({ email: null, password: null });

const submitForm = () => {
  const { password, email } = form;
  if (!password || !email)
    return toast.warning("Kindly fill in the Required Field");
  form.name = null;
  form.tag = null;
  toast.success("Logged In Success", { timeout: 150 });
  const redirect = window.location.protocol + "//" + window.location.host;
  window.location.assign(redirect);
};
onMounted(() => {
  pageLoad();
});
</script>
<style>
@import "@/assets/vendor/fontawesome-free/css/all.min.css";
@import "@/assets/css/sb-admin-2.min.css";

.bg-login-image {
  background: url("../../../public/a-bg.jpg");
  background-position: top center;
  background-size: cover;
}
</style>
