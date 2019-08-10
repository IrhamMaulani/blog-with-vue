<template>
  <v-app>
    <navbar-header></navbar-header>

    <router-view></router-view>
  </v-app>
</template>

<script>
import axios from "axios";
import VueRouter from "vue-router";
import Header from "./components/Header.vue";
// import BlogContent from "./components/BlogContent";
// import BlogList from "./components/BlogList";

export default {
  name: "App",
  components: {
    "navbar-header": Header
  },
  data: () => ({
    //
  })
};
</script>
