import React from 'react'

const Noticia = ({noticias}) => {
    return (
        <>
            {noticias.map((noticia, i) => (
                <div key={i}>
                    <h2>{noticia.titulo}</h2>
                    <img src={noticia.img} style={{width:'100px', height:'100px'}} />
                </div>
            ))}
        </>
)
}

export default Noticia