<template>
    <div class="columns">
    <div class="column is-3">
      <sideMenu />
    </div>

    <div class="column">
      <slot/>
    </div>
  </div>
</template>
<script>
import sideMenu from "@/components/Menu.vue";

export default {
  components: {
    sideMenu
  }
};
</script>