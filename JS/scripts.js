let pokemonList = [
{name: 'Bulbasaur', type: ['Grass', 'Poison'], height: '5', Category: 'Seed'}, 
{name:'Ivysaur', type: ['Grass', 'Poison'], height: '7', Category: 'Seed'}, 
{name: 'Venusaur', type: ['Grass', 'Poison'], height: '10', Category: 'Seed'},  
{name:'Charmander', type:'fire', height: '3', Category: 'Lizard'},   
{name: 'Charmeleon', type: 'fire', height: '3', Category: 'Flame'},  

];

//  for (let i = 0; i < pokemonList.length; i++){
//  document.write("<p>" + pokemonList[i].name + "</p>");} 


//for (let i = 0; i <pokemonList.length; i++) {
//document.write('<p>' + pokemonList[i].name + " (height: " + pokemonList[i].height + ")"+ '</p>'); 
//}

//  for (let i = 0; i <pokemonList.length; i++) { 

//  if (pokemonList[i].height>=9){
//  document.write('<p>' + pokemonList[i].name + " " + pokemonList[i].height + " " + "-  Wow, that is big!")}

//  else if (pokemonList[i].height>=5 && pokemonList[i].height<=9) {
//  document.write('<p>' + pokemonList[i].name + " " + pokemonList[i].height + " " + " -  That is a medium Pokemon!")}

//  else if (pokemonList[i].height>=1 && pokemonList[i].height<=4) {
//    document.write('<p>' + pokemonList[i].name + " " + pokemonList[i].height + " " + " -  That is a small Pokemon!")}

//  else { 
//  document.write('<p>' + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");}

//}
  
   // I cant add the string with the word height!!! 

    // Task 1.5 //

   // pokemonList.forEach(function(pokemon) {
   //   document.write('<p>' + ' Name: ' + pokemon.name + ' Type: ' + pokemon.type + ' Height: ' + pokemon.height + ' Category: ' + pokemon.Category + '');
   //});
    
   // pokemonList.forEach(pokemon);

   //Another option!!!: 
    
   //function myLoopFunction(pokemon) {
   //   document.write('<p>' + ' Name: ' + pokemon.name + ' Type: ' + pokemon.type + ' Height: ' + pokemon.height + ' Category: ' + pokemon.Category + '');
   //     }
   //  pokemonList.forEach(myLoopFunction);

// Task 1.5 part 2 //


let pokemonRepository = (function () {
   let pokemonList = [];
 
   function add(pokemon) {
     pokemonList.push(pokemon);
   }
 
   function getAll() {
     return pokemonList;
   }
 
   return {
     add: add,
     getAll: getAll
   };
 })();