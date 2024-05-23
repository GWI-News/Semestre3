import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Teste from './components/Teste/Teste';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

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

  const [logos, setLogos] = useState([])
  const logosCollectionRef = collection(db, 'Logos')

  useEffect(() => {
    const getLogos = async () => {
      const data = await getDocs(logosCollectionRef)
      setLogos(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getLogos()
  }, [])

  return (
    <>
      <Header logos={logos}></Header>
      <Navbar></Navbar>
    </>
  )
}

export default App
