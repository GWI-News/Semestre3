import React from 'react'
import styles from './Header.module.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = ({logos}) => {
    return (
        <>
            {logos.map((logo, i) => {
                return (
                    <Container key={i} fluid className={`${styles.headerMobile} fixed-top d-flex justify-content-center align-items-center p-0`}>
                        <Row className='justify-content-center'>
                            <Col xs={9} className='align-items-center p-0'>
                                <img src={logo.img} alt={logo.alt} className={`w-100 p-0`} />
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </>
    )
}

export default Header