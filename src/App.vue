<template>
  <div id="main">
    <navbar />
    <br>
    <b-container>
      <router-view></router-view>
    </b-container>
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