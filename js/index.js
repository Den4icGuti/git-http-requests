// const refs = {
//   btn: document.querySelector('.btn'),
//   usersList: document.querySelector('.users-list'),
//   clearbtn:document.querySelector('.clear-list')
// }



import pokemonCard from '../templates/pokemon-card-info.hbs';

import { Notify } from 'notiflix';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  formSearch:document.querySelector('.js-form')
}

refs.formSearch.addEventListener('submit',onSearch)


function onSearch(e) { 
  e.preventDefault()

  const formEl = e.currentTarget;
  const id = formEl.elements.id.value;
 
    
  pokemonFetch(id)
    .then(renderPokemonCard)
    .catch(error => console.log(error))
    .finally(() => formEl.reset())
  }

function pokemonFetch(pokemonId) { 

return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then(response => { 
  return response.json();
  })
 }

function renderPokemonCard(pokemon) { 
   const marcup = pokemonCard(pokemon);
   refs.cardContainer.innerHTML = marcup;
}
