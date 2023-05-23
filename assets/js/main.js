    //Localizando id da lista para adicionar novos cards de pokemons
    const pokemonList = document.getElementById('pokemonList');

    const loadMoreButton = document.getElementById('loadMore');
    const maxRecord = 151;
    const limit = 10;
    let offset = 0;

    function loadPokemonItens(offset, limit){
        /* O fetch retorna uma promise, um processo complexo para realizar uma requisição em um servidor. 
        um processamento assíncrono. */
        pokeAPI.getPokemons(offset,limit).then((pokemons = [])=> {
            pokemonList.innerHTML += pokemons.map((pokemon=>
                `<li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type)=>`<li class="type ${pokemon.type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    </div>   
                </li>`
            )).join('');
            
        })
        //Recebe os erros e mostra no console.
        .catch((error) =>console.error(error))

    }
        
    loadPokemonItens(offset, limit);

    loadMoreButton.addEventListener('click', ()=>{
        offset += limit;
        const qtdRecordNexPage = offset + limit;

        if(qtdRecordNexPage >= maxRecord){
            const newLimit = maxRecord - offset;
            loadPokemonItens(offset,newLimit);
            loadMoreButton.parentElement.removeChild(loadMoreButton);
        }else{
            loadPokemonItens(offset,limit);
        }
        
    })