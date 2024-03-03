<script>
export default {
  data() {
    return {
      pokemonToCatch: [],
    };
  },
  props: {
    pokemonItem: Object,
  },
  emits: ["catch"],
  computed: {
    pokeDetails() {
      /** Dichiaro una variabile oggetto vuoto
      dove salvo i dati che estrapolo da pokemonItem
      **/
      const pokeDetails = {};
      /**
      Controllo che l'oggetto inizializzato non abbia dei
      valori al suo interno, in questo modo evito che si
      verifichino errori al caricamento senza aver cercato
      **/
      if (Object.keys(this.pokemonItem).length > 0) {
        pokeDetails.name = this.pokemonItem.name;
        pokeDetails.height = this.pokemonItem.height;
        pokeDetails.weight = this.pokemonItem.weight;
        if (this.pokemonItem.types && this.pokemonItem.types.length > 0) {
          pokeDetails.type = this.pokemonItem.types[0].type.name;
        }
        if (this.pokemonItem.stats && this.pokemonItem.stats.length > 0) {
          pokeDetails.hp = this.pokemonItem.stats[0].base_stat;
          pokeDetails.attack = this.pokemonItem.stats[1].base_stat;
          pokeDetails.defense = this.pokemonItem.stats[2].base_stat;
          pokeDetails.special_attack = this.pokemonItem.stats[3].base_stat;
          pokeDetails.special_defense = this.pokemonItem.stats[4].base_stat;
          pokeDetails.speed = this.pokemonItem.stats[5].base_stat;
        }
        if (
          this.pokemonItem.sprites &&
          this.pokemonItem.sprites.front_default &&
          this.pokemonItem.sprites.back_default
        ) {
          pokeDetails.frontImg = this.pokemonItem.sprites.front_default;
          pokeDetails.backImg = this.pokemonItem.sprites.back_default;
        }
      }
      console.log(pokeDetails);
      return pokeDetails;
    },
  },
};
</script>

<template>
  <div v-if="pokeDetails && Object.keys(pokeDetails).length > 0">
    <h3>Name: {{ pokeDetails.name }}</h3>
    <p>Type: {{ pokeDetails.type }}</p>
    <p>Height: {{ pokeDetails.height }}"</p>
    <p>Weight: {{ pokeDetails.weight }} lbs.</p>
    <p>HP: {{ pokeDetails.hp }}</p>
    <p>Attack: {{ pokeDetails.attack }}</p>
    <p>Defense: {{ pokeDetails.defense }}</p>
    <p>Special Attack: {{ pokeDetails.special_attack }}</p>
    <p>Special Defense: {{ pokeDetails.special_defense }}</p>
    <p>Speed: {{ pokeDetails.speed }}</p>
    <img :src="pokeDetails.frontImg" alt="" />

    <button @click="$emit('catch', pokeDetails)">Catch It!</button>
  </div>
  <div v-else>
    <p>No Pokémon details to show...Search something</p>
  </div>
</template>

<style lang="scss" scoped></style>
