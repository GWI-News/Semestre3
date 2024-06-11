import React from 'react'
import styles from './PerfilAdm.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { userAuthentication } from '../../hooks/userAuthentication'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { CameraFill, FilePerson, FileEarmarkPerson, PeopleFill, FileEarmarkFont, Newspaper, CameraReelsFill } from 'react-bootstrap-icons'

const Perfil = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, history])

    return (
        <>
            <Container fluid className={styles.perfilAdmContainer}>
                <Col className={styles.perfilAdmInfoContainer}>
                    <Row className={`${styles.perfilAdmSectionFirst} m-0`}>
                        <Row className={`align-items-center mb-3 m-0 p-0`}>
                            <Col xs={4} className={`p-0`}>
                                <div className={`${styles.perfilAdmContainerUserImage} d-flex justify-content-center align-items-center`}>
                                    <CameraFill className={styles.perfilAdmUserImage}></CameraFill>
                                </div>
                            </Col>
                            <Col xs={8} className={`p-0`}>
                                <h1 className={`${styles.perfilAdmUserName}`}>João do Nunca Imaginário</h1>
                            </Col>
                        </Row>
                        <Row className={`m-0 p-0`}>
                            <Col className={`p-0`}>
                                <h5>Email: joao@email.com</h5>
                                <h5>Redefinir Senha</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className={`${styles.perfilAdmSectionCrudButton}`}>Editar</Button>
                                <Button onClick={logout} className={`${styles.perfilAdmSectionCrudButton}`}>Sair</Button>
                            </Col>
                        </Row>
                    </Row>
                    <Row className={`${styles.perfilAdmSection} m-0`}>
                        <Row className='mb-3 m-0 p-0'>
                            <Col className='p-0'>
                                <h2 className={`${styles.perfilAdmSectionTitle}`}>Usuários</h2>
                            </Col>
                        </Row>
                        <Row className='m-0 p-0'>
                            <Col xs={6} className='ps-4 pe-4 p-0'>
                                <Row className='m-0 p-0'>
                                    <div className='d-flex flex-column justify-content-center align-items-center w-50 p-0'>
                                        <FilePerson className={`${styles.perfilAdmSectionCrudIcons}`}></FilePerson>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center w-50 p-0'>
                                        <PeopleFill className={`${styles.perfilAdmSectionCrudIcons}`}></PeopleFill>
                                        <FileEarmarkPerson className={`${styles.perfilAdmSectionCrudIcons}`}></FileEarmarkPerson>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={6} className='d-flex flex-column justify-content-around pe-4 p-0'>
                                <Button className={`${styles.perfilAdmSectionCrudButton}`}>
                                    <h4 className={`${styles.perfilAdmSectionCrudButtonText}`}>Criar</h4>
                                </Button>
                                <Button className={`${styles.perfilAdmSectionCrudButton}`}>
                                    <h4 className={`${styles.perfilAdmSectionCrudButtonText}`}>Listar</h4>
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                    <Row className={`${styles.perfilAdmSectionLast} m-0`}>
                        <Row className='mb-3 m-0 p-0'>
                            <Col className='p-0'>
                                <h2 className={`${styles.perfilAdmSectionTitle}`}>Notícias</h2>
                            </Col>
                        </Row>
                        <Row className='m-0 p-0'>
                            <Col xs={6} className='ps-4 pe-4 p-0'>
                                <Row className='m-0 p-0'>
                                    <div className='d-flex flex-column justify-content-center align-items-center w-50 p-0'>
                                        <FileEarmarkFont className={`${styles.perfilAdmSectionCrudIcons}`}></FileEarmarkFont>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center w-50 p-0'>
                                        <Newspaper className={`${styles.perfilAdmSectionCrudIcons}`}></Newspaper>
                                        <CameraReelsFill className={`${styles.perfilAdmSectionCrudIcons}`}></CameraReelsFill>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={6} className='d-flex flex-column justify-content-around pe-4 p-0'>
                                <Button className={`${styles.perfilAdmSectionCrudButton}`}>
                                    <h4 className={`${styles.perfilAdmSectionCrudButtonText}`}>Criar</h4>
                                </Button>
                                <Button className={`${styles.perfilAdmSectionCrudButton}`}>
                                    <h4 className={`${styles.perfilAdmSectionCrudButtonText}`}>Listar</h4>
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default Perfil