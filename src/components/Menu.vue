<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="view-dashboard" label="Dashboard" tag="router-link" to="/" :active="isActive"></b-menu-item>

      <b-menu-item icon="home" label="Manage">
        <b-menu-item icon="account" label="WatchList" tag="router-link" to="/watchlist"></b-menu-item>
        <b-menu-item icon="cash-multiple" label="SmallCases" tag="router-link" to="/Smallcase"></b-menu-item>
      </b-menu-item>

      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>

    <b-menu-list label="Actions">
      <b-menu-item label="Rules"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>