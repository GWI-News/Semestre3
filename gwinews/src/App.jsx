import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom';
import loading from './assets/loadingGif.gif';

import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { userAuthentication } from './hooks/userAuthentication';

import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewsPage from './pages/NewsPage/NewsPage';
import SobreNos from './pages/SobreNos/SobreNos';
import Perfil from './pages/Perfil/Perfil';

import Cotacoes from './components/Cotacoes/Cotacoes';

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()
  const loadingUser = user == undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  const [noticias, setNoticias] = useState([])
  const noticiasCollectionRef = collection(db, 'Noticias')

  useEffect(() => {
    const getNoticias = async () => {
      const data = await getDocs(noticiasCollectionRef)
      setNoticias(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getNoticias()
  }, [])

  const [logos, setLogos] = useState([])
  const logosCollectionRef = collection(db, 'Logos')

  useEffect(() => {
    const getLogos = async () => {
      const data = await getDocs(logosCollectionRef)
      setLogos(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getLogos()
  }, [])

  const [propagandas, setPropagandas] = useState([])
  const propagandasCollectionRef = collection(db, 'Propagandas')

  useEffect(() => {
    const getPropagandas = async () => {
      const data = await getDocs(propagandasCollectionRef)
      setPropagandas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getPropagandas()
  }, [])

  // if (loadingUser) {
  //   return <div><img src={loading}></img></div>
  // }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header logos={logos}></Header>
          <Routes>
            <Route path='/' element={<NewsPage noticias={noticias}></NewsPage>}></Route>
            <Route path='/Empregos/' element={<NewsPage noticias={noticias.filter(noticia => noticia.categoria === 'empregos')}></NewsPage>}></Route>
            <Route path='/Educacao/' element={<NewsPage noticias={noticias.filter(noticia => noticia.categoria === 'educacao')}></NewsPage>}></Route>
            <Route path='/Esportes/' element={<NewsPage noticias={noticias.filter(noticia => noticia.categoria === 'esportes')}></NewsPage>}></Route>
            <Route path='/Entretenimento/' element={<NewsPage noticias={noticias.filter(noticia => noticia.categoria === 'entretenimento')}></NewsPage>}></Route>
            <Route path='/Economia/' element={<NewsPage noticias={noticias.filter(noticia => noticia.categoria === 'economia')}></NewsPage>}></Route>
            <Route path='/SobreNos/' element={<SobreNos></SobreNos>}></Route>
            <Route path='/Perfil/' element={<Perfil></Perfil>}></Route>
            <Route path='*' element={<Navigate to='/' />}></Route>

            <Route path='/Economia/Moedas' element={<Cotacoes></Cotacoes>}></Route>
          </Routes>
          <Navbar></Navbar>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
