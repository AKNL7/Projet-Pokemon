const balise = document.querySelector(".container");

async function getPokeData() {
const reponse =  await fetch ("https://tyradex.vercel.app/api/v1/pokemon/1");
const pokemon = await reponse.json();
console.log(pokemon);


balise.innerHTML = 
`

<div class="container">

<div id="card">


<span>${pokemon.stats.hp}</span>
</p>

<img src=${pokemon.sprites.regular} alt="" >

<h2 class="poke-name">${pokemon.name.fr}</h2>
<h2>${pokemon.catch_rate}</h2>
            <div class="types">${pokemon.types.name} </div>
               
           
            <div class="stats">

                <div>
                    <h3>Attack${pokemon.stats.atk}</h3>
                   
                </div>

                <div>
                    
                    <p>Défense${pokemon.stats.def}</p>
                </div>

                <div>
                    <h3>Vitesse${pokemon.stats.vit}</h3>
                    
                </div>
                <div>
                <h3>${pokemon.egg_groups}</h3>
                
            </div>


            </div>
     
        <button id="btn">Generate</button>
    </div>

    </div>

    














`
}

getPokeData();
console.log(balise);