import React from 'react'
import { useState } from 'react'
import { NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { HouseFill, CollectionFill, InfoCircleFill, PersonCircle, X } from 'react-bootstrap-icons'

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false)
    const handleCloseCategories = () => setShowCategories(false)
    const handleShowCategories = () => setShowCategories(true)

    const [showLogin, setShowLogin] = useState(false)
    const handleCloseLogin = () => setShowLogin(false)
    const handleShowLogin = () => setShowLogin(true)

    const [showSignUp, setShowSignUp] = useState(false)
    const handleCloseSignUp = () => setShowSignUp(false)
    const handleShowSignUp = () => setShowSignUp(true)

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
            <Offcanvas show={showCategories} onHide={handleCloseCategories} placement={'bottom'} className={`${styles.offcanvasMobile} rounded-top`} backdropClassName={styles.backdropExtraClass}>
                <Offcanvas.Body className={'pt-2 pb-2'}>
                    <Col className={`${styles.colCategorias} d-flex flex-column justify-content-center align-items-center`}>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Empregos'} className={location.pathname === "/Empregos" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEmpregos}` : `${styles.linkCategorias} ${styles.linkCategoriaEmpregos}`} onClick={handleCloseCategories}><h1>Empregos</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Educacao'} className={location.pathname === "/Educacao" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEducacao}` : `${styles.linkCategorias} ${styles.linkCategoriaEducacao}`} onClick={handleCloseCategories}><h1>Educação</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Esportes'} className={location.pathname === "/Esportes" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEsportes}` : `${styles.linkCategorias} ${styles.linkCategoriaEsportes}`} onClick={handleCloseCategories}><h1>Esportes</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Entretenimento'} className={location.pathname === "/Entretenimento" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEntretenimento}` : `${styles.linkCategorias} ${styles.linkCategoriaEntretenimento}`} onClick={handleCloseCategories}><h1>Entretenimento</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Economia'} className={location.pathname === "/Economia" ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEconomia}` : `${styles.linkCategorias} ${styles.linkCategoriaEconomia}`} onClick={handleCloseCategories}><h1>Economia</h1></NavLink>
                        </Row>
                    </Col>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={showLogin} onHide={handleCloseLogin} placement='bottom' className={`${styles.offcanvasMobile} rounded-top`} backdropClassName={styles.backdropExtraClass}>
                <Offcanvas.Header className='justify-content-center text-center ps-2 pe-2 pt-1 pb-1'>
                    <h1 className={`${styles.offcanvasTitle} m-0 pt-1 pb-2`}>Login</h1>
                </Offcanvas.Header>
                <Offcanvas.Body className='ps-2 pe-2 pt-0 pb-1'>
                    <Form controlId="Login" className='d-flex flex-column justify-content-center'>
                        <Form.Group controlId="LoginEmail" className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Usuario@email.com" className={styles.formInputMobile} />
                        </Form.Group>

                        <Form.Group controlId="LoginPassword" className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" className={styles.formInputMobile} />
                            <small className={styles.formSmallMobile}>Recuperar Senha</small>
                        </Form.Group>
                        <div className='d-flex justify-content-between align-items-center pt-2 pb-2'>
                            <Button type="submit" className={styles.formButtonMobile}>
                                Entrar
                            </Button>
                            <Button type='button' onClick={() => {handleShowSignUp(); handleCloseLogin();}} className={styles.formButtonMobile}>
                                Cadastro
                            </Button>
                        </div>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={showSignUp} onHide={handleCloseSignUp} placement='bottom' className={`${styles.offcanvasMobile} rounded-top`} backdropClassName={styles.backdropExtraClass}>
                <Offcanvas.Header className='justify-content-center text-center ps-2 pe-2 pt-1 pb-1'>
                    <h1 className={`${styles.offcanvasTitle} m-0 pt-1 pb-2`}>Cadastro</h1>
                </Offcanvas.Header>
                <Offcanvas.Body className='ps-2 pe-2 pt-0 pb-1'>
                    <Form controlId="SignUp" className='d-flex flex-column justify-content-center'>
                        <Form.Group controlId="SignUpName" className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Nome:</Form.Label>
                            <Form.Control type="email" placeholder="João Imaginário" className={styles.formInputMobile} />
                        </Form.Group>
                        <Form.Group controlId="SignUpEmail" className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Email:</Form.Label>
                            <Form.Control type="password" placeholder="joao@email.com" className={styles.formInputMobile} />
                        </Form.Group>
                        <Form.Group controlId="SignUpPassword" className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Senha de João" className={styles.formInputMobile} />
                        </Form.Group>
                        <Form.Group controlId="SignUpPasswordConfirm" className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Confirmar Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Senha de João Novamente" className={styles.formInputMobile} />
                        </Form.Group>
                        <div className='d-flex justify-content-center align-items-center pt-2 pb-2'>
                            <Button type="submit" className={styles.formButtonMobile}>
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
            <Container onClick={showCategories || showLogin || showSignUp ? () => { handleCloseCategories(); handleCloseLogin(); handleCloseSignUp(); } : null} fluid className={`${styles.navbarMobile} ${offcanvasCategorySelected} fixed-bottom p-0`}>
                <Row className={`justify-content-around h-100 m-0`}>
                    <Col xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
                        <NavLink to={'/'} className={location.pathname === '/' ? `${styles.navbarIconSelectedCol} text-center text-decoration-none p-1` : `text-center text-decoration-none`}>
                            <HouseFill className={location.pathname === '/' ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                            <p className={location.pathname === '/' ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Home</p>
                        </NavLink>
                    </Col>
                    <Col onClick={handleShowCategories} xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
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
                    <Col onClick={handleShowLogin} xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
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