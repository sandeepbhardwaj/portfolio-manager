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

    <watchlist :items="watchlist" />
  </dashboardLayout>
</template>
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
      watchlist: []
    };
  },
  methods: {
    addToWatchList(selected) {
      if (selected) {
        this.watchlist.push({
          Symbol: selected.Symbol,
          current_price: this.getBhav(selected.Symbol)
        });
      }
    },
    getBhav(symbol) {
      for (let i = 0; i < this.cmbhav.length; i++) {
        const element = this.cmbhav[i];
        if (element.SYMBOL.toString().toLowerCase() === symbol.toString().toLowerCase()) {
          return element.CLOSE;
        }
      }
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
  }
};
</script>