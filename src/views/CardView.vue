<template>
  <div>
    <dashMetaVue>
      <template #dashTitle>
        {{ routeName }}
      </template>
    </dashMetaVue>
    <Cards />
  </div>
</template>

<script setup>
import Cards from "../components/Cards.vue";
import dashMetaVue from "../components/partials/dashMeta.vue";
const routeName = "Cards";
</script>
