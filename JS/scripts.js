let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
  pokemonList.push(pokemon);
  }
 
  function getAll() {
  return pokemonList;
   }

    function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list"); 
    let listpokemon = document.createElement("li");

    // createlistItem.classList.add("list-group-item") //added // 
    
    let button = document.createElement("button");
    button.addEventListener('click', function() { 
   showDetails(pokemon); 
    })
    button.innerText = pokemon.name;
    button.classList.add("btn"); 
    listpokemon.appendChild("btn-primary");
    button.dataset.toggle = "modal"
    button.dataset.target = "#exampleModal"
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  
    }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;

       
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    function showModal(pokemon) { 

    let titleElement = document.querySelector('#exampleModalLabel');
    let modalBody = document.querySelector('.modalBody');

    titleElement.innerHTML = '';
    modalBody.innerHTML = '';

    titleElement.innerText = pokemon.name;

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let contentElement = document.createElement('p');
    contentElement.innerText =('Height =  ') + pokemon.height;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl; 

    modalBody.appendChild(contentElement);

    modalBody.append(imageElement);
    }

     function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  };
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };

  })();

  pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);

    });
  });