import { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ nome, url }) => {

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const officialArtwork = data.sprites.other['official-artwork'].front_default;
                const types = data.types.map(typeInfo => typeInfo.type.name);

                setPokemonData({ officialArtwork, types });
            })
            .catch(error => {
                console.error("Erro ao buscar os dados do Pokémon:", error);
            });
    }, [url]);

    const backgroundColor = (cor) => {
        switch (cor) {
            case "normal":
                return ['rgb(168, 168, 120)', 'rgba(168, 168, 120, .5)']; // Cinza claro
            case "fighting":
                return ['rgb(192, 48, 40)', 'rgba(192, 48, 40, .5)']; // Vermelho escuro
            case "flying":
                return ['rgb(168, 144, 240)', 'rgba(168, 144, 240, .5)']; // Azul claro
            case "poison":
                return ['rgb(160, 64, 160)', 'rgba(160, 64, 160, .5)']; // Roxo
            case "ground":
                return ['rgb(224, 192, 104)', 'rgba(224, 192, 104, .5)']; // Amarelo terroso
            case "rock":
                return ['rgb(184, 160, 56)', 'rgba(184, 160, 56, .5)']; // Amarelo dourado
            case "bug":
                return ['rgb(168, 184, 32)', 'rgba(168, 184, 32, .5)']; // Verde inseto
            case "ghost":
                return ['rgb(112, 88, 152)', 'rgba(112, 88, 152, .5)']; // Roxo escuro
            case "steel":
                return ['rgb(184, 184, 208)', 'rgba(184, 184, 208, .5)']; // Cinza metálico
            case "fire":
                return ['rgb(240, 128, 48)', 'rgba(240, 128, 48, .5)']; // Laranja
            case "water":
                return ['rgb(104, 144, 240)', 'rgba(104, 144, 240, .5)']; // Azul
            case "grass":
                return ['rgb(120, 200, 80)', 'rgba(120, 200, 80, .5)']; // Verde
            case "electric":
                return ['rgb(248, 208, 48)', 'rgba(248, 208, 48, .5)']; // Amarelo elétrico
            case "psychic":
                return ['rgb(248, 88, 136)', 'rgba(248, 88, 136, .5)']; // Rosa claro
            case "ice":
                return ['rgb(152, 216, 216)', 'rgba(152, 216, 216, .5)']; // Azul gelo
            case "dragon":
                return ['rgb(112, 56, 248)', 'rgba(112, 56, 248, .5)']; // Azul escuro
            case "dark":
                return ['rgb(112, 88, 72)', 'rgba(112, 88, 72, .5)']; // Marrom escuro
            case "fairy":
                return ['rgb(238, 153, 172)', 'rgba(238, 153, 172, .5)']; // Rosa
            case "shadow":
                return ['rgb(100, 100, 100)', 'rgba(100, 100, 100, .5)']; // Cinza escuro
            default:
                return ['rgb(128,128,128)', 'rgba(128,128,128, .5)']; // Cinza neutro para casos desconhecidos
        }
    };

    return (
        <div id='pokemon'>
            {pokemonData && ( // Verifica se pokemonData está definido
                <>
                    <div id='faixa' style={{ backgroundColor: backgroundColor(pokemonData.types[0])[0] }}></div>
                    <div id='figura' style={{ backgroundColor: backgroundColor(pokemonData.types[0])[1] }}>
                        <img src={(pokemonData.officialArtwork!==null)?pokemonData.officialArtwork : '../../assets/pokeball.svg'} alt={nome} />
                    </div>
                    <div id='descricao'>
                        <div id='faixa_black'><img src='../../assets/Group_5.svg' alt='faixa' /></div>
                        <p className='destaque'>{nome}</p>
                        <div id='tags'>
                            {pokemonData.types.map((type, index) => (
                                <div key={index} className='tag' style={{ backgroundColor: backgroundColor(type)[0]}} id={type}>{type}</div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;