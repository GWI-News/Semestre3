import React, { useState, useEffect } from 'react'
import styles from './NewsPage.module.css'
import { NavLink, useLocation } from 'react-router-dom'

import { doc, getDoc, setDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { analytics } from '../../firebase/config'
import { logEvent } from 'firebase/analytics'

import Card from '../../components/Card/Card'
import PesquisaTempoReal from '../../components/Pesquisa/Pesquisa'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const NewsPage = ({ categoria }) => {
  const location = useLocation()  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const [noticias, setNoticias] = useState([])
  useEffect(() => {
    const getNoticias = async () => {
      const data = await getDocs(collection(db, 'Noticias'))
      setNoticias(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getNoticias()
  }, [])
  
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
  }, [categoria])

  const noticiasCarrossel = noticias.slice(0, 3)
  const noticiasCards = noticias.slice(3)

  return (
    <>
      <Container fluid className={styles.newsPage}>
        <PesquisaTempoReal></PesquisaTempoReal>
        <h1 className={styles.tituloPages}>
          Últimas Notícias
        </h1>

        <Carousel indicators={false}>
          {noticiasCarrossel && noticiasCarrossel.map((carouselItem, i) => {
              return (
                <Carousel.Item key={i}>
                  <NavLink to={`/${categoria}/${carouselItem.id}&${carouselItem.title}`}>
                    <img
                      className="d-block w-100"
                      src={carouselItem.img}
                      alt={carouselItem.alt_imagem}
                    />
                    <Carousel.Caption className={`${styles.carouselTexto} p-1`}>
                      <h3 className='m-0'>{carouselItem.titulo}</h3>
                    </Carousel.Caption>
                  </NavLink>
                </Carousel.Item>
              )
          })}
        </Carousel>

        {noticiasCards && noticiasCards.map((noticia, i) => {
          return (
            <Card key={i} noticia={noticia}></Card>
          )
        })}
      </Container>
    </>
  )
}

export default NewsPage