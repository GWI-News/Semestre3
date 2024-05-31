import React from 'react'

const Moeda = ({name, code, bid}) => {
  return (
    <>
        <h1>{name}</h1>
        <h2>{code}</h2>
        <h3>{bid}</h3>
    </>
  )
}

export default Moeda