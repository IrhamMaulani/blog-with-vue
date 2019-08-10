<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs8>
          <v-card>
            <div v-for="blog in blogs" :key="blog.title">
              <v-card-title class="display-1">{{blog.title}}</v-card-title>
              <v-img
                class="ml-8 mr-2"
                src="../assets/ez.png"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              />
              <v-card-text class="text--primary">
                <p>{{blog.content}}</p>
                <v-divider class="mt-4"></v-divider>
              </v-card-text>
            </div>
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
      blogs: []
    };
  },
  methods: {},
  firestore() {
    return {
      blogs: db.collection("posts").orderBy("createdAt", "desc")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>