<template>
  <div>
    <h1>Создать новую заметку</h1>
    <v-form ref="form" @submit.prevent="createNote">
      <v-text-field
        v-model="title"
        label="Заголовок"
        required
        :rules="titleRules"
      ></v-text-field>
      <v-textarea
        v-model="content"
        label="Содержание"
        required
        :rules="contentRules"
      ></v-textarea>
      <v-btn type="submit" class="mt-4">Создать</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      titleRules: [
        (v) => !!v || "Заголовок является обязательным полем",
        (v) =>
          (v && v.length >= 5) ||
          "Заголовок должен содержать минимум 5 символов",
      ],
      contentRules: [
        (v) => !!v || "Содержание является обязательным полем",
        (v) =>
          (v && v.length >= 10) ||
          "Содержание должно содержать минимум 10 символов",
      ],
    };
  },
  methods: {
    createNote() {
      if (!this.$refs.form.validate()) return;

      let id = Date.now();
      this.$store.commit("addNote", {
        id,
        title: this.title,
        content: this.content,
      });
      this.$router.push("/");
    },
  },
};
</script>