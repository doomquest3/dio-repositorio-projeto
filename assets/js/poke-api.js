

const pokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name)
    const [type1] = types;

    pokemon.types = types;
    pokemon.type = type1;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeAPI.getPokemonDetail = (pokemon)=>{
    //Converte a resposta em um json    
    return fetch(pokemon.url)
            .then((response)=>response.json())
            .then(convertPokeApiDetailToPokemon)

}

pokeAPI.getPokemons = (offset = 0, limit = 10) => {
    /*URL para acessar a API */
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    //retorna o body convertido em json.
    .then((response) => response.json())
    //Mostra o body convertido no console.
    .then((jsonBody) => jsonBody.results)
    //Mapeando a lista de pokemons em uma lista de requisições de detalhes.
    .then((pokemon)=> pokemon.map(pokeAPI.getPokemonDetail))
    .then((detailRequests)=> Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)

};

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results)=>{
    console.log(results)
})