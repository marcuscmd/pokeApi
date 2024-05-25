import { useEffect, useState, useRef } from "react"
import buscarpokemon from "../services/pokemon"
import { CardPokemon } from "../components/CardPokemon/CardPokemon";
import style from './_pokemon.module.css';

export const Pokemon = () => {
    const [pokemonAtivo, setPokemonAtivo] = useState({})
    const [nome, setNome] = useState('charizard');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        buscarpokemon.obterPokemon(nome)
            .then((response) => {
                setPokemonAtivo(response.data)
                setLoading(false)
            })
            .catch((err) => setError(err))

    }, [nome])

    const handleClick = () => {
        if (inputRef.current) {
            setNome(inputRef.current.value);
            inputRef.current.value = '';
        }

    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <div className={style.wrapper}>
        <div className={style.buscar}>
            <input type="text"
                ref={inputRef}
                placeholder="Buscar Personagem"
                onKeyDown={handleKeyDown}
            />
            <button type="button"
                onClick={handleClick}
            >OK</button>
        </div>
        <CardPokemon data={pokemonAtivo} />
    </div>

}