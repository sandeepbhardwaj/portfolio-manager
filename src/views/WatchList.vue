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
          :clear-on-select="true"
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
  <watchlist :items="watchlist" />
  </dashboardLayout>
</template >

  <script>
    import dashboardLayout from "@/layouts/dashbaordLayout.vue";
    import watchlist from "@/components/Watchlist.vue";
    import stocks from "@/data/security_list.json";
    import cmbhav from "@/data/cm18MARbhav.json";

export default {
      components: {
      watchlist,
      dashboardLayout
    },
  data() {
    return {
      data: stocks,
      cmbhav: cmbhav,
      name: "",
      selected: null,
      watchlist: []
    };
  },
  methods: {
      addToWatchList(selected) {
      this.selected = selected.Symbol;
      this.watchlist.push({
      Symbol: this.selected,
      "current_price":this.getBhav(Symbol)
      });
    },
    getBhav(Symbol)
    {
      this.cmbhav.forEach(element => {
        console.log("element",element);
        if (element.Symbol == Symbol.toLowerCase()) {
          return element;
        }
      });

    }
  },
  computed: {
      filteredDataArray() {
      return this.data.filter(option => {
        return (
          option.Symbol.toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },
  mounted: {}
};
</script>