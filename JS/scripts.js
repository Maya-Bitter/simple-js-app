let pokemonList = [
{name: 'Bulbasaur', type: ['Grass', 'Poison'], height: '2', Category: 'Seed'}, 
{name:'Ivysaur', type: ['Grass', 'Poison'], height: '3', Category: 'Seed'}, 
{name: 'Venusaur', type: ['Grass', 'Poison'], height: '6', Category: 'Seed'},  
{name:'Charmander', type:'fire', height: '2', Category: 'Lizard'},   
{name: 'Charmeleon', type: 'fire', height: '3', Category: 'Flame'},  

];

//for (let i = 0; i <pokemonList.length; i++) {
//document.write(pokemonList[i].name + " ")
// } 

for (let i = 0; i <pokemonList.length; i++) {
  document.write(pokemonList[i].name + " " + pokemonList[i].height + " ")
}