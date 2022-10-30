<script setup>
import Datatable from "@/components/Datatable.vue";
//import DataTable from 'datatables.net-vue3';
import dummy from "./partials/tableDummy";

const columns = [{ data: "name" }, { data: "position" }, { data: "city" }];
</script>
<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Vue 3 DataTables Example
        </h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <Datatable
            :columns="columns"
            class="table table-bordered display"
            :data="dummy"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>City</th>
              </tr>
            </thead>

            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>City</th>
              </tr>
            </tfoot>
          </Datatable>
        </div>
      </div>
    </div>
  </div>
</template>
