<script setup>
import Border from "@/components/Border.vue";
import pageMetaVue from "../components/partials/pageMeta.vue";
</script>
<template>
  <div>
    <pageMetaVue>
      <template #titlePG>Borders</template>
      <template #metaPara>
        Boeders is a third party plugin that is used to generate the demo table
        below. For more information about DataTables, please visit the Docs
      </template>
    </pageMetaVue>

    <Border />
  </div>
</template>
