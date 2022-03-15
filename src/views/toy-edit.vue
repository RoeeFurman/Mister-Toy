<template>
  <section v-if="toyToEdit">
    <form @submit.prevent="saveToy" class="form">
      <div class="form-control">
        <label for="txt" class="form-label">Toy name</label>
        <input
          required
          v-model="toyToEdit.name"
          id="txt"
          type="text"
          class="form-input"
          placeholder="Enter your toy name here..."
        />
      </div>
      <div class="form-control">
        <label for="speed" class="form-label">Toy price</label>
        <input
          required
          v-model.number="toyToEdit.price"
          id="price"
          type="number"
          class="form-input"
        />
      </div>
      <div class="btn-group">
        <button @click="saveToy">save</button>
        <button @click="goBack">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from "../services/toy-service";

export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null,
    };
  },

  created() {
    const { id } = this.$route.params;
    const idx = +id;
    if (idx) {
      console.log(idx);
      toyService.getById(idx).then((toy) => {
        this.toyToEdit = toy;
      });
    } else this.toyToEdit = toyService.getEmptyToy();
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: this.toyToEdit })
        .then(() => {
          this.$router.push("/toy");
        });
    },
  },
};
</script>
