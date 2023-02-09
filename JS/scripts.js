let pokemonList = [
{name: 'Bulbasaur', type: ['Grass', 'Poison'], height: '2', Category: 'Seed'}, 
{name:'Ivysaur', type: ['Grass', 'Poison'], height: '3', Category: 'Seed'}, 
{name: 'Venusaur', type: ['Grass', 'Poison'], height: '6', Category: 'Seed'},  
{name:'Charmander', type:'fire', height: '2', Category: 'Lizard'},   
{name: 'Charmeleon', type: 'fire', height: '3', Category: 'Flame'},  

];

//for (let i = 0; i <pokemonList.length; i++) {
  //document.write("<p>" + pokemonList[i].name);
//}

//for (let i = 0; i <pokemonList.length; i++) {
//  document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
//}

  for (let i = 0; i <pokemonList.length; i++) { 

  if (pokemonList[i].height>=5){
  document.write("<p>" + pokemonList[i].name + " " + pokemonList[i].height + " " + " Wow, that is big!")}

  else if (pokemonList[i].height>=4 && pokemonList[i].height<=3) {
  document.write("<p>" + pokemonList[i].name + " " + pokemonList[i].height + " " + " That is a medium Pokemon!")}

  else(pokemonList[i].height>=2 && pokemonList[i].height<=1);{ 
  document.write("<p>" + pokemonList[i].name + " " + pokemonList[i].height + " " + " That is a small Pokemon!")} 

}
  
   // I cant add the string with the word height!!! 