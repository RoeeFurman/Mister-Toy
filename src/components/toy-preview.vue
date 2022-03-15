<template>
  <li class="toy-preview">
    <!-- <custom-toyd> -->
    <!-- <template #header> -->
    <!-- <p><span>ID:</span> {{ toy._id }}</p> -->
    <p><span>Name:</span> {{ toy.name }}</p>
    <p><span>Price:</span> {{ toy.price }}</p>
    <p><span>Type:</span> {{ toy.type }}</p>
    <p><span>inStock:</span> {{ toy.inStock }}</p>
    <!-- <p><span>Speed:</span> {{ toy.speed }}</p> -->
    <!-- </template> -->

    <!-- <template #footer> -->
    <div class="btn-group">
      <button @click="goToEdit">edit</button>
      <button @click="goToDetail">details</button>
      <button @click="removeToy(toy._id)">delete</button>
    </div>
    <hr />
    <!-- </template> -->
    <!-- </custom-toyd> -->
  </li>
</template>

<script>
// import customToyd from "./custom-card.vue";

export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  components: {
    // customToyd,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy._id}`);
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`);
    },
    removeToy(toyId) {
      this.$emit("removeToy", toyId);
    },
  },
};
</script>
