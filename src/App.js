import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import InputShortner from './InputShortner';
import LinkResult from './LinkResult';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
        <InputShortner setInputValue={setInputValue}/>
        <BackgroundAnimation/>
        <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
