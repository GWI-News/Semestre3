import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';

const NewsCard = ({ noticia }) => {
    return (
        <Card style={{ width: '25rem' }} className={`${styles.card} mb-3`}>
            <Card.Img xs={10} variant="top" src={noticia.img} className={`${styles.image}`} />
            <Card.Body>
                <Card.Title className={`${styles.title}`}>{noticia.titulo}</Card.Title>
                <Card.Text>
                    {noticia.descricao}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;