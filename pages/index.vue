<template>
  <div>
    <h1>Список заметок</h1>
    <v-list>
      <v-list-item v-for="note in notes" :key="note.id">
        <v-list-item-content>
          <nuxt-link :to="`/note/${note.id}`">{{ note.title }}</nuxt-link>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="error" @click="deleteNote(note.id)">Удалить</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-btn color="primary" @click="$router.push('/note/create')"
      >Создать заметку</v-btn
    >
  </div>
</template>

<script>
export default {
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    deleteNote(id) {
      this.$store.commit("deleteNote", id);
    },
  },
};
</script>