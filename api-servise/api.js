const URL = 'https://pokeapi.co/api/v2/pokemon/'
 function pokemonFetch(pokemonId) { 
return fetch(`${URL}/pokemon/${pokemonId}`)
  .then(response => 
   response.json(),
  )
 }

 export default {pokemonFetch}