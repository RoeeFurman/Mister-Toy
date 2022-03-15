<template>
  <section class="toy-app">
    <h1>toys</h1>
    <toy-filter @setFilter="setFilter" />
    <hr />

    <!-- <pre>{{ toys }}</pre> -->
    <!-- <button @click="goToEdit" class="btn btn-secondary">Add a new toy</button> -->
    <h1>filter</h1>
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toysToShow" />
  </section>
</template>

<script>
import { toyService } from "../services/toy-service.js";
import toyFilter from "../components/toy-filter.vue";
import toyList from "../components/toy-list.vue";

export default {
  name: "toy-app",
  data() {
    return {
      filterBy: null,
    };
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    toysToShow() {
      if (!this.filterBy) return this.toys;

      //Label:
      console.log(this.filterBy.label);
      // console.log(this.toys[0].labels);
      // console.log(this.toys.labels.includes(this.filterBy.label));

      let filteredToys = [];

      if (this.filterBy.inStock) {
        filteredToys = this.toys.filter((toy) => toy.inStock);
      } else filteredToys = this.toys;

      let filteredSortedToys = [];

      if (this.filterBy.type === "adult") {
        filteredSortedToys = filteredToys.filter((toy) => toy.type === "Adult");
      } else if (this.filterBy.type === "funny") {
        filteredSortedToys = filteredToys.filter((toy) => toy.type === "Funny");
      } else if (this.filterBy.type === "educational") {
        filteredSortedToys = filteredToys.filter(
          (toy) => toy.type === "Educational"
        );
      } else filteredSortedToys = filteredToys;

      console.log(filteredToys);

      const regex = new RegExp(this.filterBy.name, "i");
      return filteredSortedToys.filter((toy) => regex.test(toy.name));
    },
  },
  created() {},
  methods: {
    loadToys() {
      toyService.query().then((toys) => (this.toys = toys));
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    goToEdit() {
      this.$router.push(`/toy/edit`);
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", id: toyId });
    },
  },
  components: {
    toyList,
    toyFilter,
  },
};
</script>
