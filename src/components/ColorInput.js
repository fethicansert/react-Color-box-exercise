import React from 'react'

function ColorInput({ colorInput, handleColor }) {
  return (
    <form onSubmit={ (e) => e.preventDefault() }>
        <input 
            type='text' 
            value={ colorInput._originalInput} 
            placeholder='put drop box yerse hadi bakim' 
            onChange={ handleColor} 
            autoFocus required 
        />
    </form>
  )
}

export default ColorInput
