import React from 'react';
import styles from './PaginaErro.module.css';
import { Link } from 'react-router-dom';

const PaginaErro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.message}>Página não encontrada</div>
      <Link to="/" className={styles.link}>Voltar para a página inicial</Link>
    </div>
  );
};

export default PaginaErro;
