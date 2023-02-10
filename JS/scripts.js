let pokemonList = [
{name: 'Bulbasaur', type: ['Grass', 'Poison'], height: '5', Category: 'Seed'}, 
{name:'Ivysaur', type: ['Grass', 'Poison'], height: '7', Category: 'Seed'}, 
{name: 'Venusaur', type: ['Grass', 'Poison'], height: '10', Category: 'Seed'},  
{name:'Charmander', type:'fire', height: '3', Category: 'Lizard'},   
{name: 'Charmeleon', type: 'fire', height: '3', Category: 'Flame'},  

];

//for (let i = 0; i <pokemonList.length; i++) {
  //document.write('<p>' + pokemonList[i].name);
//}

//for (let i = 0; i <pokemonList.length; i++) {
//  document.write('<p>' + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
//}

  for (let i = 0; i <pokemonList.length; i++) { 

  if (pokemonList[i].height>=9){
  document.write('<p>' + pokemonList[i].name + " " + pokemonList[i].height + " " + "-  Wow, that is big!")}

  else if (pokemonList[i].height>=5 && pokemonList[i].height<=9) {
  document.write('<p>' + pokemonList[i].name + " " + pokemonList[i].height + " " + " -  That is a medium Pokemon!")}

  else { 
  document.write('<p>' + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");}

}
  
   // I cant add the string with the word height!!! 