<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
  import Layout  from "@/views/Layout.vue";
  export default {
    name: "App",
    components: {
      Layout
    },
  };
</script>

<style>
/* Global layout styles here */
</style>
