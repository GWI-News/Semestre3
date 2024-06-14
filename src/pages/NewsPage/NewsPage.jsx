import React from 'react'
import styles from './NewsPage.module.css'
import Card from '../../components/Card/Card'
import Container from 'react-bootstrap/Container'
import PesquisaTempoReal from '../../components/Pesquisa/Pesquisa'

const NewsPage = ({ noticias }) => {
    return (
        <>
            <Container fluid className={styles.newsPage}>
                <PesquisaTempoReal></PesquisaTempoReal>
                {noticias && noticias.map((noticia, i) => {
                    return (
                        <Card key={i} noticia={noticia}></Card>
                    )
                })}
            </Container>
        </>
    )
}

export default NewsPage