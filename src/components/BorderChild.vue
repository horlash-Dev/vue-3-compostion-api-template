<template lang="">
  <div class="col-lg-3">
    <div class="card mb-4 py-3" :class="cborder">
      <div class="card-body">{{ listItem.name }}</div>
      <a href="#" class="text-right px-2" @click.prevent="remove(id)">
        <small class="badge badge-danger">remove</small>
      </a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  listItem: Object,
  cborder: String,
  id: Number,
});

const emit = defineEmits(["removeBorder"]);
const remove = (id) => emit("removeBorder", id);
</script>
<style lang=""></style>
