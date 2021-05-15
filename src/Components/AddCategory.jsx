import React, {  useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({categoria,setCategoria}) => {

    const [inputV, setInputV] = useState('')


    const eventoTimeReal=(evento)=>{
     setInputV(evento.target.value)
     
    }

    const submitFormSinRefresh=(evento)=>{
      evento.preventDefault()

      if(inputV.trim().length>2){
        setCategoria([inputV,...categoria])
      }else{
          console.log('Completa el campo')
      }
      
    }    
    return (
        <div className="fragmentAdd">

            <h2>Search Category</h2>
            {/* <h6>{inputV}</h6> */}
            <form onSubmit={submitFormSinRefresh}>
                <input type="text"
                 value={inputV}
                 onChange={eventoTimeReal} 
                 className="inputText"
                 placeholder="Search gif .."
                />
            </form>
        </div>
    )
}
AddCategory.propTypes={
    setCategoria:PropTypes.func.isRequired
}
