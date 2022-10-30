<script setup>
import { ref, inject, unref } from "vue";

import BorderChild from "./BorderChild.vue";
import BorderForm from "./BorderForm.vue";

import {
  getDummy,
  form,
  addBorder,
  removeBorder,
} from "./composables/useBorder";
import { useLoad } from "./composables/useLoader";

const loader = inject("$loading");
const formCard = ref(false);
const loaderInit = ref(false);

const classBorder = (status) => "border-left-" + status;
const txtCaps = { "text-capitalize": true };

const showForm = () => {
  formCard.value = !formCard.value;
  loaderInit.value = !loaderInit.value;
  setTimeout(() => {
    useLoad(loader, unref(loaderInit));
  }, 5);
};

const cancelForm = () => {
  formCard.value = !formCard.value;
};
</script>
<template>
  <div>
    <div class="row" ref="border">
      <div class="col-lg-9" :class="txtCaps">
        <h3>
          Custom border sample (kindly create your own order with vue ui effect)
        </h3>
      </div>

      <div class="col-lg-3">
        <div class="card shadow mb-4">
          <a
            href="#collapseCardExample"
            class="d-block card-header py-3"
            data-toggle="collapse"
            role="button"
            aria-expanded="true"
            aria-controls="collapseCardExample"
          >
            <h6 class="m-0 font-weight-bold text-primary" :class="txtCaps">
              add borders sample
            </h6>
          </a>
          <div
            class="collapse show text-center p-2 m-3"
            id="collapseCardExample"
          >
            <a
              href="#"
              @click="showForm"
              v-if="!formCard"
              :class="txtCaps"
              class="btn btn-sm btn-dark border-0"
              >show form</a
            >
            <a
              href="#"
              @click="cancelForm"
              v-else="formCard"
              :class="txtCaps"
              class="btn btn-sm btn-danger border-0"
              >Cancel Form</a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-12 p-2 m-2" v-if="formCard">
        <div
          class="card shadow rounded"
          ref="loaderInit"
          id="collapcseCardExample"
        >
          <BorderForm @add-border="addBorder" :form="form" />
        </div>
      </div>
      <TransitionGroup name="fade" mode="out-in">
        <BorderChild
          v-for="(item, index) in getDummy"
          :key="index"
          :listItem="item"
          :cborder="classBorder(item.tag)"
          :id="index"
          @remove-border="removeBorder"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
<style>
@keyframes myfade {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-enter-active {
  animation: myfade 1s linear 0s 1 normal forwards;
}
.fade-leave-active {
  animation: myfade 1s linear 0s 1 reverse none;
}
</style>
