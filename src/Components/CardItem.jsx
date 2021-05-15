import React from 'react'

export const CardItem = ({id,title,url}) => {
    return (
        <div className="cardItem ">
             
                <span>{title}</span>
                <img src={url} alt={title} />
            
        </div>
    )
}
