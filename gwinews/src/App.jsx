import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/config';
import Noticia from './components/Noticia/Noticia';

function App() {
  const [noticias, setNoticias] = useState([])
  const noticiasCollectionRef = collection(db, 'Noticias')

  useEffect(() => {
    const getNoticias = async () => {
      const data = await getDocs(noticiasCollectionRef)
      setNoticias(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getNoticias()
  }, [])

  return (
    <>
    <Noticia list={ noticias }></Noticia>
    </>
  )
}

export default App
