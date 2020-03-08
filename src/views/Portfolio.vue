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
              type="search"
              placeholder="Search Stocks"
              v-model="searchKeyword"
            ></b-input>

            <b-button variant="primary" @click="search">Search</b-button>
          </b-form>
        </b-col>
      </b-row>

      <!--row selection -->
      <br />
      <b-row>
        <b-col>
          <b-table
            ref="selectableTable"
            selectable
            :select-mode="selectMode"
            :items="stocks"
            @row-selected="onRowSelected"
            responsive="sm"
          >
            <template v-slot:cell(selected)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <h3>Selected Stocks</h3>
      <b-row>
        <b-col>
          <b-table striped hover :items="selected"></b-table>
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
      searchKeyword: "",
      stocks: [],
      selectMode: "single",
      selected: []
    };
  },
  methods: {
    async search() {
      const response = await StockService.searchStock(this.searchKeyword);
      this.stocks = response.data.bestMatches;
    },
    onRowSelected(items) {
      const stockSymbol = {
        Name: items[0]["2. name"],
        Symbol: items[0]["1. symbol"],
        Price: "",
        Quantity: 1
      };
      //set the price
      this.getLastClosedPrice(items[0]["1. symbol"]).then(response => {
        stockSymbol.Price = response;
      }),
        this.selected.push(stockSymbol);
    },
    async getLastClosedPrice(stockName) {
      const response = await StockService.getTimeSeriesDaily(stockName);
      return response.data["Time Series (Daily)"]["2020-03-06"]["4. close"];
    }
  }
};
</script>