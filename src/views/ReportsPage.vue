<template>
  <el-card class="report-card" shadow="hover">
    <h2>Reports</h2>
    <el-table
      :data="reports"
      style="width: 100%"
      stripe
      border
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="id" label="ID" width="60" />
      <el-table-column prop="name" label="Report Name" />
      <el-table-column prop="status" label="Status" width="120" />
      <el-table-column
        prop="date"
        label="Date"
        width="160"
        :formatter="formatDate"
        sortable
      />
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from "vue";

// Sample static data — replace with API or store data as needed
const reports = ref([
  { id: 1, name: "Sales Report Q1", status: "Completed", date: "2025-05-15" },
  {
    id: 2,
    name: "Marketing Report",
    status: "In Progress",
    date: "2025-06-01",
  },
  { id: 3, name: "Customer Feedback", status: "Pending", date: "2025-05-28" },
]);

// Format date nicely
function formatDate(row, column, cellValue) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(cellValue).toLocaleDateString(undefined, options);
}
</script>

<style scoped>
.report-card {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
