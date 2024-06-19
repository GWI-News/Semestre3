import React from 'react'
import styles from './CrudNoticias.module.css'
import { useState, useEffect } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useAuthValue } from '../../context/AuthContext'

import { crudNoticiaHook } from '../../hooks/crudNoticiaHook'

import PesquisaTempoReal from '../../components/Pesquisa/Pesquisa'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Card from '../../components/Card/Card'

const CrudNoticias = () => {
    const { user } = useAuthValue()
    
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user])

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const { deleteNoticia } = crudNoticiaHook()
    const noticiasCollectionRef = collection(db, 'Noticias')
    const [noticias, setNoticias] = useState([])

    const getNoticias = async () => {
        const data = await getDocs(noticiasCollectionRef)
        setNoticias(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getNoticias()
    }, [])

    const navigate = useNavigate()
    const onNavigate = (path) => {
        navigate(path)
    }

    const handleDelete = async (id) => {
        console.log('delete')
        await deleteNoticia(id)
        getNoticias()
    }

    return (
        <>
            <Container fluid className={styles.CrudPage}>
                <PesquisaTempoReal></PesquisaTempoReal>
                <h1 className={styles.tituloPages}>Painel de Notícias</h1>
                <Button onClick={() => { onNavigate('/Perfil/Adm/CreateNoticia') }} className={`${styles.perfilAdmSectionCrudButton}`}>
                    <h4 className={`${styles.perfilAdmSectionCrudButtonText} m-0`}>Criar Notícia</h4>
                </Button>
                {noticias && noticias.map((noticia, i) => {
                    return (
                        <>
                            <Card key={i} noticia={noticia}></Card>
                            <button onClick={() => { handleDelete(noticia.id) }}>Excluir</button>
                            {console.log(noticia.id)}
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default CrudNoticias