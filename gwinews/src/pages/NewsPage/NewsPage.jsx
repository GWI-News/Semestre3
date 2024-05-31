import React from 'react'
import styles from './NewsPage.module.css'
import Card from '../../components/Card/Card'
import Container from 'react-bootstrap/Container'

const NewsPage = ({ noticias }) => {
    return (
        <>
            <Container fluid className={styles.newsPage}>
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