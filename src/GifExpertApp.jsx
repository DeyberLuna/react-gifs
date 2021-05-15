import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['superman'])

    return (
        <div>

            <h1>GifExpertAppApi</h1>
            <hr />
            <AddCategory categoria={categoria} setCategoria={setCategoria}/>
    
            <ul>
                {
                    categoria.map((category,indice)=>{
                       return <GifGrid key={category} category={category} />
                    })
                }
            </ul>
            
        </div>
    )
}
