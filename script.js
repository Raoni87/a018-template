//PRATICA GUIADA I

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function funcaoA(array) {
  const triplo = []
  for(let valor of array){
    triplo.push(valor*3);
  }
  return triplo
}

console.log(funcaoA(listaDeNumeros));

function funcaoB(array) {
  const soPares = [];
  for(let valor of array) {
    if(valor %2 === 0) {
      soPares.push(valor)
    }
}
return soPares
}

console.log(funcaoB(listaDeNumeros));

function funcaoC(array, callback) {
  const result = callback(array)
  console.log("C", result);
}

funcaoC(listaDeNumeros, funcaoA);

//PRATICA GUIADA II

const returnMap = listaDeNumeros.map(item => item * 3);

console.log("Return Map:" + " " + returnMap);

const returnFilter = listaDeNumeros.filter(item => item  %2 === 0);

console.log(`Apenas pares: ${returnFilter}`);

//PRA GUARDAR NA CABEÇA

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]


//A
function pokefuncao(objeto){
  const pokemons100 = {...objeto, vida: 100}

  return pokemons100
}

//B

const pokemonsVidaCheia = pokemons.map(pokefuncao);

console.log(pokemonsVidaCheia);

//C

const pokemonsDeFogo = pokemons.filter((item) => {
  
  return item.tipo === 'fogo'})

console.log(pokemonsDeFogo);