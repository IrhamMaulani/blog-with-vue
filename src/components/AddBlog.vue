<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 md8>
          <v-card class="pa-12">
            <v-alert v-if="sucess" type="success">Data Successfully Submitted.</v-alert>
            <v-text-field v-on:click="sucess = false" v-model="title" label="Title" required></v-text-field>
            <v-textarea name="input-7-1" filled label="content" auto-grow v-model="content"></v-textarea>
            <div class="text-end">
              <v-btn v-on:click="submit">Submit</v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      title: "",
      content: "",
      sucess: false
    };
  },
  methods: {
    submit: function() {
      db.collection("posts")
        .add({
          title: this.title,
          content: this.content,
          createdAt: new Date()
        })
        .then(() => {
          this.sucess = true;
        })
        .catch(() => {
          alert("error");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>