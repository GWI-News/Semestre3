import React from 'react'
import { useState } from 'react'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export const crudNoticiaHook = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  function checkIfIsCancelled() {
    if (cancelled) {
      return
    }
  }

  const noticiasCollectionRef = collection(db, 'Noticias')

  const createNoticia = async (noticia) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      await addDoc(noticiasCollectionRef, { titulo: noticia.titulo, subtitulo: noticia.subtitulo, texto: noticia.texto, categoria: noticia.categoria, img: noticia.imageUrl, alt_imagem: noticia.alt_imagem, autor: noticia.autor })
      setLoading(false)
    } catch {
      console.error(error.message)
      console.table(typeof error.message)

      let systemErrorMessage
      systemErrorMessage = 'Ocorreu um Erro na Criação, Tente Novamente mais Tarde.'

      setLoading(false)
      setError(systemErrorMessage)
    }
  }

  const deleteNoticia = async (id) => {
    const notDoc = doc(db, 'Noticias', id)
    await deleteDoc(notDoc)
  }

  return { createNoticia, deleteNoticia }
}