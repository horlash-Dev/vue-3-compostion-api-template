import { ref, reactive } from "vue";
import { useToast } from "vue-toastification";

import dummy from "../partials/dummyData";
const getDummy = ref(dummy);
const toast = useToast();

const form = reactive({ name: null, tag: null });

const addBorder = async () => {
  const { name, tag } = form;
  if (!name || !tag) return toast.warning("Kindly fill in the Blank.");
  let storeData = Object.create({ name, tag });
  // save to memory
  getDummy.value.unshift(storeData);
  // clean form
  form.name = null;
  form.tag = null;
  return toast.success("Border Added", { timeout: 30 });
};

const removeBorder = (id) => {
  // remove from list
  const sort = getDummy.value.filter((data, index) => index !== id);
  getDummy.value = sort;
  return toast.success("Border Deleted", { timeout: 30 });
};

export { addBorder, removeBorder, getDummy, form };
