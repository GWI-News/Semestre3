import React from 'react'
import styles from './Header.module.css'
import { NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = ({logos}) => {
    const location = useLocation()
    
    var separatorColorClassHeader = styles.headerPadrao
    switch (location.pathname) {
        case '/Educacao':
            separatorColorClassHeader = styles.headerEducacao
            break
        case '/Esportes':
            separatorColorClassHeader = styles.headerEsportes
            break
        case '/Entretenimento':
            separatorColorClassHeader = styles.headerEntretenimento
            break
        case '/Economia':
            separatorColorClassHeader = styles.headerEconomia
            break
        default:
            separatorColorClassHeader = styles.headerPadrao
            break
    }

    return (
        <>
            {logos.map((logo, i) => {
                return (
                    <Container key={i} fluid className={`${styles.headerMobile} ${separatorColorClassHeader} fixed-top d-flex justify-content-center align-items-center p-0`}>
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