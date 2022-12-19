import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const PokemonSelect = () => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon'
    const [results, setResults] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState('')
    const navigate = useNavigate()

    const irAPokemon = () => {
        if (selectedPokemon === '') { return }
        navigate(`/pokemon/${selectedPokemon}`)
    }

    useEffect(() => {
        fetch(endpoint).then(resp => resp.json())
            .then(data => { setResults(data.results.map(results => results.name)) })
    }, [])
    return (
        <>
            <h1>Selecciona el Pokemón!</h1>
            <Form.Select size="lg" onChange={(e) => setSelectedPokemon(e.target.value)}>
                <option value='' disabled>Selecciona un Pokemón</option>
                {results.map(name => {
                    return <option key={name} value={name}>{name}</option>
                })}</Form.Select>


            <Button variant="dark" type="submit" onClick={irAPokemon}>Ver detalle</Button>
        </>
    )
}


export default PokemonSelect;