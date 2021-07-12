import React from 'react';
import { Spinner, Col, Row } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center mt-5' style={{ height: '100vh', alignContent:'center' }}>
            <Row>
                <Col>
                    <Spinner
                        className='spinner-border  spinner-border-lg'
                        role='status'
                        style={{ height: '10vh', width: '10vh' }}
                    >
                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='mx-3'> Fetching Pokemons...</div>
                </Col>
            </Row>
        </div>
    )
}

export default Loader;