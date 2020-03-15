<template>
  <div class="columns">
    <div class="column is-3">
      <sideMenu />
    </div>

    <div class="column">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Manage</a>
          </li>
          <li class="is-active">
            <a href="#">SmallCase Summary</a>
          </li>
        </ul>
      </nav>
      <hr />
      
      <smallcase />
    </div>
  </div>
</template>

<script>
import sideMenu from "@/components/Menu.vue";
import smallcase from "@/components/SmallcaseSummay.vue";

export default {
  components: {
    sideMenu,
    smallcase
  }
};
</script>