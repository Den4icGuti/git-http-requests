// const refs = {
//   btn: document.querySelector('.btn'),
//   usersList: document.querySelector('.users-list'),
//   clearbtn:document.querySelector('.clear-list')
// }



import pokemonCard from '../templates/pokemon-card-info.hbs';

import notiflix from 'notiflix';

import API from '../api-servise/api';

import getRefs from '../get-refs/get-refs';

const refs = getRefs();

refs.formSearch.addEventListener('submit',onSearch)


function onSearch(e) { 
  e.preventDefault()

  const formEl = e.currentTarget;
  const inputSearch = formEl.elements.querty.value;
  
    
  API.pokemonFetch(inputSearch)
    .then(renderPokemonCard)
    .catch(onError)
    .finally(() => formEl.reset())
  }



function renderPokemonCard(pokemon) { 
   const marcup = pokemonCard(pokemon);
   refs.cardContainer.innerHTML = marcup;
}

function onError(error) { 
  alert('Ваш покемон не найден!')
}

