import React from 'react'


function ColorBox({ color, hexValue, isDarkText }) {

    return (
        <div style={ {backgroundColor: color._ok ? color._originalInput : 'white' } }  className='color-box'>
            {!color._ok && <p>Empty Color Value</p>}
            {hexValue && <p style={ { color: isDarkText ? 'white': 'black' } }>{hexValue}</p> }
        </div>
    );
}

export default ColorBox

//if color empty than falsy -- !falsy === true  --
//if color not empty than truthy --  !truthy === false --
