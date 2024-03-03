<script>
import SearchBar from "./components/SearchBar.vue";
import PokeDetail from "./components/PokeDetail.vue";
// Importo il servizio per effettuare la chiamata API
import PokemonService from "./PokemonService.js";
export default {
  data() {
    return {
      pokemonList: [],
      pokemonCatched: [],
    };
  },
  components: { SearchBar, PokeDetail },
  methods: {
    // Metodo che utilizza il servizio Pokemon
    // per chiamare l'API e salvare il risultato
    // in una variabile
    fetchPokemon(pokeToSearch) {
      PokemonService.searchPokemon(pokeToSearch)
        .then((response) => {
          console.log(response);
          this.pokemonList = response;
        })
        .catch((error) => {
          console.error("Errore durante la ricerca dei Pokemon:", error);
        });
    },
    catchPokemon(pokeDetails) {
      this.pokemonCatched.push(pokeDetails);
      console.log(this.pokemonCatched);
    },
  },
};
</script>

<template>
  <div class="container">
    <SearchBar @searchPokemon="fetchPokemon" />
    <PokeDetail :pokemonItem="pokemonList" @catch="catchPokemon" />
  </div>
</template>

<style lang="scss" scoped></style>
