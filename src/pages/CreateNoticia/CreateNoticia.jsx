import React, { useEffect, useState } from 'react';
import styles from './CreateNoticia.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { crudNoticiaHook } from '../../hooks/crudNoticiaHook';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useAuthValue } from '../../context/AuthContext';

const CreateNoticia = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const { createNoticia } = crudNoticiaHook();

  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [alt_imagem, setAlt_imagem] = useState('');
  const [autor, setAutor] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const storage = getStorage();

  const handleCreateNoticia = async (e) => {
    e.preventDefault();

    const noticia = {
      titulo,
      subtitulo,
      texto,
      categoria,
      imageUrl,
      alt_imagem,
      autor,
    };
    await createNoticia(noticia);

    navigate('/Perfil/Adm/CrudNoticias');
    console.log('Noticia Criada');
  };

  const handleSubmit = async () => {
    if (!image) return
    const storageRef = ref(storage, `${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    console.log("imagem upload");
    const url = await getDownloadURL(snapshot.ref);
    setImageUrl(url);
  };

  const HandleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [image])

  const { user } = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])

  return (
    <>
      <Container fluid className={styles.CreateNoticiaPage}>
        <Col>
          <Form onSubmit={handleCreateNoticia} className='d-flex flex-column justify-content-center'>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Categoria:</Form.Label>
              <Form.Control required type='text' name='categoria' value={categoria} placeholder='Insira a Categoria da Notícia' className={styles.formInputMobile} onChange={(e) => { setCategoria(e.target.value) }} />
            </Form.Group>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Título:</Form.Label>
              <Form.Control required type='text' name='titulo' value={titulo} placeholder='Insira o Título' className={styles.formInputMobile} onChange={(e) => { setTitulo(e.target.value) }} />
            </Form.Group>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Subtítulo:</Form.Label>
              <Form.Control required type='text' name='subtitulo' value={subtitulo} placeholder='Insira o Subtítulo' className={styles.formInputMobile} onChange={(e) => { setSubtitulo(e.target.value) }} />
            </Form.Group>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Corpo da Notícia:</Form.Label>
              <Form.Control required type='text' name='texto' value={texto} placeholder='Insira o Texto Corpo da Notícia' className={styles.formInputMobile} onChange={(e) => { setTexto(e.target.value) }} />
            </Form.Group>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Upload de Imagem:</Form.Label>
              <Form.Control required type='file' name='image' onChange={HandleFileChange} className={styles.formInputMobile} />
            </Form.Group>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Descrição da Imagem:</Form.Label>
              <Form.Control required type='text' name='alt_img' value={alt_imagem} placeholder='Insira a Descrição da Imagem' className={styles.formInputMobile} onChange={(e) => { setAlt_imagem(e.target.value) }} />
            </Form.Group>
            <Form.Group className='d-flex flex-column justify-content-center align-items-center pt-1 pb-2'>
              <Form.Label className={styles.formLabelMobile}>Nome do Autor:</Form.Label>
              <Form.Control required type='text' name='autor' value={autor} placeholder='Insira o Nome do Autor' className={styles.formInputMobile} onChange={(e) => { setAutor(e.target.value) }} />
            </Form.Group>
            <div className='d-flex justify-content-center align-items-center pt-2 pb-2'>
              <button className={`${styles.formButtonMobile} btn btn-primary`}>
                Criar Notícia
              </button>
            </div>
          </Form>
        </Col>
      </Container>
    </>
  )
};

export default CreateNoticia;