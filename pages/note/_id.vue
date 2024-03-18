<template>
  <div>
    <h1>{{ note.title }}</h1>
    <p>{{ note.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    note() {
      let id = parseInt(this.$route.params.id);
      return this.$store.state.notes.find((note) => note.id === id);
    },
  },
};
</script>