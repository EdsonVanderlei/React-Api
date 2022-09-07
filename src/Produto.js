import React from 'react'

const Produto = ({nome,id,descricao,fotos,vendido, usuario_id,preco}) => {
  return (
    <div>
        <p>{nome}</p>
        <p>R$ {preco}</p>
        <img src={fotos[0].src}/>
    </div>
  )
}

export default Produto