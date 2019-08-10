<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs8>
          <v-card class="pa-12">
            <v-text-field class="ma-12" v-model="title" label="Title" required></v-text-field>
            <v-textarea
              class="ma-12"
              name="input-7-1"
              filled
              label="content"
              auto-grow
              v-model="content"
            ></v-textarea>
            <div class="text-end">
              <v-btn v-on:click="submit" class="ma-8">Submit</v-btn>
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
      title: "",
      content: ""
    };
  },
  methods: {
    submit: function() {
      db.collection("posts").add({
        title: this.title,
        content: this.content,
        createdAt: new Date()
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>