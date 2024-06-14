import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import Card from '../../components/Card/Card'
import styles from './Pesquisa.module.css'
import { Search } from 'react-bootstrap-icons'
import Col from 'react-bootstrap/Col'

const PesquisaTempoReal = () => {
    const [Pesquisa, setPesquisa] = useState('');
    const [Results, setResults] = useState([]);
    const db = getFirestore();
    const [mostrarCampoPesquisa, setMostrarCampoPesquisa] = useState(false);

    useEffect(() => {
        if (Pesquisa.trim()) {
            const q = query(
                collection(db, 'Noticias'),
                where('titulo', '>=', Pesquisa),
                where('titulo', '<=', Pesquisa + '\uf8ff')
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const Noticias = [];
                querySnapshot.forEach((doc) => {
                    Noticias.push(doc.data());
                });
                setResults(Noticias);
            });

            return () => unsubscribe();
        } else {
            setResults([]);
        }
    }, [Pesquisa, db]);

    const handlePesquisaChange = (e) => {
        setPesquisa(e.target.value);
    };

    const [showPesquisa, setShowPesquisa] = useState(false)
    const handleClosePesquisa = () => setShowPesquisa(false)
    const handleShowPesquisa = () => setShowPesquisa(true)

    return (
        <>
            <div className={`${styles.pesquisa}`}>
                <button className={`${styles.searchButton} ${styles.searchIcon}`} onClick={() => { showPesquisa ? handleClosePesquisa() : handleShowPesquisa() }}>
                    <Search />
                </button>
                {!showPesquisa ? null : <input className={`${styles.formInputMobile} ${styles.botaoContainer}`}
                    type="text"
                    name='Pesquisa'
                    placeholder="Buscar..."
                    value={Pesquisa}
                    onChange={handlePesquisaChange}
                />}
            </div>
            {Results.length === 0 ? null : <Col xs={12} className={`${styles.linha} m-0 flex-column p-2 d-flex justify-content-center align-items-center`}>
                {Results.map((Result, i) => {
                    return (
                        <Card key={i} noticia={Result}></Card>
                    )
                })}
            </Col>
            }
        </>
    );
};

export default PesquisaTempoReal;
