<template>
  <dashboardLayout>
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
  </dashboardLayout>
</template>

<script>
import dashboardLayout from "@/layouts/dashbaordLayout.vue";
import smallcase from "@/components/SmallcaseSummay.vue";

export default {
  components: {
    dashboardLayout,
    smallcase
  }
};
</script>