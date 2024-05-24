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

    const categoryPath = ['/Empregos', '/Educacao', '/Esportes', '/Entretenimento', '/Economia'].includes(location.pathname)

    var offcanvasCategorySelected = styles.navbarPadrao
    switch (location.pathname) {
        case '/Educacao':
            offcanvasCategorySelected = styles.navbarEducacao
            break
        case '/Esportes':
            offcanvasCategorySelected = styles.navbarEsportes
            break
        case '/Entretenimento':
            offcanvasCategorySelected = styles.navbarEntretenimento
            break
        case '/Economia':
            offcanvasCategorySelected = styles.navbarEconomia
            break
        default:
            offcanvasCategorySelected = styles.navbarPadrao
            break
    }

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
            <Container onClick={show ? handleClose : null} fluid className={`${styles.navbarMobile} ${offcanvasCategorySelected} fixed-bottom p-0`}>
                <Row className={`justify-content-around h-100 m-0`}>
                    <Col xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
                        <NavLink to={'/'} className={location.pathname === '/' ? `${styles.navbarIconSelectedCol} text-center text-decoration-none p-1` : `text-center text-decoration-none`}>
                            <HouseFill className={location.pathname === '/' ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                            <p className={location.pathname === '/' ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Home</p>
                        </NavLink>
                    </Col>
                    <Col onClick={handleShow} xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
                        <div className={categoryPath ? `${styles.navbarIconSelectedCol} d-flex flex-column justify-content-center align-items-center p-1` : 'd-flex flex-column justify-content-center align-items-center p-0'}>
                            <CollectionFill className={categoryPath ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                            <p className={categoryPath ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Categorias</p>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
                        <NavLink to={'/SobreNos'} className={location.pathname === '/SobreNos' ? `${styles.navbarIconSelectedCol} text-center text-decoration-none p-1` : `text-center text-decoration-none`}>
                            <InfoCircleFill className={location.pathname === '/SobreNos' ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                            <p className={location.pathname === '/SobreNos' ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Sobre</p>
                        </NavLink>
                    </Col>
                    <Col xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
                        <div className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedCol} d-flex flex-column justify-content-center align-items-center p-1` : 'd-flex flex-column justify-content-center align-items-center p-0'}>
                            <PersonCircle className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                            <p className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Perfil</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Navbar