<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800"><slot name="dashTitle"></slot></h1>
    <router-link
      class="btn btn-primary btn-md shadow m-1"
      :to="{ name: 'tables' }"
      >Records</router-link
    >
  </div>
</template>
