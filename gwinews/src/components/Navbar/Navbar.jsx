import React from 'react'
import { useState } from 'react'
import { NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { HouseFill, CollectionFill, InfoCircleFill, PersonCircle } from 'react-bootstrap-icons'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement={'bottom'} className={`${styles.offcanvasCategoriasMobile} rounded-top`} backdropClassName={styles.backdropExtraClass}>
                <Offcanvas.Body className={'pt-2 pb-2'}>
                    <Col className={`${styles.colCategorias} d-flex flex-column justify-content-center align-items-center`}>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Empregos'} className={location.pathname === "/Empregos" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEmpregos}` : `${styles.linkCategorias} ${styles.linkCategoriaEmpregos}`} onClick={handleClose}><h1>Empregos</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Educacao'} className={location.pathname === "/Educacao" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEducacao}` : `${styles.linkCategorias} ${styles.linkCategoriaEducacao}`} onClick={handleClose}><h1>Educação</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Esportes'} className={location.pathname === "/Esportes" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEsportes}` : `${styles.linkCategorias} ${styles.linkCategoriaEsportes}`} onClick={handleClose}><h1>Esportes</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Entretenimento'} className={location.pathname === "/Entretenimento" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEntretenimento}` : `${styles.linkCategorias} ${styles.linkCategoriaEntretenimento}`} onClick={handleClose}><h1>Entretenimento</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Economia'} className={location.pathname === "/Economia" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEconomia}` : `${styles.linkCategorias} ${styles.linkCategoriaEconomia}`} onClick={handleClose}><h1>Economia</h1></NavLink>
                        </Row>
                    </Col>
                </Offcanvas.Body>
            </Offcanvas>
            <Container onClick={show ? handleClose : null} fluid className={`${styles.navbarMobile} fixed-bottom p-0`}>
                <Row className={`justify-content-around h-100 m-0`}>
                    <Col xs={3} className='d-flex flex-column justify-content-center align-items-center mt- p-0'>
                        <NavLink to={'/'}>
                            <HouseFill width="2.5rem" height="2.5rem" fill="#1D4988" className={`${styles.iconsNavbarMobile} mb-1`} />
                            <p className={`${styles.pNavbarMobile} m-0`}>Home</p>
                        </NavLink>
                    </Col>
                    <Col onClick={handleShow} xs={3} className='d-flex flex-column justify-content-center align-items-center mt- p-0'>
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
        </>
    )
}

export default Navbar