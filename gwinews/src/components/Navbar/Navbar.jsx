import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

import { userAuthentication } from '../../hooks/userAuthentication'
import { useAuthValue } from '../../context/AuthContext'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { HouseFill, CollectionFill, InfoCircleFill, PersonCircle, X } from 'react-bootstrap-icons'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { user } = useAuthValue()
    const { logout } = userAuthentication()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login, error: authError, loading } = userAuthentication()
    const handlerLoginSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const user = { email, password }
        const res = await login(user)
        console.table(res)
        navigate('/Perfil')
        setEmail('')
        setPassword('')
    }
    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    useEffect(() => {
        handleCloseCategories()
        handleCloseLogin()
        handleCloseSignUp()
    }, [location.pathname])

    const [showCategories, setShowCategories] = useState(false)
    const handleCloseCategories = () => setShowCategories(false)
    const handleShowCategories = () => setShowCategories(true)

    const [showLogin, setShowLogin] = useState(false)
    const handleCloseLogin = () => setShowLogin(false)
    const handleShowLogin = () => setShowLogin(true)

    const [showSignUp, setShowSignUp] = useState(false)
    const handleCloseSignUp = () => setShowSignUp(false)
    const handleShowSignUp = () => setShowSignUp(true)

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
                            <NavLink to={'/Empregos'} className={location.pathname === '/Empregos' ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEmpregos}` : `${styles.linkCategorias} ${styles.linkCategoriaEmpregos}`}><h1>Empregos</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Educacao'} className={location.pathname === '/Educacao' ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEducacao}` : `${styles.linkCategorias} ${styles.linkCategoriaEducacao}`}><h1>Educação</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Esportes'} className={location.pathname === '/Esportes' ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEsportes}` : `${styles.linkCategorias} ${styles.linkCategoriaEsportes}`}><h1>Esportes</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Entretenimento'} className={location.pathname === '/Entretenimento' ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEntretenimento}` : `${styles.linkCategorias} ${styles.linkCategoriaEntretenimento}`}><h1>Entretenimento</h1></NavLink>
                        </Row>
                        <Row className={`${styles.linkConatiner} w-100`}>
                            <NavLink to={'/Economia'} className={location.pathname === '/Economia' ? `${styles.linkCategorias} ${styles.linkCategoriaAtivo} ${styles.linkCategoriaAtivoEconomia}` : `${styles.linkCategorias} ${styles.linkCategoriaEconomia}`}><h1>Economia</h1></NavLink>
                        </Row>
                    </Col>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={showLogin} onHide={handleCloseLogin} placement='bottom' className={`${styles.offcanvasMobile} rounded-top`} backdropClassName={styles.backdropExtraClass}>
                <Offcanvas.Header className='justify-content-center text-center ps-2 pe-2 pt-1 pb-1'>
                    <h1 className={`${styles.offcanvasTitle} m-0 pt-1 pb-2`}>Login</h1>
                </Offcanvas.Header>
                <Offcanvas.Body className='ps-2 pe-2 pt-0 pb-1'>
                    <Form onSubmit={handlerLoginSubmit} className='d-flex flex-column justify-content-center'>
                        <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Email:</Form.Label>
                            <Form.Control type='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='usuario@email.com' className={styles.formInputMobile} />
                        </Form.Group>

                        <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Senha:</Form.Label>
                            <Form.Control type='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha' className={styles.formInputMobile} />
                            <small className={styles.formSmallMobile}>Recuperar Senha</small>
                        </Form.Group>
                        <div className='d-flex justify-content-between align-items-center pt-2 pb-2'>
                            {!loading && <button className={`${styles.formButtonMobile} btn btn-primary`}>Entrar</button>}
                            {loading && <button className={`${styles.formButtonMobile} btn btn-primary`}>Aguarde...</button>}
                            <Button onClick={() => { handleShowSignUp(); handleCloseLogin(); }} className={styles.formButtonMobile}>
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
                    <Form className='d-flex flex-column justify-content-center'>
                        <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Nome:</Form.Label>
                            <Form.Control type='email' placeholder='João Imaginário' className={styles.formInputMobile} />
                        </Form.Group>
                        <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Email:</Form.Label>
                            <Form.Control type='password' placeholder='joao@email.com' className={styles.formInputMobile} />
                        </Form.Group>
                        <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Senha:</Form.Label>
                            <Form.Control type='password' placeholder='Senha de João' className={styles.formInputMobile} />
                        </Form.Group>
                        <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
                            <Form.Label className={styles.formLabelMobile}>Confirmar Senha:</Form.Label>
                            <Form.Control type='password' placeholder='Senha de João Novamente' className={styles.formInputMobile} />
                        </Form.Group>
                        <div className='d-flex justify-content-center align-items-center pt-2 pb-2'>
                            <Button type='submit' className={styles.formButtonMobile}>
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
                    <Col onClick={user ? null : handleShowLogin} xs={3} className='d-flex flex-column justify-content-center align-items-center p-0'>
                        {!user && (
                            <>
                                <div className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedCol} d-flex flex-column justify-content-center align-items-center p-1` : 'd-flex flex-column justify-content-center align-items-center p-0'}>
                                    <PersonCircle className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                                    <p className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Perfil</p>
                                </div>
                            </>
                        )}
                        {user && (
                            <>
                                <NavLink to={'/Perfil'}>
                                    <div className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedCol} d-flex flex-column justify-content-center align-items-center p-1` : 'd-flex flex-column justify-content-center align-items-center p-0'}>
                                        <PersonCircle className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedIcon} mb-1` : `${styles.iconsNavbarMobile} mb-1`} />
                                        <p className={location.pathname === '/Perfil' ? `${styles.navbarIconSelectedP} m-0` : `${styles.pNavbarMobile} m-0`}>Perfil</p>
                                    </div>
                                </NavLink>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Navbar