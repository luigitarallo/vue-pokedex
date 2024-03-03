const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonService {
  async searchPokemon(pokeToSearch) {
    try {
      const response = await fetch(`${baseUrl}${pokeToSearch}`); // Esegue una richiesta HTTP
      if (!response.ok) {
        // Verifica se la richiesta è andata a buon fine
        throw new Error("No Pokémon founded: " + response.statusText);
      }
      const pokeItem = await response.json(); // Estrae i dati dalla risposta come JSON
      return pokeItem; // Restituisce i dati
    } catch (error) {
      console.error(
        "Si è verificato un errore durante il recupero dei dati:",
        error
      );
      throw error; // Gestisce eventuali errori
    }
  }
}
export default new PokemonService();
