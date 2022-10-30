<script setup>
import Tables from "../components/Tables.vue";
import pageMetaVue from "../components/partials/pageMeta.vue";
</script>
<template>
  <div>
    <pageMetaVue>
      <template #titlePG>Tables</template>
      <template #metaPara>
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        Docs
      </template>
    </pageMetaVue>
    <!-- DataTales Example -->
    <Tables />
  </div>
</template>
