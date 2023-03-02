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
    let button = document.createElement("button");
    button.addEventListener('click', function() { 
   showDetails(pokemon); 
    })
    button.innerText = pokemon.name;
    button.classList.add("button-class");
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
  
  let modalContainer = document.querySelector('#modal-container');

    function showModal(pokemon) { // should I delete this function and write a new one? // 

    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal); 

    // from the video //

    //function showModal(item) {

     // let modalBody = $(".modal-body");
    //  let modalTitle = $(".modal-title");
    //  let modalHeader = $(".modal-Header");
  
    //  modalTitle.empty();
    //  modalBody.empty();

      // creating element for name in modal content //
      //let nameElement = $("<h1>") + item.name + "</h1>");
      // creating img in modal content //
      //let imageElementFront = $('<img class = "modal-img" style=width:50%">');
      //imageElementFront.attr("src", item.imageUrlFront);
      //let imageElementBack = $('<img class = "modal-img"style=width:50%">');
      //imageElementBack.attr("src", item.imageUrlBack);
      // create element for height in modal content
      //let heightElement = $("<p>" + 'height' : + item.height + <"/p>");
      // create element for weight in modal content
      //let weightElement = $("<p>" + 'weight' : + item.weight + <"/p>");
      // create element for type in modal content
      //let typetElement = $("<p>" + 'type' : + item.type + </p>");
      // create element for abilities in modal content
     // let abilitiesElement= $("<p>" + 'abilities' : + item.abilities + "</p>");

      //modalTitle.append(nameElement);
      //modalBody.append(imageElementFront);
      //modalBody.append(imageElementBack);
      //modalTitle.append(heightElement);
      //modalTitle.append(weightElement);
      //modalTitle.append(typeElement);
      //modalTitle.append(abilitiesElement);

      
      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;

      let contentElement = document.createElement('p');
      contentElement.innerText =('Height =  ') + pokemon.height;

      let imageElement = document.createElement('img');
      imageElement.src = pokemon.imageUrl; 

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement); 
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');

  }

      function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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