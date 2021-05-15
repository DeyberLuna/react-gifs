import React  from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { CardItem } from './CardItem';

export const GifGrid = ({category}) => {


    const {data:Images,loading}=useFetchGifs( category );

    return (
        <>
           { loading?<p>Loading...</p> : <p></p>}
           <div className="gridContainer ">
               {
                   Images.map(img=>{
                        
                      return <CardItem 
                      {...img}
                      key={img.id} />
                   })
               }

           </div>
        </>
    )
}
