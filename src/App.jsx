import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loading from './assets/loadingGif.gif';

import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { userAuthentication } from './hooks/userAuthentication';

import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Navbar from './components/Navbar/Navbar';
import NewsPage from './pages/NewsPage/NewsPage';
import SobreNos from './pages/SobreNos/SobreNos';
import PerfilAdm from './pages/PerfilAdm/PerfilAdm';
import PerfilLeitor from './pages/PerfilLeitor/PerfilLeitor';
import Faq from './pages/Faq/Faq';
import PaginaErro from './pages/PaginaErro/PaginaErro';
import CrudNoticias from './pages/CrudNoticias/CrudNoticias';
import CreateNoticia from './pages/CreateNoticia/CreateNoticia';

import Cotacoes from './components/Cotacoes/Cotacoes';
import Crud from './pages/Crud/Crud';

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

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header logos={logos}></Header>
          <ProgressBar></ProgressBar>
          <Routes>
            <Route path='/' element={<NewsPage categoria='Todas as Categorias' noticias={noticias}></NewsPage>}></Route>
            <Route path='/Empregos/' element={<NewsPage categoria='Empregos' noticias={noticias.filter(noticia => noticia.categoria === 'empregos')}></NewsPage>}></Route>
            <Route path='/Educacao/' element={<NewsPage categoria='Educação' noticias={noticias.filter(noticia => noticia.categoria === 'educacao')}></NewsPage>}></Route>
            <Route path='/Esportes/' element={<NewsPage categoria='Esportes' noticias={noticias.filter(noticia => noticia.categoria === 'esportes')}></NewsPage>}></Route>
            <Route path='/Entretenimento/' element={<NewsPage categoria='Entretenimento' noticias={noticias.filter(noticia => noticia.categoria === 'entretenimento')}></NewsPage>}></Route>
            <Route path='/Economia/' element={<NewsPage categoria='Economia' noticias={noticias.filter(noticia => noticia.categoria === 'economia')}></NewsPage>}></Route>
            <Route path='/SobreNos/' element={<SobreNos></SobreNos>}></Route>
            <Route path='/Perfil/Adm' element={<PerfilAdm></PerfilAdm>}></Route>
            <Route path='/Perfil/Adm/CrudNoticias' element={<CrudNoticias></CrudNoticias>}></Route>
            <Route path='/Perfil/Adm/CreateNoticia' element={<CreateNoticia></CreateNoticia>}></Route>
            <Route path='/Perfil/Leitor' element={<PerfilLeitor></PerfilLeitor>}></Route>
            <Route path='/Faq' element={<Faq></Faq>}></Route>
            <Route path='*' element={<PaginaErro />}></Route>

            <Route path='/Economia/Moedas' element={<Cotacoes></Cotacoes>}></Route>
            <Route path='/Crud' element={<Crud></Crud>}></Route>
          </Routes>
          <Navbar></Navbar>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
