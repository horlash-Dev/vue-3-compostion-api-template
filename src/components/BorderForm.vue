<template lang="">
  <div>
    <div class="card-body">
      <form @submit.prevent="$emit('addBorder')" action="">
        <div class="form-group">
          <label for=""></label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            v-model="form.name"
            placeholder="name"
            aria-describedby="helpId"
          />
          <small id="helpId" class="text-muted">Border Name</small>
        </div>

        <div class="form-group">
          <label for=""></label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="tag"
            v-model="form.tag"
            aria-describedby="helpId"
          />
          <small id="helpId" class="text-muted">Border status tag</small>
        </div>
        <div class="row">
          <div class="form-group">
            <label for=""></label>
            <input
              type="submit"
              name=""
              id=""
              class="btn btn-secondary-dark btn-sm"
              placeholder=""
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group mx-2">
            <label for=""></label>
            <input
              type="reset"
              name=""
              id=""
              class="btn btn-dark btn-sm"
              placeholder=""
              aria-describedby="helpId"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
defineProps({
  form: Object,
});

defineEmits(["addBorder"]);
</script>
<style lang=""></style>
