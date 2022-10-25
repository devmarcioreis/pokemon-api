import React from "react";

const Pokeinfo = () => {
    return (
        <>
            <h1>Charmander</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="Charmander" />
            <div className="abilities">
                <div className="group">
                    <h2>Habilidade</h2>
                </div>
                <div className="group">
                    <h2>Poder Solar</h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>Hp: 30</h3>
                <h3>Ataque: 52</h3>
                <h3>Defesa: 43</h3>
                <h3>Ataque Especial: 50</h3>
                <h3>Velocidade</h3>
            </div>
        </>
    )
}

export default Pokeinfo;