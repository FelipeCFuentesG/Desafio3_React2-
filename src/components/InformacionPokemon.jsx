import { Container, Image, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

const InformacionPokemon = () => {
  const { name } = useParams();

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setPokemon(data);
          setLoading(false);
        });
      } else {
        navigate("/pokemon");
      }
    });
  }, [name]);

  return (
    <>
      <Container className="center bg-secondary">
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <>
            <h1 className="name">{name}</h1>
            <div className="pokemon-pokemon">
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                width="380px"
              />
              <ListGroup className="stats">
                {pokemon.stats.map((stat) => {
                  return (
                    <ListGroup.Item key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </ListGroup.Item>
                  );
                })}
                <span className={"type " + pokemon.types[0].type.name}>
                  {pokemon.types[0].type.name}
                </span>
              </ListGroup>

            </div>
          </>
        )}
      </Container>
    </>

  );
};

export default InformacionPokemon;