
    const pokeDashCard = {}

    const pokeDash = document.getElementById('pokeCard');

    function numeroPokemon(){
        let number = Number(localStorage.getItem('itemPokemon'));
        pokemonCardDetail(number);
        
    }

    function pokemonCardDetail(idpokemon){
        pokeAPI.getPokemons().then((pokemons=[])=>{
            pokemons.map((pokemon)=>{
                if(idpokemon === pokemon.number){
                    pokeDash.innerHTML = `<header class="cabecalho ${pokemon.type}">
                    <h1>PokeDash</h1>
                    <a class="returnButton ${pokemon.type}" href="./index.html">Return</a>
                </header>
                <section class="pokeBoard" >
                    <main class="pokemonCard ${pokemon.type}">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                        
                        <!--Informações do pokemon-->
                        <div class="inforPokemon">
                            <h2>${pokemon.name}</h2>
                            <ol class="listaInfo">
                                <li class="detalhes">Number: ${pokemon.number}</li>
                                <li class="detalhes">Typo: ${pokemon.type}</li>
                                <li class="detalhes">Especies: ${pokemon.name}</li>
                            </ol>
                        </div>
                    </main>
                    
                </section>`
                }
            })

        })

    }

    numeroPokemon();