<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs8>
          <v-card class="pa-12">
            <v-card-title class="display-1 ma-4">{{blog.title}}</v-card-title>
            <v-card-text class="text--primary ma-6">
              <p class="mr-6">{{blog.content}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: []
    };
  },
  methods: {},
  firestore() {
    return {
      blog: db.collection("posts").doc(this.id)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>