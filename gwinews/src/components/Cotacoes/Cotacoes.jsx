import Moeda from '../Moeda/Moeda'
import styles from './Cotacoes.module.css'
import { useState, useEffect } from 'react'

const Cotacoes = () => {
    const [moedas, setMoedas] = useState([])

    useEffect(() => {
        const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL';
        fetch(url)
            .then(response => response.json())
            .then(data => setMoedas(data));
    }, []);

    return (
        <>
            <div className={styles.page}>
                {moedas && Object.keys(moedas).map((coin, i) => {
                    const moeda = moedas[coin];
                    return (
                        <Moeda key={i} name={moeda.name} code={moeda.code} bid={moeda.bid}></Moeda>
                    )
                })}
            </div>
        </>

// link da página da API: https://docs.awesomeapi.com.br/api-de-moedas
// Exemplo de Moeda da API
// "USDBRL": {
//     "code": "USD",
//     "codein": "BRL",
//     "name": "Dólar Americano/Real Brasileiro",
//     "high": "5.734",
//     "low": "5.7279",
//     "varBid": "-0.0054",
//     "pctChange": "-0.09",
//     "bid": "5.7276",
//     "ask": "5.7282",
//     "timestamp": "1618315045",
//     "create_date": "2021-04-13 08:57:27"
// }
    )
}

export default Cotacoes