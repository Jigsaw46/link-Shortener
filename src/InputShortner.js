import React, { useState } from 'react';

const InputShortner = ({setInputValue}) => {

  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className='container'>
      <div className='inputcontainer'>
        <h1>URL <span>Shortener</span></h1>
        <div className='input-container'>
          <input type='text' placeholder='Paste the link here' value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={handleClick} className='button'>Shorten</button>
        </div>
      </div>
    </div>
  )
}

export default InputShortner;
