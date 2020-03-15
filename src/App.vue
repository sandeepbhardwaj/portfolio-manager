<template>
  <div id="main">
    <navbar />
   
    <div class="container is-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    navbar
  },
  data: () => ({
  })
};
</script>