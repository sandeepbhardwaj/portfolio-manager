<template>
  <div>
    <br />
    <b-container fluid>
      <b-row>
        <b-col align-self="center">
          <b-form inline>
            <b-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Search a stock"
              v-model="searchKeyword"
            ></b-input>
            <b-button variant="primary" @click="search">Search</b-button>
          </b-form>
        </b-col>
      </b-row>

      <br />
      <b-row>
        <b-col>
          <b-table striped hover :items="stocks"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import StockService from "@/services/StockService";

export default {
  data() {
    return {
      searchKeyword:'',
      stocks: []
    };
  },
  methods: {
    async search() {
      const response = await StockService.searchStock(this.searchKeyword);
      this.stocks = response.data.bestMatches;
    }
  }
};
</script>