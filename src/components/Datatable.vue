<template>
  <div>
    <DataTable :data="data" :columns="columns" width="100%">
      <slot />
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from "datatables.net-vue3";
defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
  },
});
</script>
<style>
@import "datatables.net-dt";
</style>
