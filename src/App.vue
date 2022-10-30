<script setup>
import "@/assets/admin.js";
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "./components/partials/Sidebar.vue";
import { useLoading } from "vue-loading-overlay";

const loader = useLoading();
const sec = ref(true);

onMounted(() => {
  pageLoad();
});

const pageLoad = () => {
  const page = loader.show(
    {
      container: sec.value,
      width: 150,
      height: 150,
      opacity: 1,
      backgroundColor: "#4e73df",
      color: "#fff",
    },
    {}
  );

  setTimeout(() => {
    page.hide();
  }, 800);
};
</script>

<template>
  <div id="wrapper" ref="sec">
    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Header />
        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
@import "@/assets/vendor/fontawesome-free/css/all.min.css";
@import "@/assets/css/sb-admin-2.min.css";
</style>
