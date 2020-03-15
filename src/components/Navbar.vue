<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Dashbaord</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-dropdown label="Sandeep Bhardwaj">
        <b-navbar-item href="#">About</b-navbar-item>
        <b-navbar-item href="#">Log Out</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>