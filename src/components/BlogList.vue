<template>
  <v-content>
    <v-container>
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <v-layout align-center justify-center>
        <v-flex xs8>
          <v-card class="pa-2">
            <v-text-field
              v-model="search"
              class="ma-2"
              hide-details
              prepend-icon="search"
              single-line
            ></v-text-field>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs8>
          <v-card>
            <div v-for="blog in filteredSearch" :key="blog.id">
              <v-divider></v-divider>
              <v-card-title class="display-1 ma-4">{{blog.title}}</v-card-title>
              <!-- <v-img
                class="ml-8 mr-2"
                src="../assets/ez.png"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                max-width="500"
                max-height="300"
              />-->
              <v-card-text class="text--primary ma-6">
                <p class="mr-6">{{blog.content | snippet}}</p>
              </v-card-text>
              <div class="text-end">
                <router-link v-bind:to="`/blog/${blog.id}`">
                  <v-btn color="gray accent-4" text>Read More</v-btn>
                </router-link>
              </div>
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
      blogs: [],
      search: "",
      overlay: true,
      limit: 1
    };
  },
  methods: {},
  computed: {
    filteredSearch: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  created() {
    // db.collection("posts")
    //   .get()
    //   .then(querySnapshot => {
    //     // const documents = querySnapshot.docs.map(doc => doc.data());
    //     // do something with documents
    //     this.blogs = querySnapshot.docs.map(doc => doc.data());
    //     this.overlay = false;
    //   });

    this.$bind(
      "blogs",
      db.collection("posts").orderBy("createdAt", "desc")
      // .limit(2)
    ).then(() => {
      this.overlay = false;
    });
  },
  firestore() {
    return {
      // blogs: db.collection("posts").orderBy("createdAt", "desc")
      // readyCallback: () => (this.overlay = false)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
</style>