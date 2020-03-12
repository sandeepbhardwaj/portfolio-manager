<template>
  <div>
    <br />
    <b-container fluid>
      <!-- search field and button -->
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

      <!--output of search -->
      <br />
      <b-row>
        <b-col>
          <b-table
            ref="selectableTable"
            selectable
            :select-mode="selectMode"
            :items="searchResults"
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
          <b-table striped hover :items="selectedStocks"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import securities from "@/data/security_list.json";

export default {
  data() {
    return {
      allSecurities: [],
      selectMode: "single",
      searchKeyword: "",
      searchResults: [],
      selectedStocks: []
    };
  },
  mounted() {
    this.allSecurities = securities;
  },
  methods: {
    //search method for stocks
    search() {
      this.allSecurities.forEach(element => {
        if (element.Symbol == this.searchKeyword) {
          this.searchResults.push(element);
          return;
        }
      });
    },
    onRowSelected(items) {
      this.selectedStocks = items;
    }
  }
};
</script>