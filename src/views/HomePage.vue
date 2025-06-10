<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { useMainStore } from "../stores/mainStore";

const store = useMainStore();

onMounted(async () => {
  try {
    const response = await axios.get("https://api.example.com/dashboard-data");
    store.setDashboardData(response.data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});
</script>

<template>
  <div>
    <h1>Dashboard this is home page design</h1>
    <ul> 
      <!-- <li v-for="item in store.dashboardData" :key="item.id">
        {{ item.name }} - {{ item.value }}
      </li> -->
    </ul>
  </div>
</template>
