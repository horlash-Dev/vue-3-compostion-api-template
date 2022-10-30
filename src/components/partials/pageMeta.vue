<template>
  <h1 class="h3 mb-1 text-gray-800"><slot name="titlePG"></slot></h1>
  <p class="mb-4">
    <slot name="metaPara"></slot>
  </p>

  <a class="btn btn-primary btn-md shadow m-1 mb-3" @click="redirect"
    >GO BACK</a
  >
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const redirect = () => router.back();
</script>
