import React, { useEffect } from 'react'
import styles from './Faq.module.css'

import { userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Faq = () => {
    const navigate = useNavigate()

    const location = useLocation()  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])

    const { error: authError, loading } = userAuthentication()

    return (
        <Container fluid className={styles.faqContainer}>
            <Row className={`m-0 p-0`}>
                <Col className={`m-0 p-0`}>
                    <div className={styles.faqSectionDivisor}>
                        <h1>FAQ</h1>
                        <p>Veja aqui as dúvidas mais frequentes sobre nossos serviços.</p>
                    </div>
                    <div className={styles.faqSectionDivisor}>
                        <h2>O que é o GWI News?</h2>
                        <p>O GWI News é um Portal de Notícias que centraliza notícias de diversas fontes e temas da região de Araraquara em único lugar.</p>
                        <h2>Como usar o GWI News?</h2>
                        <p>Simplesmente acesse o site <Link to={'/'}>://gwinews-e715f.web.app</Link> e navegue pelas notícias. Você pode filtrar pelas nossas categorias ou buscar notícias específicas.</p>
                        <h2>O GWI News é gratuito?</h2>
                        <p>Sim, o GWI News é 100% gratuito. Não temos nenhum plano de assinatura ou conteúdos exclusivamente pagos.</p>
                        <h2>Com que frequência o GWI News é atualizado?</h2>
                        <p>O GWI News é atualizado em tempo real, então você pode ter a certeza de que nós sempre teremos as mais recentes notícias.</p>
                        <h2>Eu posso compartilhar as notícias do GWI News?</h2>
                        <p>Sim, você pode. É possível compartilhar nossas notícias através dos botões de compartilhamento quando as abre.</p>
                        <h2>Como eu posso entrar em contato com o GWI News?</h2>
                        <p> Se você possuir qualquer dúvida ou feedback, você pode nos enviar uma mensagem através da caixa de perguntas nesta página.</p>
                    </div>
                    <div>
                        <h2>Fale Conosco Você Também!</h2>
                        <p className='m-0'>Envie-nos uma mensagem com suas dúvidas, sugestões ou feedback.</p>
                        <Form className='d-flex flex-column justify-content-center align-items-center'>
                            <Form.Group className='w-100 mt-2 mb-2'>
                                <Form.Label className={styles.formLabelMobile}>Mensagem:</Form.Label>
                                <Form.Control as="textarea" placeholder="Digite sua mensagem..." className={`${styles.formInputMobile}`} />
                            </Form.Group>
                            {loading && <button className={`${styles.formButtonMobile} btn btn-primary`}>Enviando...</button>}
                            {!loading && <button className={`${styles.formButtonMobile} btn btn-primary`}>Enviar</button>}
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Faq