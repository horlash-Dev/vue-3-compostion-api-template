<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">
        My Vue 3 Admin <sup>template</sup>
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item" :class="active == 'home' ? 'active' : ''">
      <router-link class="nav-link" :to="{ path: '/' }">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></router-link
      >
    </li>
    <li class="nav-item" :class="active == 'tables' ? 'active' : ''">
      <router-link class="nav-link" :to="{ name: 'tables' }">
        <i class="fas fa-fw fa-table"></i> Tables
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Interface</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Components:</h6>
          <router-link
            class="collapse-item"
            :class="active == 'borders' ? 'active' : ''"
            :to="{ name: 'borders' }"
            >Borders</router-link
          >
          <router-link
            class="collapse-item"
            :class="active == 'cards' ? 'active' : ''"
            :to="{ name: 'cards' }"
            >Cards</router-link
          >
        </div>
      </div>
    </li>

    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Login Screens:</h6>
          <a class="collapse-item" href="/login/" target="_blank">Login</a>
          <a class="collapse-item" href="/register/" target="_blank"
            >Register</a
          >
        </div>
      </div>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
      <img
        class="sidebar-card-illustration mb-2"
        src="@/assets/img/undraw_rocket.svg"
        alt="..."
      />
      <p class="text-center mb-2">
        <strong>SB Admin Pro</strong> is packed with premium features,
        components, and more!
      </p>
      <a
        class="btn btn-success btn-sm"
        href="https://startbootstrap.com/theme/sb-admin-pro"
        >Upgrade to Pro!</a
      >
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>
<script setup>
import { onMounted, watch, ref } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
const route = useRoute();
const active = ref("");

watch(
  () => route.name,
  (newActive) => {
    active.value = newActive;
  }
);
</script>
<style></style>
