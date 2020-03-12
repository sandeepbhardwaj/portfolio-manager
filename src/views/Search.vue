<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-table striped hover :items="stocks"></b-table>
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
      stocks: []
    };
  },
  mounted() {
    this.stocks = securities;
  }
};
</script>

<style>
</style>