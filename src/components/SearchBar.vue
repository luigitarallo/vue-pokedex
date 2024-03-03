<script>
export default {
  data() {
    return {
      pokeToSearch: "",
    };
  },
  methods: {
    // Metodo per trimmare e mettere lowercase
    // l'input, in modo da evitare errori
    cleanPokeSearch() {
      const pokeSearchClean = this.pokeToSearch.trim().toLowerCase();
      this.$emit("searchPokemon", pokeSearchClean);
    },
  },
  emits: ["searchPokemon"],
};
</script>

<template>
  <input
    @keyup.enter="cleanPokeSearch"
    v-model="pokeToSearch"
    placeholder="Search a Pokémon!"
  />
  <button class="btn btn-outline-success" @click="cleanPokeSearch">
    Search
  </button>
</template>

<style lang="scss" scoped></style>
