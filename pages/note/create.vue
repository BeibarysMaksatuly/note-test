<template>
  <div>
    <h1>Создать новую заметку</h1>
    <v-form @submit.prevent="createNote">
      <v-text-field v-model="title" label="Заголовок" required></v-text-field>
      <v-textarea v-model="content" label="Содержание" required></v-textarea>
      <v-btn type="submit" :disabled="!validForm">Создать</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: {
    validForm() {
      return this.title && this.content;
    },
  },
  methods: {
    createNote() {
      this.$store.commit("addNote", {
        id: Date.now(),
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
      this.$router.push("/");
    },
  },
};
</script>