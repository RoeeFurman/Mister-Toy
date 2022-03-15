<template>
  <section class="toy-filter">
    <label> Search a toy: </label>
    <input
      v-model="filterBy.name"
      type="text"
      @input="setFilter"
      placeholder="Search by..."
    />

    <select name="filter" v-model="filterBy.type" @change="setFilter">
      <option value="">All</option>
      <option value="funny">funny</option>
      <option value="educational">educational</option>
      <option value="adult">adult</option>
    </select>

    <!-- <input type="radio" id="one" value="One" v-model="picked" /> -->
    <label>
      <input
        type="radio"
        v-model="filterBy.inStock"
        value=""
        @change="setFilter"
      />
      All</label
    >
    <label>
      <input
        type="radio"
        v-model="filterBy.inStock"
        value="true"
        @change="setFilter"
      />
      In Stock
    </label>

    <hr />

    <h4>Labels:</h4>

    <label>
      <input
        type="radio"
        v-model="filterBy.label"
        value="All"
        @change="setFilter"
      />
      All</label
    >
    <label>
      <input
        type="radio"
        v-model="filterBy.label"
        value="Doll"
        @change="setFilter"
      />
      Doll</label
    >
    <label>
      <input
        type="radio"
        v-model="filterBy.label"
        value="Baby"
        @change="setFilter"
      />
      Baby</label
    >
    <label>
      <input
        type="radio"
        v-model="filterBy.label"
        value="Battery Powered"
        @change="setFilter"
      />
      Battery Powered</label
    >
    <!-- <input type="checkbox" v-model="filterBy.inStock" @input="setFilter" /> -->
    <!-- 
    <button @click="movePage(-1)">prev</button>
    <button @click="movePage(1)">next</button> -->

    <!-- <input
      v-focus
      v-model="filterBy.vendor"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search vendor..."
    /> -->
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        name: "",
        inStock: "",
        type: "",
        label: "",
      },
    };
  },
  methods: {
    setFilter() {
      console.log(this.filterBy);
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
