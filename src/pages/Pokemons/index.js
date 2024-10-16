import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './Pokemons.css';

const Pokemons = () => {
    const [characters, setCharacters] = useState([]);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(null);

    const fetchCharacters = (count) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${count * 20}&limit=20`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setNext(data.next);
            })
            .catch(error => console.error('Erro ao carregar os pokemons:', error));
    };

    useEffect(() => {
        fetchCharacters(count);
    }, [count]);

    return (
        <section className='pokemons'>
            <div className='botaopage'>
                <button onClick={() => setCount(count - 1)} disabled={count === 0}>
                    <img src='../../assets/arrow_left.svg' />
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)} disabled={next===null}>
                    <img src='../../assets/arrow_right.svg' />
                </button>
            </div>
            <div id='lista_pokemons'>{characters.map(character => (
                <Card key={character.name} nome={character.name} url={character.url} />
            ))}</div>
        </section>
    )
}

export default Pokemons;