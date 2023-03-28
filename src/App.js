import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [value, setValue] = useState('');
  const [modifiedValue, setModifiedValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const modified = inputValue.split('').filter((_, index) => (index + 1) % 3 !== 0).join('');
    setValue(inputValue);
    setModifiedValue(modified);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <input type="text" value={value} onChange={handleChange} />
          <div className="output">{modifiedValue}</div>
        </div>
    
      </header>
    </div>
  );
}

export default App;
