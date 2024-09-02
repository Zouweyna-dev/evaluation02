import {fetchPokemon} from "./fetchPokemon.js";
import {fetchPokemonAbilities} from './fetchPokemonAbilities.js';

window.addEventListener('DOMContentLoaded', () => {
   const sendButton = document.getElementById('sendButton');
   const displayComment = (event) => {
   const comment = document.getElementById('myComment');
      
    if(comment)
      event.preventDefault();
      comment.style.visibility = 'visible';
      document.getElementById('message').innerText = document.getElementById('messageInput').value;
    };
  
 
    const invoquePokemon = () => {
      const pokeBtn = document.getElementById('pokemon');
      pokeBtn.addEventListener('click', fetchPokemon);
      
    };
  
    const pokemonAbility = () => {
      const pokeAbilityBtn = document.getElementById('ability');
      pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
  
    };

    (function startAll(){
      invoquePokemon();
      pokemonAbility();
      sendButton.addEventListener('click', displayComment);
    })();


  });

  

