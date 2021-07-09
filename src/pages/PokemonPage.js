import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import Loader from "../components/Loader";

const PokemonPage = ({ match }) => {
  const pokemonName = match.params.id;
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  

  const getPokemon = async (id) => {
      const details = await getPokemonData(id);
      setDetails(details.data);
      console.log(details.data)
      setLoading(false);
  }

  const getPokemonData = async (id) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res;
  }

  useEffect(() => {
      getPokemon(pokemonName);
  }, [])

  return (
    <>
    {loading ? (
        <Loader/>
    ) : (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                    
                        <Card.Img style={{ width: '15rem' }} src={details.sprites.front_default} variant='top'/>
                    
                    <Card.Body className={`${details.types[0].type.name} rounded text-white`}>
                        
                            <Card.Title as='div'>
                                <strong>#{details.id} {details.name.charAt(0).toUpperCase() + details.name.slice(1)}</strong>
                            </Card.Title>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                {details.types.map(t => (
                                    <Col key={t.type.name}>
                                        <div className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'white' }}>
                                            {t.type.name.toUpperCase()}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <Row>
                                <Col>
                                    <Card.Img style={{ width: '15rem' }} src={details.sprites.front_default}/>
                                    <Card.Text>Normal Form</Card.Text>
                                </Col>
                                <Col>
                                    <Card.Img style={{ width: '15rem' }} src={details.sprites.front_shiny}/>
                                    <Card.Text>Shiny Form</Card.Text>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <div className='px-4 py-1 rounded' style={{ border: '1px black solid' }}>Abilities</div>
                                </Col>
                            </Row>
                            <Row className='text-center'>
                                {details.abilities.map(a => (
                                    <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className={`rounded px-4 py-1`}>
                                            {a.ability.name.toUpperCase()}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )}
</>
  );
};

export default PokemonPage;
