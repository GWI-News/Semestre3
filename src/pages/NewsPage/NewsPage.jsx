import React from 'react'
import styles from './NewsPage.module.css'
import Card from '../../components/Card/Card'
import Container from 'react-bootstrap/Container'
import { Carousel } from 'react-bootstrap';

const NewsPage = ({ noticias }) => {
  return (
    <>
      <Container fluid className={styles.newsPage}>
        <h1 className={styles.tituloPages}>
          Últimas Notícias
        </h1>

        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="selbr.jpg"
              alt="Seleção Brasileira"
            />
            <Carousel.Caption className={styles.carouselTexto}>
              <h3>Seleção brasileira convocada.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="mercadot.jpg"
              alt="Mercado de trabalho"
            />
            <Carousel.Caption className={styles.carouselTexto}>
              <h3>A luta da mulher pela equidade no mercado de trabalho.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="ec.jpg"
              alt="Economia"
            />
            <Carousel.Caption className={styles.carouselTexto}>
              <h3>Economia do Brasil cresce 0,8%.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

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