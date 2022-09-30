import React from 'react'
import Imagem from './Imagem'

export const ListaImagens = ({pics}) => {
    return (
        pics.map((pic, key)=> (
            <Imagem
            pic={pic.src.small}
            alt={pic.alt}
            />
        ))
    )
}

export default ListaImagens