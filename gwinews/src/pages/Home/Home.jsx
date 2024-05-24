import React from 'react'
import Card from '../../components/Card/Card'
import styles from './Home.module.css'
import { Container } from 'react-bootstrap'

const Home = ({ noticias }) => {
    return (
        <>
            <Container fluid className={styles.home}>{noticias && noticias.map((noticia, i) => {
                return (
                    <Card key={i} noticia={noticia}></Card>
                )
            })}</Container>
            
        </>
    )
}

export default Home