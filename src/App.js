import { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorInput from "./components/ColorInput";
import tinycolor from "tinycolor2";

var toHex = require('colornames')

function App() {

  const [color, setColor] = useState(tinycolor(''));
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(false);
  
  useEffect( () => { //I love useEffect Hook :)
    setHexValue(toHex(color._originalInput));
    setIsDarkText(color._ok ? color.isDark() : false);
  },[color]);
  
  function handleColor(e){
    const { value } = e.target;
    setColor(tinycolor(value));
  }

  return (
    <div className="App">
      <ColorBox  color={ color } hexValue={ hexValue } isDarkText={ isDarkText }/>
      <ColorInput handleColor={ handleColor } colorInput={ color }/>
    </div>
  );
}

export default App;
