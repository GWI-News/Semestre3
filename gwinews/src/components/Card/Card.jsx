import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';

const NewsCard = ({ noticia }) => {
    return (
        <>
            <Card className={`${styles.card}`}>
                <Card.Img xs={10} variant="top" src={noticia.img} />
                <Card.Body className='p-3'>
                    <Card.Title className='m-0'>{noticia.titulo}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default NewsCard;