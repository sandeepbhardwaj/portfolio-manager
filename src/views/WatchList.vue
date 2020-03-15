<template>
  <div class="columns">
    <div class="column is-3">
      <sideMenu />
    </div>

    <div class="column">
      <section>
        <b-field label="Search Stocks">
          <b-autocomplete
            rounded
            v-model="name"
            :data="filteredDataArray"
            placeholder="e.g. jQuery"
            icon="magnify"
            clearable
            @select="option => selected = option"
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
    </div>
  </div>
</template>

<script>
import sideMenu from "@/components/Menu.vue";
import watchlist from "@/components/Watchlist.vue";

export default {
  components: {
    sideMenu,
    watchlist
  },
  data() {
    return {
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js"
      ],
      name: "",
      selected: null
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>