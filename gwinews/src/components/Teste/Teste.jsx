import React from 'react'
import styles from './Teste.module.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Teste = () => {
    return (
        <div>
            <Container fluid className={`${styles.textoClaro} bg-dark m-0`}>
                <Row className='justify-content-center'>
                    <Col sm={9} className='bg-danger text-center'>
                        <h1>Header Grande Demais</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Teste