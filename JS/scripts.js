  let pokemonRepository = (function () {
  let pokemonList = [{name: 'Bulbasaur', type: ['Grass', 'Poison'], height: '5', Category: 'Seed'}, 
  {name:'Ivysaur', type: ['Grass', 'Poison'], height: '7', Category: 'Seed'}, 
  {name: 'Venusaur', type: ['Grass', 'Poison'], height: '10', Category: 'Seed'},  
  {name:'Charmander', type:'fire', height: '3', Category: 'Lizard'},   
  {name: 'Charmeleon', type: 'fire', height: '3', Category: 'Flame'},
  {name:'Ivysaur', type: ['Grass', 'Poison'], height: '7', Category: 'Seed'},
  {name:'Charizard ', type: ['fire', 'flying'], height: '5', Category: 'Flame'},
  {name:'Squirtle ', type: 'Water', height: '1', Category: 'Tiny Turtle'},
  {name:'Wartortle ', type: 'Water', height: '3', Category: 'Turtle'},
  {name:'Blastoise  ', type: 'Water', height: '3', Category: 'Shellfish'},
  {name:'Caterpie  ', type: 'Bug', height: '5', Category: 'warm'},

];
 
   function add(pokemon) {

   pokemonList.push(pokemon);

    }
 
   function getAll() {

    return pokemonList;

   }

   function showDetails(pokemon) { 
    console.log(pokemon.name);
  }
  
    function addListItem(pokemon) {

    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    
    }

    return {

    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  
  };

   })();

//pokemonRepository.getAll().forEach(function(pokemon) 
//{.document.write('<p>' + ' Name: ' + pokemon.name + ' Type: ' + pokemon.type + ' Height: ' + pokemon.height + ' Category: ' + pokemon.Category + '');

pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});

