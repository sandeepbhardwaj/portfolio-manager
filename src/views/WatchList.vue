<template>
  <dashboardLayout>
      <section>
        <b-field label="Search Stocks">
          <b-autocomplete
            rounded
            v-model="name"
            :data="filteredDataArray"
            field="Symbol"
            placeholder="e.g. HDFC"
            icon="magnify"
            clearable
            :clear-on-select=true
            @select="addToWatchList" 
          >
            <template slot="empty">No results found</template>
          </b-autocomplete>
        </b-field>
      </section>
      <hr />
      <p class="content">
        <b>Selected:</b>
        {{ selected }}
      </p>
      <hr />
      <watchlist/>
  </dashboardLayout>
</template>

<script>
import dashboardLayout from "@/layouts/dashbaordLayout.vue";
import watchlist from "@/components/Watchlist.vue";
import stocks from "@/data/security_list.json";

export default {
  components: {
    watchlist,
    dashboardLayout
  },
  data() {
    return {
      data: stocks,
      name: "",
      selected: null
    };
  },
  methods:{
    addToWatchList(selected){
      this.selected=selected.Symbol;
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option.Symbol
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },
  mounted:{

  }
};
</script>