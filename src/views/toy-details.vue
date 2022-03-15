<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span>ID:</span> {{ toy._id }}</p>
      <p><span>Name:</span> {{ toy.name }}</p>
      <p><span>Price:</span> {{ toy.price }}</p>
      <p><span>Type:</span> {{ toy.type }}</p>
      <p><span>inStock:</span> {{ toy.inStock }}</p>

      <span>Reviews:</span>
      <p v-for="review in toy.reviews" :key="review">
        <b>Review: </b>{{ review.txt }}, <b>Rate:</b> {{ review.rate }}
      </p>
    </article>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
import { toyService } from "../services/toy-service.js";

export default {
  name: "toy-detail",
  data() {
    return {
      toy: null,
    };
  },
  created() {
    const { _id } = this.$route.params;
    const id = +_id;
    toyService.getById(id).then((toy) => {
      console.log(toy);
      this.toy = toy;
    });
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
  },
};
</script>
