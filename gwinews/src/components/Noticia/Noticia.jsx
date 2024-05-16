import React from 'react'

const Noticia = (props) => {
    return (
        <>
            {props.list.map((noticia, i) => (
                <div key={i}>
                    <h2>{noticia.titulo}</h2>
                </div>
            ))}
        </>
)
}

export default Noticia