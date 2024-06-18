import React, { useEffect } from 'react'
import styles from './NewsPage.module.css'
import Card from '../../components/Card/Card'
import Container from 'react-bootstrap/Container'
import { Carousel } from 'react-bootstrap';
import PesquisaTempoReal from '../../components/Pesquisa/Pesquisa'
import { NavLink } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { analytics } from '../../firebase/config';
import { logEvent } from 'firebase/analytics';

const NewsPage = ({ noticias, categoria }) => {
  useEffect(() => {
    const buscarDados = async () => {
      const docRef = doc(db, 'Metrics', 'categoria')
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        setDoc(docRef, {})
      }
      if (!(categoria in docSnap.data())) {
        setDoc(docRef, {
          ...docSnap.data(),
          [categoria]: 1
        })
      } else {
        setDoc(docRef, {
          ...docSnap.data(),
          [categoria]: docSnap.data()[categoria] + 1
        })
      }
    }
    if (categoria !== undefined) {
      buscarDados()
    }
    logEvent(analytics, 'Acesso_Por_Categoria', {
      screen_name: categoria,
    })
  }, [categoria]
)  

  return (
    <>
      <Container fluid className={styles.newsPage}>
        <PesquisaTempoReal></PesquisaTempoReal>
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