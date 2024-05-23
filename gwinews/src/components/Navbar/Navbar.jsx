import React from 'react'
import styles from './Navbar.module.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { HouseFill, CollectionFill, InfoCircleFill, PersonCircle } from 'react-bootstrap-icons'

const Navbar = () => {
  return (
    <Container fluid className={`${styles.navbarMobile} fixed-bottom p-0`}>
        <Row className={`justify-content-around h-100 m-0`}>
            <Col xs={3} className='d-flex flex-column justify-content-center align-items-center mt- p-0'>
                <HouseFill width="2.5rem" height="2.5rem" fill="#1D4988" className={`${styles.iconsNavbarMobile} mb-1`} />
                <p className={`${styles.pNavbarMobile} m-0`}>Home</p>
            </Col>
            <Col xs={3} className='d-flex flex-column justify-content-center align-items-center mt- p-0'>
                <CollectionFill width="2.5rem" height="2.5rem" fill="#1D4988" className={`${styles.iconsNavbarMobile} mb-1`} />
                <p className={`${styles.pNavbarMobile} m-0`}>Categorias</p>
            </Col>
            <Col xs={3} className='d-flex flex-column justify-content-center align-items-center mt- p-0'>
                <InfoCircleFill width="2.5rem" height="2.5rem" fill="#1D4988" className={`${styles.iconsNavbarMobile} mb-1`} />
                <p className={`${styles.pNavbarMobile} m-0`}>Sobre Nós</p>
            </Col>
            <Col xs={3} className='d-flex flex-column justify-content-center align-items-center mt- p-0'>
                <PersonCircle width="2.5rem" height="2.5rem" fill="#1D4988" className={`${styles.iconsNavbarMobile} mb-1`} />
                <p className={`${styles.pNavbarMobile} m-0`}>Perfil</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Navbar